import axiosInstance from "@/lib/axios";

export const getProblemData = async (statefn: any, paramId: string) => {
  const getProblem = await axiosInstance.get("/api/get-problem/" + paramId);
  statefn(getProblem.data);
};
export const getAdminProblemData = async (statefn: any, paramId: string) => {
  const getProblem = await axiosInstance.get(
    "/api/admin/get-problem/" + paramId,
  );
  statefn(getProblem.data);
};
