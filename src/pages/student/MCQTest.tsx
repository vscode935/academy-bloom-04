import { useState, useEffect } from "react";

const mockQuestions = [
  { id: 1, question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], correct: 1 },
  { id: 2, question: "Which data structure uses FIFO?", options: ["Stack", "Queue", "Tree", "Graph"], correct: 1 },
  { id: 3, question: "SQL stands for?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "Sequential Query Language"], correct: 0 },
  { id: 4, question: "Which is not an OS?", options: ["Windows", "Linux", "Oracle", "macOS"], correct: 2 },
  { id: 5, question: "What is a foreign key?", options: ["Primary key in another table", "A unique key", "An index", "A constraint"], correct: 0 },
];

const MCQTest = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 min
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) { setSubmitted(true); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [submitted]);

  const formatTime = (s: number) => `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  const score = Object.entries(answers).reduce((acc, [qi, ai]) => acc + (mockQuestions[Number(qi)]?.correct === ai ? 1 : 0), 0);

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-12">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl font-bold font-heading text-primary">{score}/{mockQuestions.length}</span>
        </div>
        <h1 className="text-2xl font-bold font-heading text-foreground mb-2">Test Completed!</h1>
        <p className="text-muted-foreground">You scored {score} out of {mockQuestions.length}</p>
      </div>
    );
  }

  const q = mockQuestions[current];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold font-heading text-foreground">MCQ Test</h1>
        <div className="px-4 py-2 rounded-xl bg-destructive/10 text-destructive font-mono font-bold text-sm">
          ⏱ {formatTime(timeLeft)}
        </div>
      </div>

      {/* Progress */}
      <div className="flex gap-1.5 mb-6">
        {mockQuestions.map((_, i) => (
          <div key={i} className={`h-1.5 flex-1 rounded-full ${i === current ? "bg-primary" : answers[i] !== undefined ? "bg-primary/40" : "bg-border"}`} />
        ))}
      </div>

      <div className="bg-card rounded-xl border border-border p-8">
        <p className="text-xs text-muted-foreground mb-2">Question {current + 1} of {mockQuestions.length}</p>
        <p className="text-lg font-medium text-foreground mb-6">{q.question}</p>

        <div className="space-y-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setAnswers({ ...answers, [current]: i })}
              className={`w-full text-left px-5 py-4 rounded-xl border text-sm font-medium transition-colors ${
                answers[current] === i
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border text-foreground hover:bg-secondary"
              }`}
            >
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-current text-xs mr-3">
                {String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrent(Math.max(0, current - 1))}
            disabled={current === 0}
            className="px-6 py-2.5 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors disabled:opacity-50"
          >
            Previous
          </button>
          {current === mockQuestions.length - 1 ? (
            <button onClick={() => setSubmitted(true)} className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
              Submit Test
            </button>
          ) : (
            <button onClick={() => setCurrent(current + 1)} className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MCQTest;
