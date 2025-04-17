import React, { useEffect, useState } from "react";
import { supabase } from "../../utils";

const SwipesCounter = () => {
  const [count, setCount] = useState({
    total_artists: 0,
    total_likes: 0,
    total_matches: 0,
  });
  const fetchSwipeCount = async () => {
    const { data, error } = await supabase.rpc("all_dashboard_counts");

    console.log("data:::", data);

    if (data && !error) setCount(data[0]);
  };

  useEffect(() => {
    fetchSwipeCount();

    const channel = supabase
      .channel("public:myLikedSongs")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "myLikedSongs",
        },
        async () => {
          fetchSwipeCount();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);
  return (
    <div className="bg-[#F9F0FF] py-[40px] max-mlg:py-[20px] ">
      <div className="px-[20px] max-w-[1600px] mx-auto">
        <div className="flex justify-between px-[40px] py-[20px] bg-[#FFF] max-w-[100%] rounded-[32px] mx-auto max-md:px-[20px] max-md:flex-col max-md:gap-[16px]">
          <div className="w-[33%] max-md:w-full">
            <h2 className="text-[32px] text-[#8A4DFF] text-center font-bold">
              {count.total_likes}
            </h2>
            <p className="text-center font-semibold mt-[10px]">
              Swipes on NewTunes
            </p>
          </div>
          <div className="w-[33%] max-md:w-full border-l border-r border-[#8A4DFF] max-md:border-t max-md:border-b max-md:border-r-0 max-md:border-l-0 max-md:py-[20px]">
            <h2 className="text-[32px] text-[#8A4DFF] text-center font-bold">
              {count.total_matches}
            </h2>
            <p className="text-center font-semibold mt-[10px]">
              Total number of artist matches
            </p>
          </div>
          <div className="w-[33%] max-md:w-full">
            <h2 className="text-[32px] text-[#8A4DFF] text-center font-bold">
              {count.total_artists}
            </h2>
            <p className="text-center font-semibold mt-[10px]">
              Total number of artists on the platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwipesCounter;
