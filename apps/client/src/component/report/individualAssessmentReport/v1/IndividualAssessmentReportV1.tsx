"use client";
const initialData = [
  {
    student: {
      name: "Aarav Sharma",
      batch: "Batch 25",
      rollNumber: "B25-001",
      email: "aarav.sharma@example.com",
    },
    startedAt: "2026-02-01T10:01:12.000Z",
    submittedAt: "2026-02-01T11:42:45.000Z",
    totalMarks: 82,
    studentIp: "192.168.1.14",
    proctoringStatus: "CLEAN",
  },
  {
    student: {
      name: "Neha Verma",
      batch: "Batch 25",
      rollNumber: "B25-004",
      email: "neha.verma@example.com",
    },
    startedAt: "2026-02-01T10:05:33.000Z",
    submittedAt: "2026-02-01T11:55:02.000Z",
    totalMarks: 91,
    studentIp: "192.168.1.22",
    proctoringStatus: "CLEAN",
  },
  {
    student: {
      name: "Rohit Mehta",
      batch: "Batch 25",
      rollNumber: "B25-009",
      email: "rohit.mehta@example.com",
    },
    startedAt: "2026-02-01T10:00:05.000Z",
    submittedAt: "2026-02-01T10:48:18.000Z",
    totalMarks: 64,
    studentIp: "10.0.0.15",
    proctoringStatus: "SUSPICIOUS",
  },
  {
    student: {
      name: "Sneha Iyer",
      batch: "Batch 25",
      rollNumber: "B25-013",
      email: "sneha.iyer@example.com",
    },
    startedAt: "2026-02-01T10:12:49.000Z",
    submittedAt: "2026-02-01T12:00:00.000Z",
    totalMarks: 47,
    studentIp: "172.16.4.33",
    proctoringStatus: "MALPRACTICE",
  },
  {
    student: {
      name: "Kunal Singh",
      batch: "Batch 25",
      rollNumber: "B25-018",
      email: "kunal.singh@example.com",
    },
    startedAt: "2026-02-01T10:03:21.000Z",
    submittedAt: "2026-02-01T11:20:10.000Z",
    totalMarks: 76,
    studentIp: "192.168.0.88",
    proctoringStatus: "CLEAN",
  },
];

import { getStudentData } from "@/api/reports/get-assessment-report";
import React, { useEffect, useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

type ReportRow = {
  student: {
    name: string;
    batch: string;
    rollNumber: string;
    email: string;
  };
  startedAt: string;
  submittedAt: string;
  totalMarks: number;
  studentIp: string;
  proctoringStatus: string;
};

const STATUS_COLORS: Record<string, string> = {
  CLEAN: "#22c55e",
  SUSPICIOUS: "#facc15",
  MALPRACTICE: "#ef4444",
};

function IndividualAssessmentReportV1({
  assessmentId,
}: {
  assessmentId: string;
}) {
  const [assessmentInfo, setAssessmentInfo] =
    useState<ReportRow[]>(initialData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function handleLoad() {
      // setLoading(true);
      // await getStudentData(assessmentId, 0, setAssessmentInfo);
      // setLoading(false);
    }
    handleLoad();
  }, [assessmentId]);

  /* -------------------- Derived Metrics -------------------- */

  const stats = useMemo(() => {
    const total = assessmentInfo.length;
    const avg =
      total === 0
        ? 0
        : Math.round(
            assessmentInfo.reduce((a, b) => a + b.totalMarks, 0) / total,
          );

    const statusCount = assessmentInfo.reduce(
      (acc: Record<string, number>, curr) => {
        acc[curr.proctoringStatus] = (acc[curr.proctoringStatus] || 0) + 1;
        return acc;
      },
      {},
    );

    return { total, avg, statusCount };
  }, [assessmentInfo]);

  const proctoringChartData = Object.entries(stats.statusCount).map(
    ([key, value]) => ({
      name: key,
      value,
    }),
  );

  /* -------------------- UI -------------------- */

  if (loading) {
    return (
      <div className="p-6 text-neutral-400 animate-pulse">
        Loading assessment report...
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      {/* ================== Header ================== */}
      <div>
        <h1 className="text-xl font-semibold text-white">Assessment Report</h1>
        <p className="text-sm text-neutral-400">
          Performance & proctoring overview
        </p>
      </div>

      {/* ================== Stats ================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Students" value={stats.total} />
        <StatCard title="Average Score" value={`${stats.avg}%`} />
        <StatCard
          title="Malpractice Cases"
          value={stats.statusCount["MALPRACTICE"] || 0}
          danger
        />
      </div>

      {/* ================== Charts ================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Marks Distribution */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
          <h3 className="text-sm text-neutral-300 mb-4">Student Scores</h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={assessmentInfo}>
              <XAxis dataKey="student.name" tick={{ fontSize: 10 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="totalMarks" fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Proctoring Status */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
          <h3 className="text-sm text-neutral-300 mb-4">Proctoring Status</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={proctoringChartData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
              >
                {proctoringChartData.map((entry) => (
                  <Cell key={entry.name} fill={STATUS_COLORS[entry.name]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ================== Table ================== */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-neutral-800 text-neutral-400">
            <tr>
              <th className="px-4 py-3 text-left">Student</th>
              <th className="px-4 py-3">Roll No</th>
              <th className="px-4 py-3">Marks</th>
              <th className="px-4 py-3">Started</th>
              <th className="px-4 py-3">Submitted</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {assessmentInfo.map((row, i) => (
              <tr
                key={i}
                className="border-t border-neutral-800 hover:bg-neutral-800/40"
              >
                <td className="px-4 py-3 text-white">{row.student.name}</td>
                <td className="px-4 py-3 text-neutral-300">
                  {row.student.rollNumber}
                </td>
                <td className="px-4 py-3 text-neutral-300">{row.totalMarks}</td>
                <td className="px-4 py-3 text-neutral-400">
                  {new Date(row.startedAt).toLocaleTimeString()}
                </td>
                <td className="px-4 py-3 text-neutral-400">
                  {new Date(row.submittedAt).toLocaleTimeString()}
                </td>
                <td className="px-4 py-3">
                  <span
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={{
                      backgroundColor:
                        STATUS_COLORS[row.proctoringStatus] + "22",
                      color: STATUS_COLORS[row.proctoringStatus],
                    }}
                  >
                    {row.proctoringStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ================== Reusable Card ================== */

function StatCard({
  title,
  value,
  danger,
}: {
  title: string;
  value: string | number;
  danger?: boolean;
}) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
      <p className="text-sm text-neutral-400">{title}</p>
      <p
        className={`text-2xl font-semibold ${
          danger ? "text-red-400" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

export default IndividualAssessmentReportV1;
