"use client";

import { FaSearch } from "react-icons/fa";
import SearchModal from "./SearchModal";
import { useState } from "react";

export default function SearchInput() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpenModal(true)}
        className="
          inline-flex items-center justify-between gap-3
          w-48
          bg-gray-100 dark:bg-gray-800
          border border-gray-200 dark:border-gray-700
          text-gray-500 dark:text-gray-400
          hover:border-primary dark:hover:border-purple-500
          hover:text-primary dark:hover:text-purple-400
          hover:bg-white dark:hover:bg-gray-700/60
          rounded-lg py-1.5 px-3
          text-sm
          transition-all duration-150
          cursor-pointer
        "
      >
        <span>Search...</span>
        <FaSearch className="w-3 h-3 shrink-0" />
      </button>

      <SearchModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}