import React from "react";
import { connect, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovieDetail } from "../redux/action";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import background from "../images/background/background.png";
import * as AiIcons from "react-icons/ai";

const MovieDetail = (props) => {
  const location = useLocation();
  const id = location.state.id;
  const type = location.state.type;
  console.log(id,type)
  // console.log(id)


  useEffect(() => {
    props.fetchMovieDetail(id,type);
  }, []);

  // console.log(location.state.id)
  const movieDetail = useSelector((state) => state.detail.data);
  console.log(movieDetail);
  const loading = useSelector((state) => state.detail.loading);

  return loading === true ? (
    <Loading></Loading>
  ) : (
    <div className="mt-0">
      <Navbar></Navbar>
      <div
        className="py-[6rem]"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {movieDetail.map(
          ({
            backdrop_path,
            budget,
            homepage,
            original_language,
            original_title,
            overview,
            poster_path,
            runtime,
            vote_count,
            genre,
            release_date,
            tagline,
            vote_average,
            original_name,
            videos: { results },
          }) => (
            <a href={`https://www.youtube.com/watch?v=${results[0].key}`}>
              <div className="  flex justify-center shadow-lg rounded shadow-white  w-[30rem] m-auto  flex-col hover:cursor-pointer ... ">
                <div className=" h-[35rem] flex rounded">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt=""
                  />
                </div>
                <div className="flex justify-center">
                  <h3 className="text-white text-5xl">
                    {" "}
                    {original_title || original_name  } 
                  </h3>
                </div>

                <div className="flex  w-[3.2rem] justify-between  items-center">
                  <h1 className="text-white text-2xl ">
                    <span className="text-xl">{vote_average} </span>
                  </h1>
                  <AiIcons.AiFillHeart
                    style={{ color: "red", fontSize: "1.5em" }}
                  ></AiIcons.AiFillHeart>
                </div>
              </div>
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default connect(null, { fetchMovieDetail })(MovieDetail);
