"use client";
import SideBar from "@/component/general/SideBar";
import ProblemInfo from "./ProblemInfo";
import ProblemDescrption from "./ProblemDescrption";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAdminProblemData } from "@/api/problems/get-individual-problem";

function V1AdminProblem() {
  const param = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    if (param) {
      getAdminProblemData(setData, param.id as string);
    }
  });
  return (
    <div className="flex gap-4">
      <SideBar />
      <div>
        <ProblemDescrption />
        <ProblemInfo />
      </div>
    </div>
  );
}

export default V1AdminProblem;
