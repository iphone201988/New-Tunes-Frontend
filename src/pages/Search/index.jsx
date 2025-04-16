import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";

const Search = () => {
  const [results, setResults] = useState([]);
  return (
    <div className=" absolute z-50 w-full h-full bg-[rgba(0,0,0,0.70)] top-0">
      <SearchInput setResults={setResults} />
      {results.length ? (
        <div className=" max-w-[800px] mx-auto rounded-2xl bg-[#fff] pb-[20px] mt-[40px] pt-[20px]">
          <p className="text-center text-[18px] font-semibold border-b border-b-[#EEEEEE] pb-[8px]">
            Results from this site
          </p>
          {results.map((result) => (
            <SearchResult
              title={result.title}
              url={result.url}
              content={result.content}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Search;
