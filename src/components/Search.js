import React from "react";
import { IoSearch } from "react-icons/io5";
const Search = () => {
  return (
    <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
      <input
        type="text"
        placeholder="search product here..."
        className="w-full outline-none"
      />
      <div className="text-lg min-w-[50px] h-8 bg-green-600 flex items-center justify-center rounded-r-full text-white">
        <IoSearch />
      </div>
    </div>
  );
};

export default Search;
