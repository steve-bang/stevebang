"use client"
import { FaSearch } from "react-icons/fa";
import SearchModal from "./SearchModal";
import { useState } from "react";

export default function SearchInput() {
    
    const [openModal, setOpenModal] = useState(false);
    
    return (
        <>
            <button className="w-3xs bg-gray-200 rounded-md text-gray-600 py-1 px-4 cursor-pointer text-sm hover:bg-gray-300"
                type="button"
                onClick={() => setOpenModal(true)}
            >
                <div className="flex items-center justify-between">Search keywords... <FaSearch /></div>
            </button>
            <SearchModal
                open={openModal}
                onClose={() => setOpenModal(false)}
            />
        </>
    )
}