import axiosInstance from "@/lib/axios";

export const getVendorInstitutions = async (statefn: any, paramId: string) => {
    try {
        const getInstitution = await axiosInstance.get("/api/institution/vendor-institutions/" + paramId);
        console.log(getInstitution.data);
        statefn(getInstitution.data);
    } catch (error) {
        console.log("ERRORR", error);
    }
};
