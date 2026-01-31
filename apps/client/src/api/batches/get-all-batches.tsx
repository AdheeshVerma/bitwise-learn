import axiosInstance from "@/lib/axios";

export const getAllBatches = async (stateFn: any, paramId: string) => {
  const data = await axiosInstance.get(
    "/api/batch/get-batches-for-institution/" + paramId,
  );
  stateFn(data.data);
  return data.data;
};
