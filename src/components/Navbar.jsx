import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import Login from "../components/Login";

import "./Navbar.css";
// import { SidebarData } from "./SidebarData";

export const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [showlogin, setLogin] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const showLoginFn = () => {
    setLogin(!showlogin);
  };

  return (
    <>
      <div class="flex flex-row fixed z-10  bg-transparent mb-[2rem]  w-[100%] items-center  hover:bg-navbac  mb-[2rem] ... ">
        <div class="m-1 flex flex-row ml-14">
          <img
            onClick={showSidebar}
            src="https://play.hbomax.com/assets/images/primary_nav/desktop/browse_default_max.svg"
            alt=""
          />

          {sidebar ? (
            <div class="absolute  w-[20rem]  h-[120vh] ml-[-4rem] mt-[-1.2rem] bg-navbac text-lg   ...  ">
              <div
                class="ml-[2rem] pt-[3rem] pl-[3rem]  text-white "
                onClick={showSidebar}
              >
                <AiIcons.AiOutlineClose size={25}></AiIcons.AiOutlineClose>
              </div>

              <ul
                class="flex flex-col inset-0 h-[40rem] overflow-auto  overscroll-contain  center h-[20rem] mt-[2rem] px-[2rem] space-y-[2rem] snap-y"
                id="scroll"
              >
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Home
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Series
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px] ">
                  Movies
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Originals
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Just Added
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Last Chance
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Coming Soon
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Trending Now
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Awards & Acclaim
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Watch Free
                </li>
                <li class=" pl-[3rem] border-[0.1px] border-white ml-[2rem] w-[18rem]..."></li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Action
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Animation
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Comedy
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Crime
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Documentaries
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Drama
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Fantasy % Sci-Fi
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Horror
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  International
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Kids & Family
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Lation
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Music
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  News/Talk
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Reality
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Romance
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Shorts
                </li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px]">
                  Suspense
                </li>
                <li class="border-[1px] border-white pl-[2.5rem]  "></li>
                <li class="text-white pl-[2.5rem] hover:text-[22px] ">
                  Audio Description
                </li>
                <li class="border-[1px] border-[white] pl-[2.5rem] hover:text-[22px] "></li>
                <li class="text-white pl-[2.5rem] hover:text-[rgb(158,134,255)] hover:text-[22px] ">
                  Watch Free
                </li>
              </ul>
            </div>
          ) : (
            <div class="absolute w-[20rem] h-[120vh] translate-x-[-100%] ml-[-4rem] mt-[-1.2rem] bg-[blue] ">
              <ul class="flex flex-col center h-[20rem] mt-[5rem] px-[8rem] space-y-[4rem]">
                <li class="px-[8rem]" onClick={showSidebar}>
                  <AiIcons.AiOutlineClose></AiIcons.AiOutlineClose>
                </li>
                <li class="  hover:bg-[indigo] hover:block">Home</li>
                <li class="  hover:bg-[indigo]">About</li>
                <li class="  hover:bg-[indigo]">Contact</li>
                <li class="  hover:bg-[indigo]">Mail us</li>
                <li class="  hover:bg-[indigo]">Find us</li>
              </ul>
            </div>
          )}

          <div
            class="m-4 ml-10"
            onClick={() => {
              if (search) {
                setSearch(false);
              } else {
                setSearch(true);
              }
            }}
          >
            <img
              src="https://play.hbomax.com/assets/images/primary_nav/desktop/search_default_max.svg"
              alt=""
            />
          </div>

          {search ? (
            <div class="block  ">
              <input
                type="text"
                class="w-[18rem] h-[2.5rem] rounded-md mt-[0.5rem] "
                placeholder="what are you looking for?"
              />
            </div>
          ) : (
            <div class="hidden">
              <input type="text" placeholder="what are you looking for?" />
            </div>
          )}
        </div>

        <div class="mt-[0.3rem] mx-auto mr-60     ">
          <img
            src="https://play.hbomax.com/assets/images/branding/desktop/hbomax/dt-hbomax-logo-in_app.svg"
            alt=""
          />
        </div>
        <div class="mt-[0.3rem] mr-3 color-navfont font-bold">
          {" "}
          <h3 class="text-[#FFFFFFCC]">Subscribe Now</h3>
        </div>
        <div class="mt-[0.3rem] mx-24 color-navfont fo">
          {" "}
          <h3 class="text-[#FFFFFFCC]" onClick={showLoginFn}>
            Sign In
          </h3>
        </div>

        {showlogin ? <Login></Login> : ""}
      </div>
    </>
  );
};
