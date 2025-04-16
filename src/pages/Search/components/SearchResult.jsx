import React from "react";
import { Link } from "react-router";

const SearchResult = ({ content, title, url }) => {
  return (
    <div className="py-[20px] border-b border-b-[#EEEEEE]">
      <div className="px-[40px] max-lg:px-[20px]">
        <Link
          className="text-[20px] font-semibold text-[#8A4DFF] underline"
          to={url}
        >
          {title}
        </Link>
        <p className="text-[14px] leading-[normal] mt-[8px]">{content}</p>
      </div>
    </div>
  );
};

export default SearchResult;
