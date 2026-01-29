import axiosInstance from "@/lib/axios";

export const updateAssessmentStatus = async (
  assessmentId: string,
  status: "LIVE" | "ENDED"
) => {
  const res = await axiosInstance.put(
    `/api/assessments/publish-assessment/${assessmentId}`,
    { status }
  );

  return res.data.data;
};