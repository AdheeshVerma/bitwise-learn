import axiosInstance from "@/lib/axios";

export const runCode = async (data: any) => {
  const result = await axiosInstance.post("/api/run", data);
  return result.data;
};
export const submitCode = async (data: any) => {
  const result = await axiosInstance.post("/api/submit", data);
  return result.data;
};
