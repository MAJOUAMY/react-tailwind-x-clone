import React from "react";
import SearchSuggestions from "./SearchSuggestions";
import { FiSearch } from "react-icons/fi";
const SearchForm = () => {
  return (
    <form className="relative mt-1 bg-lightGray rounded-[20px] ">
      <div className=" p-3 flex items-center gap-2">
        <FiSearch />
        <input
          type="text"
          className="bg-transparent placeholder:color-[#757575] "
          placeholder="Search"
        />
      </div>
    </form>
  );
};

export default SearchForm;
