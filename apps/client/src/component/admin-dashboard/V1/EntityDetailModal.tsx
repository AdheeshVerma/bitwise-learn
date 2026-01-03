"use client";

import { X, Trash, PenLine } from "lucide-react";
import { useState } from "react";

type Role = "SUPER_ADMIN" | "ADMIN" | "INSTITUTION" | "TEACHER";

type Props = {
    entityType: string;
    data: {
        id: number;
        name?: string;
        batchname?: string;
    };
    role: Role;
    onClose: () => void;
    onDelete: (id: number) => void;
};

const permissions: Record<Role, ("EDIT" | "DELETE")[]> = {
    SUPER_ADMIN: ["EDIT", "DELETE"],
    ADMIN: ["EDIT"],
    INSTITUTION: [],
    TEACHER: [],
};

export default function EntityDetailsModal({
    entityType,
    data,
    role,
    onClose,
    onDelete,
}: Props) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(data.batchname ?? data.name ?? "");

    return (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
            <div className="bg-divBg rounded-2xl p-6 w-full max-w-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white"
                >
                    <X />
                </button>

                <h2 className="text-white text-2xl mb-4">{entityType} Details</h2>

                <div className="space-y-4">
                    <div>
                        <label className="text-primaryBlue text-sm">Name</label>
                        {isEditing ? (
                            <input
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="w-full bg-transparent border-b border-primaryBlue text-white outline-none"
                            />
                        ) : (
                            <p className="text-white mt-1">{value}</p>
                        )}
                    </div>
                </div>

                <div className="flex justify-end gap-4 mt-6">
                    {permissions[role].includes("EDIT") && (
                        <button
                            onClick={() => setIsEditing((p) => !p)}
                            className="flex items-center gap-2 text-primaryBlue"
                        >
                            <PenLine size={18} />
                            {isEditing ? "Save" : "Edit"}
                        </button>
                    )}

                    {permissions[role].includes("DELETE") && (
                        <button
                            onClick={() => onDelete(data.id)}
                            className="flex items-center gap-2 text-red-500"
                        >
                            <Trash size={18} />
                            Delete
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
