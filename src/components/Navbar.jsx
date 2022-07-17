import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-blue-500 flex items-center justify-around py-4">
      <h1 className="text-xl font-semibold text-white">Filter Clone</h1>
      <input
        className="p-2 min-w-[20rem] outline-none"
        type="text"
        placeholder="Search for products"
      />
    </nav>
  );
};
