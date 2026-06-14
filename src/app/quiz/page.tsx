"use client";

import { useCallback, useState } from "react";
import { CheckCircle2, RotateCcw, Trophy, XCircle } from "lucide-react";
import { Confetti } from "@/components/Confetti";
import { PhaseBadge } from "@/components/PhaseBadge";
import { useSoundPreference } from "@/hooks/useSoundPreference";
import {
  getQuestionsForDifficulty,
  getRank,
  type QuizDifficulty,
  type QuizQuestion,
} from "@/lib/quiz-data";
import { cn } from "@/lib/utils";

type GameScreen = "start" | "question" | "feedback" | "results";

const DIFFICULTY_OPTIONS: {
  value: QuizDifficulty;
  label: string;
  description: string;
}[] = [
  { value: "cadet", label: "Cadet", description: "Basics only" },
  { value: "pilot", label: "Pilot", description: "Mixed challenge" },
  { value: "captain", label: "Captain", description: "Full difficulty" },
];

function AirplaneGraphic() {
  return (
    <svg
      viewBox="0 0 200 120"
      className="h-28 w-44 sm:h-36 sm:w-56"
      aria-hidden
    >
      <defs>
        <linearGradient id="planeBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="planeWing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="62" rx="52" ry="14" fill="url(#planeBody)" />
      <polygon points="148,62 188,58 188,66 148,66" fill="#38bdf8" />
      <polygon points="52,62 18,50 18,74 52,66" fill="#38bdf8" />
      <polygon points="78,50 122,50 108,62 92,62" fill="url(#planeWing)" />
      <polygon points="78,74 122,74 108,62 92,62" fill="url(#planeWing)" />
      <rect x="88" y="38" width="24" height="16" rx="4" fill="#1e3a5f" />
      <circle cx="100" cy="46" r="5" fill="#fbbf24" opacity="0.9" />
      <circle cx="168" cy="62" r="6" fill="#fbbf24" />
      <path
        d="M 30 62 Q 10 58 4 52"
        stroke="#38bdf8"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M 30 62 Q 10 66 4 72"
        stroke="#38bdf8"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export default function QuizPage() {
  const [screen, setScreen] = useState<GameScreen>("start");
  const [difficulty, setDifficulty] = useState<QuizDifficulty>("cadet");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [fadeIn, setFadeIn] = useState(true);
  const { playCorrect, playWrong } = useSoundPreference();

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const isCorrect =
    selectedIndex !== null &&
    currentQuestion &&
    selectedIndex === currentQuestion.correctIndex;

  const startGame = () => {
    setQuestions(getQuestionsForDifficulty(difficulty));
    setCurrentIndex(0);
    setScore(0);
    setSelectedIndex(null);
    setFadeIn(true);
    setScreen("question");
  };

  const handleAnswer = useCallback(
    (index: number) => {
      if (selectedIndex !== null || !currentQuestion) return;

      setSelectedIndex(index);
      if (index === currentQuestion.correctIndex) {
        setScore((s) => s + 1);
        playCorrect();
      } else {
        playWrong();
      }
      setScreen("feedback");
    },
    [currentQuestion, playCorrect, playWrong, selectedIndex]
  );

  const goToNextQuestion = useCallback(() => {
    if (currentIndex + 1 >= totalQuestions) {
      setScreen("results");
      return;
    }

    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((i) => i + 1);
      setSelectedIndex(null);
      setScreen("question");
      setFadeIn(true);
    }, 200);
  }, [currentIndex, totalQuestions]);

  const playAgain = () => {
    setScreen("start");
    setQuestions([]);
    setCurrentIndex(0);
    setScore(0);
    setSelectedIndex(null);
    setFadeIn(true);
  };

  const progress =
    totalQuestions > 0 ? ((currentIndex + 1) / totalQuestions) * 100 : 0;
  const rank = getRank(score, totalQuestions);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      {screen === "start" && (
        <section className="rounded-3xl border border-card-border bg-card p-8 text-center sm:p-12">
          <div className="mx-auto mb-6 flex items-center justify-center">
            <AirplaneGraphic />
          </div>
          <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Can You Fly?
          </h1>
          <p className="mt-2 text-xl text-accent-amber sm:text-2xl">
            Take the Controls Quiz!
          </p>
          <p className="mx-auto mt-4 max-w-md text-base text-foreground/70">
            Answer 10 questions about flying in Microsoft Flight Simulator. Pick
            your difficulty and show what you know!
          </p>

          <div className="mt-8">
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-foreground/60">
              Choose Difficulty
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              {DIFFICULTY_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setDifficulty(opt.value)}
                  className={cn(
                    "min-h-[3.5rem] flex-1 rounded-2xl border-2 px-4 py-3 font-heading font-bold transition-all active:scale-[0.98] sm:max-w-[10rem]",
                    difficulty === opt.value
                      ? "border-accent-amber bg-accent-amber/20 text-accent-amber shadow-[0_0_20px_rgba(251,191,36,0.2)]"
                      : "border-card-border bg-background text-foreground/80 hover:border-accent-sky/50"
                  )}
                >
                  <span className="block text-lg">{opt.label}</span>
                  <span className="block text-xs font-normal text-foreground/60">
                    {opt.description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={startGame}
            className="mt-8 min-h-[3.5rem] w-full rounded-2xl border-2 border-accent-sky bg-accent-sky/20 px-8 py-4 font-heading text-xl font-bold text-accent-sky transition-all hover:bg-accent-sky/30 hover:shadow-[0_0_24px_rgba(56,189,248,0.25)] active:scale-[0.98] sm:w-auto"
          >
            Start Quiz
          </button>
        </section>
      )}

      {(screen === "question" || screen === "feedback") && currentQuestion && (
        <section
          className={cn(
            "transition-opacity duration-200",
            fadeIn ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between gap-4">
              <span className="font-heading text-sm font-semibold text-foreground/70">
                Question {currentIndex + 1} of {totalQuestions}
              </span>
              <PhaseBadge phase={currentQuestion.phase} size="sm" />
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-background">
              <div
                className="h-full rounded-full bg-accent-sky transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div
            className={cn(
              "rounded-3xl border-2 bg-card p-6 transition-colors duration-300 sm:p-8",
              screen === "feedback" &&
                (isCorrect
                  ? "border-green-500/60 bg-green-500/10"
                  : "border-red-500/60 bg-red-500/10")
            )}
          >
            <h2 className="font-heading text-xl font-bold leading-snug text-foreground sm:text-2xl">
              {currentQuestion.question}
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedIndex === index;
                const isCorrectOption = index === currentQuestion.correctIndex;
                const showResult = screen === "feedback";

                return (
                  <button
                    key={option}
                    type="button"
                    disabled={screen === "feedback"}
                    onClick={() => handleAnswer(index)}
                    className={cn(
                      "min-h-[4rem] rounded-2xl border-2 px-4 py-4 text-left font-heading text-base font-semibold transition-all active:scale-[0.98] sm:min-h-[4.5rem] sm:text-lg",
                      !showResult &&
                        "border-card-border bg-background text-foreground hover:border-accent-sky/60 hover:bg-accent-sky/10",
                      showResult &&
                        isCorrectOption &&
                        "border-green-500 bg-green-500/20 text-green-300",
                      showResult &&
                        isSelected &&
                        !isCorrectOption &&
                        "border-red-500 bg-red-500/20 text-red-300",
                      showResult &&
                        !isSelected &&
                        !isCorrectOption &&
                        "border-card-border bg-background/50 text-foreground/40"
                    )}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {screen === "feedback" && (
              <div className="mt-6 opacity-100 transition-opacity duration-300">
                <div
                  className={cn(
                    "flex items-start gap-3 rounded-2xl border p-4",
                    isCorrect
                      ? "border-green-500/40 bg-green-500/10"
                      : "border-red-500/40 bg-red-500/10"
                  )}
                >
                  {isCorrect ? (
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-400" />
                  ) : (
                    <XCircle className="mt-0.5 h-6 w-6 shrink-0 text-red-400" />
                  )}
                  <div>
                    <p
                      className={cn(
                        "font-heading text-lg font-bold",
                        isCorrect ? "text-green-300" : "text-red-300"
                      )}
                    >
                      {isCorrect ? "Correct!" : "Not quite!"}
                    </p>
                    <p className="mt-1 text-base text-foreground/80">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={goToNextQuestion}
                  className="mt-6 min-h-[3.5rem] w-full rounded-2xl border-2 border-accent-amber bg-accent-amber/20 px-6 py-3 font-heading text-lg font-bold text-accent-amber transition-all hover:bg-accent-amber/30 active:scale-[0.98]"
                >
                  {currentIndex + 1 >= totalQuestions
                    ? "See Results"
                    : "Next Question"}
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {screen === "results" && (
        <section className="relative rounded-3xl border border-card-border bg-card p-8 text-center sm:p-12">
          {score === totalQuestions && <Confetti />}

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent-amber/50 bg-accent-amber/10">
            <Trophy className="h-10 w-10 text-accent-amber" aria-hidden />
          </div>

          <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Quiz Complete!
          </h1>

          <p className="mt-4 font-heading text-5xl font-bold text-accent-sky sm:text-6xl">
            {score}/{totalQuestions}
          </p>

          <div className="mt-6 rounded-2xl border border-card-border bg-background px-6 py-5">
            <p className="font-heading text-2xl font-bold text-accent-amber sm:text-3xl">
              {rank.title}
            </p>
            <p className="mt-1 text-lg text-foreground/70">
              {score === totalQuestions ? (
                <>
                  <span className="font-bold text-accent-amber">
                    {rank.subtitle}
                  </span>
                </>
              ) : (
                rank.subtitle
              )}
            </p>
          </div>

          <button
            type="button"
            onClick={playAgain}
            className="mt-8 inline-flex min-h-[3.5rem] items-center justify-center gap-2 rounded-2xl border-2 border-accent-sky bg-accent-sky/20 px-8 py-4 font-heading text-xl font-bold text-accent-sky transition-all hover:bg-accent-sky/30 active:scale-[0.98]"
          >
            <RotateCcw className="h-5 w-5" aria-hidden />
            Play Again
          </button>
        </section>
      )}
    </div>
  );
}
