import axiosInstance from "@/lib/axios";
import React from "react";

export const getAllProblemTemplate = async (statefn: any, id: string) => {
  const getProblem = await axiosInstance.get("/api/get-problem/template/" + id);
  statefn(getProblem.data);
};
