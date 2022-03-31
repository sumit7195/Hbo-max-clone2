import React from "react";
import { connect, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovieDetail } from "../redux/action";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import background from "../images/background/background.png";
import * as AiIcons from "react-icons/ai";

const MovieDetail = (props) => {
  const location = useLocation();
  const id = location.state.id;
  const type = location.state.type;

  console.log(type);

  useEffect(() => {
    props.fetchMovieDetail(id, type);
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
        className="py-[6rem] "
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
            genres,
            release_date,
            tagline,
            vote_average,
            original_name,
            videos: { results },
          }) => (
            <>
              {console.log({
                results,
                poster_path,
                original_name,
                original_title,
                vote_average,
                genres,
                overview,
              })}

              <div className="  flex justify-center content-center shadow-lg   rounded shadow-white  max-w-[40rem] m-auto  flex-col hover:cursor-pointer ... ">
                {results.length !== 0 ? (
                  <a href={`https://www.youtube.com/watch?v=${results[0].key}`}>
                    <div className=" h-[35rem] flex rounded  justify-center">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt=""
                      />
                    </div>
                  </a>
                ) : (
                  <a
                    href={`https://www.youtube.com/watch?q=${
                      original_name || original_title
                    }`}
                  >
                    <div className=" h-[35rem] flex rounded  justify-center">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt=""
                      />
                    </div>
                  </a>
                )}
                <div className="flex justify-center justify-items-center content-center ">
                  <h3 className="text-white text-5xl capitalize  ">
                    {original_title || original_name}
                  </h3>
                </div>
                <div className="flex justify-between">
                  <div className="flex  w-[3.8rem] justify-between  items-center ml-[1.2rem] ">
                    <h1 className="text-white text-2xl ">
                      <span className="text-xl">{vote_average} </span>
                    </h1>
                    <AiIcons.AiFillHeart
                      style={{ color: "red", fontSize: "1.5em" }}
                    ></AiIcons.AiFillHeart>
                  </div>

                  <div className=" flex  p-2 justify-around text-white space-x-1 antialiased...">
                    {genres.map((e) => (
                      <div>
                        <h1> {e.name}</h1>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-white flex flex-col  pl-4 antialiased ...">
                  <h1>Overview:</h1>
                  <p>{overview}</p>
                </div>
              </div>

              <button className="border-2 rounded-2xl bg-bt-color w-[10rem] hover:cursor-pointer h-[3rem] ml-[36rem] mt-[18px]  text-white rounded-xl...">
                <a href={homepage} target="_blank" rel="noreferrer">
                  Book Ticket
                </a>
              </button>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default connect(null, { fetchMovieDetail })(MovieDetail);
