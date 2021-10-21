import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";

export default function Search() {
  const [text, setText] = useState("");
  const { searchTerm, setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);
  return (
    <div className="mt-8 sm:mt-0 flex justify-center items-center w-full">
      <input
        type="text"
        placeholder="Search Here"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
