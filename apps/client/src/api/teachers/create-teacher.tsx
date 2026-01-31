import axiosInstance from "@/lib/axios";

export type CreateTeacherPayload = {
  name: string;
  email: string;
  phoneNumber: string;
  instituteId: string;
  batchId: string;
  vendorId?: string | null;
};

export const createTeacher = async (
  data: CreateTeacherPayload,
  onSuccess?: () => void,
  onError?: (error: any) => void,
) => {
  try {
    const response = await axiosInstance.post(
      "/api/teacher/create-teacher",
      data,
    );

    onSuccess?.();
    return response.data;
  } catch (error: any) {
    onError?.(error);
    throw error;
  }
};
