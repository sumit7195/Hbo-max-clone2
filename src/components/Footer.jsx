import background from  "../images/footerbackground.png"
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
export const Footer = ()=>{

  return (
      
     <div class=" mt-4  w-12/12 h-[38rem]  border-2  bg-gradient-to-r from-bg1  via-bg2  to-bg3  ...">
    <div class="bg-no-repeat bg-center h-[40rem] ..."  style={{ 
      backgroundImage: `url(${background})` 
    }}>

  
  <div class="flex flex-col  mt-2 ml-[4rem]  w-[38rem]">
      <span class="text-navfont text-3xl">Already Have an HBO Max Account?</span>
      <button class="bg-gradient-to-r from-bt-color  w-28 h-10 rounded-3xl text-bt-text text-xl mt-[3rem]">SIGN IN</button>
      
      </div>




   <div class=" mt-[14rem] h-24 flex flex-row justify-between" >

    <div class=" flex fle-row mt-14 ml-[3.0rem] justify-between  w-[10rem]">
         
     <AiFillYoutube class="text-navfont h-6 w-8"></AiFillYoutube>  
     <AiOutlineTwitter class="text-navfont h-6 w-8"></AiOutlineTwitter>  
     <FaFacebookF class="text-navfont h-5  w-4"></FaFacebookF>  
     <AiFillInstagram class="text-navfont h-6 w-8"></AiFillInstagram>  
    </div>
    <div class=" flex flex-col w-[42rem] h-[2rem] mt-[2rem] " >
    
      <div> <span class="text-disclaimer text-xs    ml-[21rem] ">© 2022 WarnerMedia Direct, LLC. All rights reserved.</span></div> 
      <div class="b  flex justify-between mt-[0.2rem] mr-[3rem]">

       <span class="text-disclaimer text-xs">Audio Description</span>
       <span class="text-disclaimer text-xs" >Do not Sell My Personal Information</span>
       <span class="text-disclaimer text-xs">Privacy</span>
       <span class="text-disclaimer text-xs">Terms</span>
       <span class="text-disclaimer text-xs">Info</span>
       <span class="text-disclaimer text-xs">Help</span>
       <span class="text-disclaimer text-xs">Devices</span>


      </div>
    </div>

   </div>




    </div>
    </div>
    
  )



}
