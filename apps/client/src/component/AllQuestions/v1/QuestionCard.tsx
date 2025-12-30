"use client";

import Link from "next/link";
import React from "react";

type Difficulty = "easy" | "medium" | "hard";

function QuestionCard({
  id,
  name,
  topics,
  difficulty,
  solved,
}: {
  id: string;
  name: string;
  topics: string[];
  difficulty: Difficulty;
  solved: boolean;
}) {
  return (
    <div
      className="
        group flex items-center
        px-4 py-3
        bg-primary-bg hover:bg-secondary-bg
        transition w-[90%] mx-auto
      "
    >
      {/* Status */}
      <div className="w-8 flex justify-center shrink-0">
        {solved && <span className="text-green-400 text-sm">✔</span>}
      </div>

      {/* Title */}
      <div className="flex-1 max-w-[60%]">
        <Link
          href={`/problems/${id}`}
          className="text-md text-white group-hover:text-blue-400 truncate"
        >
          {name}
        </Link>
      </div>

      {/* Difficulty */}
      <div className="w-24 text-sm shrink-0">
        <DifficultyBadge difficulty={difficulty} />
      </div>

      {/* Topics */}
      <div className="w-56 flex gap-2 justify-end shrink-0">
        {topics.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="
              text-xs px-2 py-1
              rounded-md
              bg-white/5
              text-white/60
              whitespace-nowrap
            "
          >
            {topic}
          </span>
        ))}
        {topics.length > 3 && (
          <span className="text-xs text-white/40">+{topics.length - 3}</span>
        )}
      </div>
    </div>
  );
}

function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const map = {
    easy: "text-green-400",
    medium: "text-yellow-400",
    hard: "text-red-400",
  };

  return (
    <span className={`font-medium ${map[difficulty]}`}>
      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
    </span>
  );
}

export default QuestionCard;
