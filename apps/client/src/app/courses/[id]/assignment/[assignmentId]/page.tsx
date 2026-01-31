"use client";
import AttemptAssignment from "@/component/courses/AttempAssignment/AttemptAssignment";

export default async function StartAssignmentPgae({
  params,
}: {
  params: { assignmentId: string };
}) {
  const { assignmentId } = await params;
  return <AttemptAssignment assignmentId={assignmentId} />;
}
