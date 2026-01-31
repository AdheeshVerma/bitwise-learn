// /assessment-report/:assessmentId/
import axiosInstance from "@/lib/axios";

export async function getStudentData(
  assessmentId: string,
  pageNumber: number,
  setStudentData: (data: any) => void,
) {
  const data = await axiosInstance.post("/api/reports/assessment-report/", {
    assessmentId,
    pageNumber,
  });
  setStudentData(data.data.data);
}
