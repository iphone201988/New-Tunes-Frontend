import React, { useState } from "react";
import { useNavigate } from "react-router";
import data from "../../../constants/data.json";

const SearchInput = ({ setResults }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const getSnippet = (text, searchTerm, maxLength) => {
    const lowerText = text.toLowerCase();
    const lowerSearch = searchTerm.toLowerCase();
    const index = lowerText.indexOf(lowerSearch);
    if (index === -1) {
      return text.length > maxLength
        ? "..." + text.slice(0, maxLength) + "..."
        : text;
    }
    const charsBeforeAfter = 100;
    const start = Math.max(0, index - charsBeforeAfter);
    const end = Math.min(
      text.length,
      index + lowerSearch.length + charsBeforeAfter
    );
    const snippet = text.slice(start, end);
    const prefix = start > 0 ? "..." : "";
    const suffix = end < text.length ? "..." : "";
    return prefix + snippet + suffix;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      setResults([]);
    } else {
      const filteredResults = data
        .filter(
          (item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.content.toLowerCase().includes(search.toLowerCase())
        )
        .map((item) => ({
          title: item.title,
          url: item.url,
          content: getSnippet(item.content, search, 150),
        }));

      console.log("filteredResults::::", filteredResults);
      setResults(filteredResults);
    }
  };

  return (
    <div className="bg-[#FFF] py-[20px] relative">
      <div className="px-[20px] max-w-[1600px] mx-auto max-md:pr-[50px]">
        <form onSubmit={handleSearch}>
          <div className="flex justify-center">
            <input
              className="border border-[rgb(238,238,238)] p-[16px] rounded-[32px] w-[36%] max-lg:w-[70%]"
              placeholder="Search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="btn-pri ml-[16px] max-md:ml-[6px]">
              Search
            </button>
          </div>
        </form>
      </div>
      <button
        className=" absolute right-[40px] top-[35%] cursor-pointer max-lg:right-[20px]"
        onClick={() => navigate("/")}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 13.4L7.10005 18.3C6.91672 18.4833 6.68338 18.575 6.40005 18.575C6.11672 18.575 5.88338 18.4833 5.70005 18.3C5.51672 18.1167 5.42505 17.8833 5.42505 17.6C5.42505 17.3167 5.51672 17.0833 5.70005 16.9L10.6 12L5.70005 7.09999C5.51672 6.91665 5.42505 6.68332 5.42505 6.39999C5.42505 6.11665 5.51672 5.88332 5.70005 5.69999C5.88338 5.51665 6.11672 5.42499 6.40005 5.42499C6.68338 5.42499 6.91672 5.51665 7.10005 5.69999L12 10.6L16.9 5.69999C17.0834 5.51665 17.3167 5.42499 17.6 5.42499C17.8834 5.42499 18.1167 5.51665 18.3 5.69999C18.4834 5.88332 18.575 6.11665 18.575 6.39999C18.575 6.68332 18.4834 6.91665 18.3 7.09999L13.4 12L18.3 16.9C18.4834 17.0833 18.575 17.3167 18.575 17.6C18.575 17.8833 18.4834 18.1167 18.3 18.3C18.1167 18.4833 17.8834 18.575 17.6 18.575C17.3167 18.575 17.0834 18.4833 16.9 18.3L12 13.4Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchInput;
