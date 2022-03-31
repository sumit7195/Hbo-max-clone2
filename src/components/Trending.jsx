import { useState } from "react";
import { useEffect } from "react";
import "./trending.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { fetch } from "../redux/action";
import { useSelector } from "react-redux";
const apiKey = process.env.API_KEY

console.log(apiKey)
const Trending = (props) => {
  // const [movie,setMovie] = useState();

  const movie = useSelector((state) => state.popular.data.results);

  useEffect(() => {
    props.fetch();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="sliderDiv" class="mt-[3rem] w-[100vm] overflow-hidden  ">
      <h1 class="text-white  text-[40px]   ">Trending Movies</h1>

      {movie ? (
        <div className="slider  ">
          {movie.map((e, i) => (
            <div
              key={i}
              class=" slide-track  hover:cursor-pointer   hover:opacity-75    shadow-inner shadow-blue-500/40 hover:shadow-indigo-500/40 border-2"
              onClick={() => {
                navigate("/movieDetail", {
                  state: { id: e.id, type: "movie" },
                });
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

export default connect(null, { fetch })(Trending);
