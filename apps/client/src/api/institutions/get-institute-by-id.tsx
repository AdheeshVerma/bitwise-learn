import axiosInstance from "@/lib/axios";

export const getInstituteData = async (statefn: any, paramId: string) => {
  try {
    const getInstitution = await axiosInstance.get(
      "/api/institution/" + paramId,
    );
    statefn(getInstitution.data);
  } catch (error) {}
};
