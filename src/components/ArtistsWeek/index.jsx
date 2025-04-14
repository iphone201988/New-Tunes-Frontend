import React, { useEffect, useState } from "react";
import { supabase } from "../../utils";

const ArtistsWeek = () => {
  const [artists, setArtists] = useState([]);

  const fetchArtists = async () => {
    const { data, error } = await supabase.rpc(
      "get_global_or_near_by_me_artist_leaderboard_score"
    );

    const artists = data.map((artist) => ({
      id: artist.artistID,
      image: artist.profilePic,
      name: artist.username,
    }));

    setArtists(artists);
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  if (!artists.length) return null;

  const leftArtist = artists[0];
  const rightArtists = artists.slice(1, 5);

  return (
    <div className="bg-[#F9F0FF] py-[80px] max-mlg:py-[40px]">
      <div className="px-[20px] max-w-[1600px] mx-auto">
        <h2 className="text-grad text-[48px] font-bold max-lg:text-[36px] max-sm:text-[26px]">
          Artists of the Week
        </h2>
        <div className="flex gap-[25px] mt-[40px] max-lg:mt-[30px] max-lg:flex-col">
          {leftArtist && (
            <div
              className={`${
                rightArtists.length ? "w-[50%]" : "w-full"
              } relative max-lg:w-full`}
            >
              <img
                className="w-full h-full object-cover rounded-[24px]"
                src={leftArtist.image}
                alt={leftArtist.name}
              />
              <p className="absolute text-[#8A4DFF] bg-[#fff] font-bold p-[16px] rounded-[16px] left-[20px] bottom-[20px] max-md:p-[8px] max-md:left-[10px] max-md:bottom-[10px]">
                {leftArtist.name}
              </p>
            </div>
          )}

          {rightArtists.length > 0 && (
            <div className="w-[50%] grid grid-cols-2 gap-[25px] max-lg:w-full">
              {rightArtists.map((artist, index) => {
                const isLastAndOdd =
                  rightArtists.length % 2 !== 0 &&
                  index === rightArtists.length - 1;
                return (
                  <div
                    key={artist.id}
                    className={`relative max-md:w-full ${
                      isLastAndOdd ? "col-span-2" : ""
                    }`}
                  >
                    <img
                      className="w-full h-full object-cover rounded-[24px]"
                      src={artist.image}
                      alt={artist.name}
                    />
                    <p className="absolute text-[#8A4DFF] bg-[#fff] font-bold p-[16px] rounded-[16px] left-[10px] bottom-[10px] max-md:p-[8px]">
                      {artist.name}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistsWeek;
