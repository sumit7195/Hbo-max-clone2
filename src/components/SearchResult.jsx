import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Searchresult = () => {
  const results = useSelector((state) => state.search.data);
  const loading = useSelector((state) => state.search.loading);
  const navigate = useNavigate()
  // console.log(results);
  return loading === true ? (
    ""
  ) : (
    <div className="mt-[4rem] absolute z-20 ">
      {results.map(
        (
          {
            poster_path,
            backdrop_path,
            release_date,
            original_name,
            original_title,
            id,
            media_type,
          },
          i
        ) => {
          // console.log(poster_path);
          if (i < 5) {
            return (
              <div
                key={id}
                className="flex justify-between bg-[#192122]  rounded my-[0.1rem] border-[1px] w-[20rem] ml-[10rem]  "
                onClick={() => {
                  navigate("/movieDetail", {
                    state: { id: id, type: media_type },
                  });
                }}
              >
                <div className="flex w-[5rem]   border-[1px] h-[5rem]">
                  <img
                    style={{ width: "100%" }}
                    src={`https://image.tmdb.org/t/p/w500${
                      poster_path || backdrop_path
                    }`}
                    alt=""
                  />
                </div>
                <div className="w-[10rem] text-white">
                  <h1 className="mt-[1rem]">
                    {original_name || original_title}
                  </h1>
                  <h2>{release_date}</h2>
                </div>
              </div>
            );
          }
        }
      )}
    </div>
  );
};

export default Searchresult;
