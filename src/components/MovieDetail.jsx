import React from "react";
import { useLocation } from "react-router-dom";



export const MovieDetail = ()=>{

const location = useLocation();
console.log(location.state)

return (

  <div>

   <h1>this is movieDetail</h1>
   
  </div>


)



}