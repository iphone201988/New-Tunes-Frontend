import React, { useEffect, useState } from "react";
import { supabase } from "../../utils";

const SwipesCounter = () => {
  const [count, setCount] = useState(0);
  const fetchSwipeCount = async () => {
    const { data, error } = await supabase.rpc("count_liked_songs");
    if (data && !error) setCount(data);
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
        <div className="px-[90px] py-[20px] bg-[#FFF] max-w-[380px] rounded-[32px] mx-auto max-md:px-[20px]">
          <h2 className="text-[32px] text-[#8A4DFF] text-center font-bold">
            {count}
          </h2>
          <p className="text-center font-semibold mt-[10px]">
            Swipes on NewTunes
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwipesCounter;
