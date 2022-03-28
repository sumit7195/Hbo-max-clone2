// import { useEffect, useState } from "react"
// import axios from "axios"
import homebg from "../images/background/homebg.jpg"

import raisebywolf from "../images/background/raisedbywolf"


export const  Home = ()=>{



    





 
     return   (

  

       <div class="h-[42rem]  w-[100%] bg-cover  brightness-105 drop-shadow bg-center bg-no-repeat ..."  style={{backgroundImage: `url(${homebg})`}}     >
        
         <div class="h-[30rem] w-[50rem] bg-none">
       
         <img class="  pt-[18rem]  mb-[1rem]  flex justify-center ml-[3rem]" src={raisebywolf} alt="" />     
         <span class="block  -mt-[0.1rem]  w-[22rem] ml-[3rem] text-base text-white font-semibold mt-[8rem]">Revist your favorites. Discover new ones. </span>
         <span class="block   mb-[1rem]  w-[28rem] ml-[3rem] text-white font-normal ">Stream the best movies, series, originals, and more. </span>
         
         <button class=" ml-[3rem] -mt-[0.1rem] w-[10rem] h-11 rounded-3xl text-bt-text text-xl..." style={{background: "linear-gradient(90deg, rgb(71, 16, 193), rgb(120, 87, 255) 92%, rgb(129, 155, 253) 100%)" }}    >SIGN UP NOW</button>
         
        
      


         </div>
      
   
   


  
      </div>


           
      


     )



}