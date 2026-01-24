"use client";

import { getCourseEnrollments } from "@/api/courses/course/enrollments/get-all-enrollment";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type CourseInfo = {
  id?: string;
  name?: string;
  description?: string;
  level?: string;
  duration?: string;
  thumbnail?: string;
  instructorName?: string;
  certificate?: string;
  isPublished?: string;
  createdAt?: string;
};

type Enrollment = {
  institution: {
    name: string;
    id: string;
  };
  batch: {
    id: string;
    batchname: string;
    branch: string;
  };
};

function CourseEnrollmentV1({ courseId }: { courseId: string }) {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [courseInfo, setCourseInfo] = useState<CourseInfo>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function handleLoad() {
      setLoading(true);
      await getCourseEnrollments(courseId, setCourseInfo, setEnrollments);
      setLoading(false);
    }
    handleLoad();
  }, [courseId]);

  return (
    <div className="flex gap-6 text-white h-full">
      {/* ⬅️ LEFT: Course Sidebar */}
      <aside className="w-[320px] ml-4 mt-4 shrink-0 border border-neutral-800 bg-neutral-900 rounded-xl overflow-hidden sticky top-4 h-fit">
        {/* Thumbnail */}
        {courseInfo.thumbnail && (
          <div className="h-40 w-full overflow-hidden">
            <img
              src={courseInfo.thumbnail}
              alt={courseInfo.name}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-5 space-y-4 mt-4">
          <div>
            <h2 className="text-lg font-semibold leading-tight">
              {courseInfo.name}
            </h2>
            <p className="text-sm text-neutral-400 mt-1">
              {courseInfo.level} • {courseInfo.duration}
            </p>
          </div>

          <span className="inline-block px-3 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400">
            {courseInfo.isPublished}
          </span>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-neutral-500">Instructor</p>
              <p className="text-neutral-200">{courseInfo.instructorName}</p>
            </div>

            <div>
              <p className="text-neutral-500">Description</p>
              <p className="text-neutral-300 leading-relaxed">
                {courseInfo.description}
              </p>
            </div>

            <div>
              <p className="text-neutral-500">Created On</p>
              <p className="text-neutral-300">
                {courseInfo.createdAt
                  ? new Date(courseInfo.createdAt).toLocaleDateString()
                  : "—"}
              </p>
            </div>

            <div>
              <p className="text-neutral-500">Total Enrollments</p>
              <p className="text-neutral-200 font-semibold">
                {loading ? "—" : enrollments.length}
              </p>
            </div>
          </div>

          {/* Certificate */}
          {courseInfo.certificate && (
            <a
              href={courseInfo.certificate}
              target="_blank"
              className="block w-full text-center mt-4 px-4 py-2 text-sm rounded-md
                         bg-neutral-800 hover:bg-neutral-700 transition"
            >
              View Certificate
            </a>
          )}
        </div>
      </aside>

      {/* ➡️ RIGHT: Enrollments Table */}
      <section className="flex-1 w-[80%] mx-auto mt-4">
        <div className="border border-neutral-800 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-neutral-900 border-b border-neutral-800">
              <tr className="text-left text-sm text-neutral-400">
                <th className="px-4 py-3">Institution</th>
                <th className="px-4 py-3">Batch</th>
                <th className="px-4 py-3">Branch</th>
                <th className="px-4 py-3">Report</th>
              </tr>
            </thead>

            <tbody>
              {/* Loading Skeleton */}
              {loading &&
                Array.from({ length: 6 }).map((_, i) => (
                  <tr
                    key={i}
                    className="border-b border-neutral-800 animate-pulse"
                  >
                    {Array.from({ length: 3 }).map((_, j) => (
                      <td key={j} className="px-4 py-4">
                        <div className="h-4 w-full rounded bg-neutral-700/60" />
                      </td>
                    ))}
                  </tr>
                ))}

              {/* Data */}
              {!loading &&
                enrollments.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-neutral-800 text-sm hover:bg-neutral-800/40 transition"
                  >
                    <td className="px-4 py-3 font-medium">
                      {item.institution.name}
                    </td>
                    <td className="px-4 py-3 text-neutral-300">
                      {item.batch.batchname}
                    </td>
                    <td className="px-4 py-3 text-neutral-300">
                      {item.batch.branch}
                    </td>
                    <td className="px-4 py-3 text-neutral-300">
                      <Link
                        className="flex gap-1 items-center"
                        href={`/admin-dashboard/reports/courses/${courseId}/${item.batch.id}`}
                      >
                        <Eye />
                        View Report
                      </Link>
                    </td>
                  </tr>
                ))}

              {!loading && enrollments.length === 0 && (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-10 text-center text-neutral-500"
                  >
                    No enrollments found for this course
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default CourseEnrollmentV1;
