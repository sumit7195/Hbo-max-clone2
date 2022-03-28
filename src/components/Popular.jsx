import React from "react";
import { connect } from "react-redux";
import { fetchLatest } from "../redux/action";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./trending.css";
const Popular = (props) => {
  const movieData = useSelector((state) => state.trending.data.results);

//   console.log(popular)
//   const loading = useSelector((state) => state.trending.loading);
  const navigate = useNavigate();
  useEffect(() => {
    props.fetchLatest();
  }, []);


  return (
    <div className="popularDiv" class="mt-[-8em] w-[100vm] overflow-hidden  ">
      <h1 class="text-white  text-[40px]   ">Popular Shows</h1>

      {movieData ? (
        <div className="slider  ">
          {movieData.map((e, i) => (
            <div
              key={i}
              class=" slide-track  hover:cursor-pointer   hover:opacity-75    shadow-inner shadow-blue-500/40 hover:shadow-indigo-500/40 border-2"
              onClick={() => {
                navigate("/movieDetail", { state: e });
              }}
            >
              <img
                class="h-[100%] "
                src={`https://image.tmdb.org/t/p/w500${e.poster_path}
`}
                alt=""
              />
              {/* <h3>{e.original_title}</h3> */}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
  





};

export default connect(null, { fetchLatest })(Popular);
