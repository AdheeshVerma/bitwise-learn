import axiosInstance from "@/lib/axios";

export const getSectionQuestions = async (sectionId: string) => {
  const res = await axiosInstance.get(
    `/api/assessments/get-section-questions/${sectionId}`,
  );

  return res.data.data;
};
