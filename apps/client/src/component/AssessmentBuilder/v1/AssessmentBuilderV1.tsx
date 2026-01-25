"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAssessmentById } from "@/api/assessments/get-assessment-by-id";
import { createAssessmentSection } from "@/api/assessments/create-assessment-section";
import { getAssessmentSections } from "@/api/assessments/get-all-sections";
import { getSectionQuestions } from "@/api/assessments/get-section-questions";
import { deleteAssessmentSection } from "@/api/assessments/delete-assessment-section";
import { deleteAssessment } from "@/api/assessments/delete-assessment";
import AddAssessmentCode from "./AddCODEAssessmentQuestion";
import AddAssessmentMCQ from "./AddMCQAssessmentQuestion";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

interface BuilderProps {
  assessmentId: string;
}

type Assessment = {
  name: string;
  description: string;
  instruction: string;
  startTime: string;
  endTime: string;
  individualSectionTimeLimit: number;
  status: "UPCOMING" | "LIVE" | "ENDED";
  batchId: string;
};

type Section = {
  id?: string;
  name: string;
  marksPerQuestion: number;
  assessmentType: "CODE" | "NO_CODE";
};

type Question = {
  id: string;
  question?: string;
  options: string[];
  maxMarks: number;
};

// -------------------------------------------------------------------------
// Add Section Modal (unchanged)
// -------------------------------------------------------------------------

interface AddSectionModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: {
    name: string;
    marksPerQuestion: number;
    assessmentType: "CODE" | "NO_CODE";
  }) => void;
}

const AddSectionModal = ({ open, onClose, onSubmit }: AddSectionModalProps) => {
  const [form, setForm] = useState({
    name: "",
    marksPerQuestion: 1,
    assessmentType: "NO_CODE" as "CODE" | "NO_CODE",
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-800 p-6">
        <h2 className="text-lg font-semibold text-white">Create new section</h2>

        <div className="mt-4">
          <label className="text-sm text-slate-400">Section name</label>
          <input
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="mt-1 w-full rounded-lg bg-slate-800 px-3 py-2 text-sm text-white border border-slate-700 outline-none"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm text-slate-400">Marks per question</label>
          <input
            type="number"
            min={1}
            value={form.marksPerQuestion}
            onChange={(e) =>
              setForm({
                ...form,
                marksPerQuestion: Number(e.target.value),
              })
            }
            className="mt-1 w-full rounded-lg bg-slate-800 px-3 py-2 text-sm text-white border border-slate-700 outline-none"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm text-slate-400">Assessment type</label>
          <select
            value={form.assessmentType}
            onChange={(e) =>
              setForm({
                ...form,
                assessmentType: e.target.value as "CODE" | "NO_CODE",
              })
            }
            className="mt-1 w-full rounded-lg bg-slate-800 px-3 py-2 text-sm text-white border border-slate-700 outline-none"
          >
            <option value="NO_CODE">MCQ</option>
            <option value="CODE">Code</option>
          </select>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSubmit(form);
              setForm({
                name: "",
                marksPerQuestion: 1,
                assessmentType: "NO_CODE",
              });
              onClose();
            }}
            className="px-4 py-2 rounded-lg bg-sky-600 text-black font-medium"
          >
            Create Section
          </button>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------------------
// Delete Section Modal
// -------------------------------------------------------------------------

interface DeleteSectionModalProps {
  open: boolean;
  sectionId: string;
  onClose: () => void;
  onDeleted: () => void;
}

const DeleteSectionModal = ({
  open,
  sectionId,
  onClose,
  onDeleted,
}: DeleteSectionModalProps) => {
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleDelete = async () => {
    try {
      setLoading(true);

      await deleteAssessmentSection(sectionId);

      toast.success("Section deleted successfully");
      onDeleted();
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete section");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-xl
                   border border-white/10 bg-[#121313] p-6"
      >
        {/* Header */}
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-white">
            Delete section?
          </h2>
        </div>

        {/* Message */}
        <div className="text-sm text-white/70 leading-relaxed">
          Are you sure you want to delete this section?
          <br />
          <span className="text-white/40">
            All questions inside this section will be permanently removed.
          </span>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-white/10" />

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-md bg-[#181A1A] px-4 py-2
                       text-sm text-white/80
                       hover:bg-[#1F1F1F]
                       transition disabled:opacity-60"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            disabled={loading}
            className="rounded-md border border-red-500/30
                       px-4 py-2 text-sm font-medium
                       text-red-400
                       hover:border-red-500 hover:text-red-300
                       transition disabled:opacity-60"
          >
            {loading ? "Deleting..." : "Delete section"}
          </button>
        </div>
      </div>
    </div>
  );
};


// -------------------------------------------------------------------------
// Delete Assessment Modal
// -------------------------------------------------------------------------

interface DeleteAssessmentModalProps {
  open: boolean;
  assessmentId: string;
  onClose: () => void;
  onDeleted: () => void;
}

const DeleteAssessmentModal = ({
  open,
  assessmentId,
  onClose,
  onDeleted,
}: DeleteAssessmentModalProps) => {
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleDelete = async () => {
    try {
      setLoading(true);

      await deleteAssessment(assessmentId);
      console.log(assessmentId)

      toast.success("Assessment deleted successfully");
      onDeleted();
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete assessment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-xl
                   border border-white/10 bg-[#121313] p-6"
      >
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-white">
            Delete assessment?
          </h2>
        </div>

        <div className="text-sm text-white/70 leading-relaxed">
          Are you sure you want to delete this assessment?
          <br />
          <span className="text-white/40">
            All sections and questions will be permanently removed.
          </span>
        </div>

        <div className="my-6 h-px bg-white/10" />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-md bg-[#181A1A] px-4 py-2
                       text-sm text-white/80
                       hover:bg-[#1F1F1F]
                       transition disabled:opacity-60"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            disabled={loading}
            className="rounded-md border border-red-500/30
                       px-4 py-2 text-sm font-medium
                       text-red-400
                       hover:border-red-500 hover:text-red-300
                       transition disabled:opacity-60"
          >
            {loading ? "Deleting..." : "Delete assessment"}
          </button>
        </div>
      </div>
    </div>
  );
};


// -------------------------------------------------------------------------
// Main Builder
// -------------------------------------------------------------------------

const AssessmentBuilderV1 = ({ assessmentId }: BuilderProps) => {
  const [assessmentData, setAssessmentData] = useState<Assessment | null>(null);
  const [sections, setSections] = useState<Section[]>([]);
  const [openCreateSection, setOpenCreateSection] = useState(false);

  const [openSectionId, setOpenSectionId] = useState<string | null>(null);
  const [questionsBySection, setQuestionsBySection] = useState<
    Record<string, Question[]>
  >({});
  const [loadingSections, setLoadingSections] = useState<
    Record<string, boolean>
  >({});

  const [showAddMCQ, setShowAddMCQ] = useState(false);
  const [showAddCODE, setShowAddCODE] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  const [sectionMarks, setSectionMarks] = useState(0);
  const [showDeleteSection, setShowDeleteSection] = useState(false);
  const [deleteSectionId, setDeleteSectionId] = useState<string>("");
  const [showDeleteAssessment, setShowDeleteAssessment] = useState(false);


  const router = useRouter();

  const fetchAssessment = async () => {
    const res = await getAssessmentById(assessmentId);
    setAssessmentData(res.data);
  };

  const fetchSections = async () => {
    const data = await getAssessmentSections(assessmentId);
    setSections(Array.isArray(data) ? data : []);
  };

  const fetchQuestions = async (sectionId: string) => {
    if (questionsBySection[sectionId]) return;

    setLoadingSections((prev) => ({ ...prev, [sectionId]: true }));

    try {
      const data = await getSectionQuestions(sectionId);
      console.log(data);
      setQuestionsBySection((prev) => ({
        ...prev,
        [sectionId]: data || [],
      }));
    } catch {
      toast.error("Failed to load questions");
    } finally {
      setLoadingSections((prev) => ({ ...prev, [sectionId]: false }));
    }
  };

  useEffect(() => {
    fetchAssessment();
    fetchSections();
  }, [assessmentId]);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between px-1 py-4">
        <h1 className="text-xl font-semibold text-white">
          {assessmentData?.name || "Untitled Assessment"}
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => setOpenCreateSection(true)}
            className="rounded-md border border-dashed border-white/20 px-6 py-3 text-sm text-white/70 hover:border-[#1DA1F2]"
          >
            + Add Section
          </button>

          <button className="rounded-md bg-[#1DA1F2] px-4 py-2 text-sm font-medium text-black">
            Publish
          </button>
        </div>
      </div>

      <div className="h-px w-full bg-[#1DA1F2]/60 mb-8" />

      {/* Sections */}
      <div className="space-y-4">
        {sections.map((section) => {
          const isOpen = openSectionId === section.id;

          return (
            <div
              key={section.id}
              className="rounded-xl border border-white/10 bg-[#121313]"
            >
              <div
                className="flex items-center justify-between p-5 cursor-pointer"
                onClick={() => {
                  if (!section.id) return;
                  isOpen
                    ? setOpenSectionId(null)
                    : (setOpenSectionId(section.id),
                      fetchQuestions(section.id));
                }}
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {section.name}
                  </h3>
                  <p className="text-sm text-white/60">
                    {section.assessmentType === "NO_CODE" ? "MCQ" : "Code"} •{" "}
                    {section.marksPerQuestion} marks/question
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {/* Add Question */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!section.id) return;

                      setActiveSectionId(section.id);
                      setSectionMarks(section.marksPerQuestion);
                      section.assessmentType === "NO_CODE"
                        ? setShowAddMCQ(true)
                        : setShowAddCODE(true);
                    }}
                    className="rounded-md bg-[#1DA1F2] px-4 py-2 text-sm font-medium text-black
               hover:bg-[#1DA1F2]/90 transition"
                  >
                    + Add Question
                  </button>

                  {/* Edit */}
                  <button
                    className="rounded-md border border-white/10 bg-[#181A1A]
                            px-3 py-2 text-sm text-white/80
                            hover:border-[#1DA1F2] hover:text-white
                            transition">
                    Edit
                  </button>

                  {/* Delete */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!section.id) return;

                      setDeleteSectionId(section.id);
                      setShowDeleteSection(true);
                    }}
                    className="rounded-full border border-red-500/20 bg-red-500/10
                              px-2 py-2 text-sm text-red-400
                              hover:bg-red-500/20 hover:text-red-300
                              transition">
                    <Trash className="h-4 w-4" />
                  </button>
                </div>

              </div>

              {/* Questions */}
              {isOpen && (
                <div className="border-t border-white/10 px-5 py-4 space-y-4">
                  {loadingSections[section.id!] ? (
                    <p className="text-sm text-white/50">Loading questions…</p>
                  ) : questionsBySection[section.id!]?.length ? (
                    questionsBySection[section.id!].map((q, i) => (
                      <div
                        key={q.id}
                        className="rounded-xl border border-white/10 bg-[#181A1A] p-4 space-y-3"
                      >
                        <div className="flex justify-between items-start">
                          <p className="text-sm font-medium text-white">
                            {i + 1}. {q.question || "Code Question"}
                          </p>
                          <div className="flex gap-2">
                            <button className="px-3 py-1 text-xs rounded bg-slate-700 text-white">
                              Edit
                            </button>
                            <button className="px-3 py-1 text-xs rounded bg-red-500/20 text-red-400">
                              Delete
                            </button>
                          </div>
                        </div>

                        {/* Options */}
                        <div className="grid grid-cols-2 gap-2">
                          {q.options.map((opt, idx) => (
                            <div
                              key={idx}
                              className={`rounded-lg border px-3 py-2 text-xs ${idx === 0
                                ? "border-green-500 bg-green-500/10 text-green-400"
                                : "border-white/10 bg-[#121313] text-white/70"
                                }`}
                            >
                              {opt}
                              {idx === 0 && (
                                <span className="ml-2 text-[10px] uppercase">
                                  correct
                                </span>
                              )}
                            </div>
                          ))}
                        </div>

                        <p className="text-xs text-white/40">
                          Max Marks: {q.maxMarks}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-white/50">
                      No questions added yet.
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Delete Assessment Floating Button */}
      <button
        onClick={() => setShowDeleteAssessment(true)}
        className="fixed bottom-6 right-6 z-40
             flex items-center gap-2
             rounded-full border border-red-500/30
             bg-[#121313] px-5 py-3
             text-sm font-medium text-red-400
             hover:border-red-500 hover:text-red-300
             shadow-lg transition"
      >
        <Trash className="h-4 w-4" />
        Delete assessment
      </button>

      <DeleteAssessmentModal
        open={showDeleteAssessment}
        assessmentId={assessmentId}
        onClose={() => setShowDeleteAssessment(false)}
        onDeleted={() => {
          router.push("/admin-dashboard/assessments")
          console.log("Assessment deleted");
        }}
      />


      {/* Modals */}
      <AddSectionModal
        open={openCreateSection}
        onClose={() => setOpenCreateSection(false)}
        onSubmit={async (data) => {
          await createAssessmentSection({ ...data, assessmentId });
          toast.success("Section created");
          fetchSections();
        }}
      />

      <AddAssessmentMCQ
        open={showAddMCQ}
        onClose={() => setShowAddMCQ(false)}
        sectionId={activeSectionId}
        maxMarks={sectionMarks}
      />

      <AddAssessmentCode
        open={showAddCODE}
        onClose={() => setShowAddCODE(false)}
      />

      <DeleteSectionModal
        open={showDeleteSection}
        sectionId={deleteSectionId}
        onClose={() => setShowDeleteSection(false)}
        onDeleted={fetchSections}
      />

    </div>
  );
};

export default AssessmentBuilderV1;
