// import React, { useContext } from "react";
// import useState from "react"

// // import {AuthContext} from "../context/AuthContext"



//   const Login = ()=>{

// // const { handleLogin} =  useContext(AuthContext)


// const initstate = {
  
//    email :"",
//    password : ""

// }


// const [state, setState] = useState(initstate)




// const handleEmail = (e)=>{

//    setState({...state, email:e.target.value})


// }

// const handlePassword = (e)=>{

// setState({...state, password:e.target.value})

// }


// const handleSubmit = (e)=>{
//    e.preventDefault();

//    handleLogin(state.email, state.password)
   


// }





// return (
//   <>
//     <h1> Login </h1>

//     <form onsubmit={handleSubmit}>
   

//       <input  type="text"  placeholder="Enter email" value ={state.email}   onChange={handleEmail} />
//       <input  type="text"  placeholder="Enter password" value={state.password}  onChange={handlePassword} />
      
//       <input type="submit" />
    
    
//     </form>
//   </>
// );




// }

// export default Login;