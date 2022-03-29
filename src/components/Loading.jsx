import React from 'react';

import background from "../images/background/background.png"

import "../componentCss/loader.css"

const Loading = () => {
    return (
      <>
        <div
          className="loading"
          z-10
          class="h-full  w-[100%] bg-cover absolute  brightness-105 drop-shadow bg-center bg-no-repeat ..."
          style={{ backgroundImage: `url(${background})` }}
        >
          <span class="loader" ></span>
        </div>
      </>
    );
}

export default Loading;
