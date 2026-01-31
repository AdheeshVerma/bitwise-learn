import axiosInstance from "@/lib/axios";

export const getVendorInstitutions = async (statefn: any, paramId: string) => {
  try {
    const getInstitution = await axiosInstance.get(
      "/api/institution/vendor-institutions/" + paramId,
    );
    statefn(getInstitution.data);
  } catch (error) {}
};
