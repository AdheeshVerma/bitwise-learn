import axiosInstance from "@/lib/axios";

export const getBatchData = async (statefn: any, paramId: string) => {
  const getBatch = await axiosInstance.get("/api/batch/" + paramId);
  statefn(getBatch.data);
};
