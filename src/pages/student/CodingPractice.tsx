import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Play, Send, CheckCircle, XCircle } from "lucide-react";

const problem = {
  title: "Two Sum",
  difficulty: "Easy",
  description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
  examples: [
    { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]." },
    { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
  ],
};

const mockTestResults = [
  { id: 1, input: "[2,7,11,15], 9", expected: "[0,1]", actual: "[0,1]", passed: true },
  { id: 2, input: "[3,2,4], 6", expected: "[1,2]", actual: "[1,2]", passed: true },
  { id: 3, input: "[3,3], 6", expected: "[0,1]", actual: "[0,1]", passed: true },
];

const CodingPractice = () => {
  const [code, setCode] = useState(`function twoSum(nums, target) {\n  // Write your solution here\n  \n}`);
  const [results, setResults] = useState<typeof mockTestResults | null>(null);
  const [running, setRunning] = useState(false);

  const handleRun = () => {
    setRunning(true);
    setTimeout(() => {
      setResults(mockTestResults);
      setRunning(false);
    }, 1000);
  };

  return (
    <div className="h-[calc(100vh-112px)] flex gap-4">
      {/* Left Panel - Problem */}
      <div className="w-[340px] flex-shrink-0 bg-card rounded-xl border border-border overflow-y-auto">
        <div className="p-5 border-b border-border">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-lg font-bold font-heading text-foreground">{problem.title}</h2>
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">{problem.difficulty}</span>
          </div>
        </div>
        <div className="p-5 space-y-4">
          <div>
            <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">{problem.description}</p>
          </div>
          {problem.examples.map((ex, i) => (
            <div key={i} className="rounded-lg bg-secondary p-4">
              <p className="text-xs font-semibold text-muted-foreground mb-2">Example {i + 1}</p>
              <p className="text-sm text-foreground font-mono"><strong>Input:</strong> {ex.input}</p>
              <p className="text-sm text-foreground font-mono"><strong>Output:</strong> {ex.output}</p>
              {ex.explanation && <p className="text-sm text-muted-foreground mt-1">{ex.explanation}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Center - Editor */}
      <div className="flex-1 flex flex-col">
        <div className="bg-card rounded-xl border border-border flex-1 overflow-hidden flex flex-col">
          <div className="px-4 py-3 border-b border-border flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">JavaScript</span>
            <div className="flex gap-2">
              <button
                onClick={handleRun}
                disabled={running}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors disabled:opacity-50"
              >
                <Play size={14} /> Run Code
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                <Send size={14} /> Submit
              </button>
            </div>
          </div>
          <div className="flex-1">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              value={code}
              onChange={(v) => setCode(v || "")}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                scrollBeyondLastLine: false,
                automaticLayout: true,
                padding: { top: 16 },
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Panel - Results */}
      <div className="w-[280px] flex-shrink-0 bg-card rounded-xl border border-border overflow-y-auto">
        <div className="p-4 border-b border-border">
          <h3 className="text-sm font-semibold text-foreground">Test Results</h3>
        </div>
        <div className="p-4">
          {!results && !running && (
            <p className="text-sm text-muted-foreground text-center py-8">Run your code to see results</p>
          )}
          {running && (
            <div className="text-center py-8">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Running...</p>
            </div>
          )}
          {results && !running && (
            <div className="space-y-3">
              {results.map((r) => (
                <div key={r.id} className={`p-3 rounded-lg border ${r.passed ? "border-success/30 bg-success/5" : "border-destructive/30 bg-destructive/5"}`}>
                  <div className="flex items-center gap-2 mb-1.5">
                    {r.passed ? <CheckCircle size={14} className="text-success" /> : <XCircle size={14} className="text-destructive" />}
                    <span className="text-xs font-semibold text-foreground">Test Case {r.id}</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">Input: {r.input}</p>
                  <p className="text-xs text-muted-foreground font-mono">Expected: {r.expected}</p>
                  <p className="text-xs text-muted-foreground font-mono">Output: {r.actual}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodingPractice;
