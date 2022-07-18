import React from "react";
import { useFilters } from "../context/filterContext";

export const Navbar = () => {
  const { searchQuery, filterDispatch } = useFilters();

  const handleSearchQueryChange = (e) => {
    filterDispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value });
  };

  return (
    <nav className="bg-blue-500 flex items-center justify-around py-4">
      <h1 className="text-xl font-semibold text-white">Filter Clone</h1>
      <input
        value={searchQuery}
        onChange={handleSearchQueryChange}
        className="p-2 w-100 min-w-[20rem] outline-none border border-gray-300 focus:border-gray-400"
        type="text"
        placeholder="Search for products"
      />
    </nav>
  );
};
