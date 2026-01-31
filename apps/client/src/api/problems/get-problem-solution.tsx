import axiosInstance from "@/lib/axios";

export const getProblemSolutionById = async (statefn: any, id: string) => {
  const getProblem = await axiosInstance.get("/api/get-problem/solution/" + id);
  statefn(getProblem.data);
};
