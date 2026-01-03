"use client";

import {
    Plus,
    Check,
    Trash,
    PenLine,
    User,
    KeyRound,
    School,
    Handshake,
    BookOpen,
    Search,
    SlidersHorizontal,
    MoreHorizontal,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getAllAdmins } from "@/api/admins/get-all-admins";
import { getAllInstitutions } from "@/api/institutions/get-all-institutions";
import { getAllVendors } from "@/api/vendors/get-all-vendors";
import { getAllBatches } from "@/api/batches/get-all-batches";
import EntityDetailsModal from "./EntityDetailModal";

type FieldType = "Admins" | "Vendors" | "Institutions" | "Batches";

type Item = {
    id: number;
    name?: string;
    batchname?: string;
};

export default function HeroSection() {
    /* ---------------- ENTITY STATES ---------------- */
    const [admins, setAdmins] = useState<Item[]>([]);
    const [institutions, setInstitutions] = useState<Item[]>([]);
    const [vendors, setVendors] = useState<Item[]>([]);
    const [batches, setBatches] = useState<Item[]>([]);

    useEffect(() => {
        getAllAdmins(setAdmins);
        getAllInstitutions(setInstitutions);
        getAllVendors(setVendors);
        getAllBatches(setBatches);
    }, []);

    /* ---------------- UI STATES ---------------- */
    const [field, setField] = useState<FieldType>("Admins");
    const [searchTerm, setSearchTerm] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingValue, setEditingValue] = useState("");
    const [isAdding, setIsAdding] = useState(false);
    const [newValue, setNewValue] = useState("");

    /* ---------------- MODAL STATE ---------------- */
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [currentUserRole] = useState<
        "SUPER_ADMIN" | "ADMIN" | "INSTITUTION" | "TEACHER"
    >("ADMIN");

    const admin_name = "Britto Anand";
    const admin_email = "brittoanand@example.com";

    /* ---------------- HELPERS ---------------- */
    const getCurrentData = (): Item[] => {
        switch (field) {
            case "Admins":
                return admins;
            case "Vendors":
                return vendors;
            case "Institutions":
                return institutions;
            case "Batches":
                return batches;
        }
    };

    const setCurrentData = (updater: (prev: Item[]) => Item[]) => {
        switch (field) {
            case "Admins":
                setAdmins(updater);
                break;
            case "Vendors":
                setVendors(updater);
                break;
            case "Institutions":
                setInstitutions(updater);
                break;
            case "Batches":
                setBatches(updater);
                break;
        }
    };

    const currentData = getCurrentData();

    const filteredData = currentData.filter((item) => {
        const value = item.batchname ?? item.name ?? "";
        return value.toLowerCase().includes(searchTerm.toLowerCase());
    });

    /* ---------------- CRUD HANDLERS ---------------- */
    function handleEditSave(id: number) {
        setCurrentData((prev) =>
            prev.map((item) =>
                item.id === id
                    ? item.batchname !== undefined
                        ? { ...item, batchname: editingValue }
                        : { ...item, name: editingValue }
                    : item
            )
        );
        setEditingId(null);
        setEditingValue("");
    }

    function handleDelete(id: number) {
        setCurrentData((prev) => prev.filter((item) => item.id !== id));
        setSelectedItem(null);
    }

    function handleAdd() {
        if (!newValue.trim()) return;

        setCurrentData((prev) => [
            ...prev,
            field === "Batches"
                ? { id: Date.now(), batchname: newValue }
                : { id: Date.now(), name: newValue },
        ]);

        setNewValue("");
        setIsAdding(false);
    }

    /* ---------------- ICONS ---------------- */
    const fieldIcons = {
        Admins: KeyRound,
        Vendors: Handshake,
        Institutions: School,
        Batches: BookOpen,
    };

    const ActiveIcon = fieldIcons[field];

    return (
        <>
            {/* Top Section */}
            <div className="flex justify-between p-4">
                <div>
                    <span className="text-primaryBlue text-5xl">Greetings,</span>{" "}
                    <span className="text-white text-5xl">Admin</span>
                    <div className="mt-2 text-lg">
                        <span className="text-white">Enjoy managing</span>{" "}
                        <span className="text-primaryBlue">B</span>
                        <span className="text-white">itwise Learn</span>
                    </div>
                </div>

                <div className="flex mr-11">
                    <div className="p-8 bg-white rounded-full flex justify-center items-center">
                        <User size={35} color="black" />
                    </div>
                    <div className="text-white flex flex-col mt-3 ml-4">
                        <h1 className="text-3xl">{admin_name}</h1>
                        <p>{admin_email}</p>
                    </div>
                </div>
            </div>

            {/* Selector */}
            <div className="bg-divBg mr-40 ml-20 mt-4 flex rounded-2xl">
                {(Object.keys(fieldIcons) as FieldType[]).map((type, i) => {
                    const Icon = fieldIcons[type];
                    return (
                        <div key={type} className="relative flex flex-1 justify-center py-4">
                            <button
                                onClick={() => {
                                    setField(type);
                                    setSearchTerm("");
                                }}
                                className="flex flex-col items-center"
                            >
                                <Icon size={30} color="white" />
                                <h1 className="text-white">{type}</h1>
                            </button>
                            {i !== 3 && (
                                <div className="absolute right-0 top-1/2 h-12 w-[2px] bg-white -translate-y-1/2" />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* List */}
            <div className="bg-divBg ml-5 mr-15 mt-6 rounded-2xl p-4 flex flex-col flex-1">
                <div className="flex justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <ActiveIcon className="text-white" />
                        <h1 className="text-white">{field}</h1>
                    </div>
                    <button onClick={() => setIsAdding(true)} className="text-primaryBlue">
                        <Plus />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-3 pr-2">
                    {filteredData.map((item) => {
                        const displayName = item.batchname ?? item.name;

                        return (
                            <div
                                key={item.id}
                                onClick={() => setSelectedItem(item)}
                                className="flex items-center justify-between bg-black/30 px-4 py-3 rounded-xl cursor-pointer hover:bg-black/40 transition"
                            >
                                {/* Left section */}
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                        <User size={16} color="black" />
                                    </div>
                                    <span className="text-white">{displayName}</span>
                                </div>

                                {/* Right actions */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation(); // ⛔ prevents modal opening
                                        handleDelete(item.id);
                                    }}
                                    className="text-red-500 hover:scale-110 transition"
                                >
                                    <Trash size={18} />
                                </button>
                            </div>
                        );
                    })}

                </div>
            </div>

            {/* MODAL */}
            {selectedItem && (
                <EntityDetailsModal
                    entityType={field}
                    data={selectedItem}
                    role={currentUserRole}
                    onClose={() => setSelectedItem(null)}
                    onDelete={handleDelete}
                />
            )}
        </>
    );
}
