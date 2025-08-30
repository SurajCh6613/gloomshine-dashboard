import { Bell, Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <section className="flex w-full justify-end gap-4 items-center">
      <div className="relative">
        <p className="absolute w-2 h-2 bg-red-600 top-0 left-3 rounded-full z-10"></p>
        <Bell className="text-xl relative text-gray-800" />
      </div>
      <div className="relative">
        <input
          className=" shadow-md rounded-md px-6 py-2"
          type="text"
          placeholder="Search here"
        />
        <Search className="absolute top-2 right-2" />
      </div>
    </section>
  );
};

export default SearchBar;
