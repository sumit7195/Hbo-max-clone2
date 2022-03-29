import "./App.css";

import background from "./images/background/background.png";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import Trending from "./components/Trending";
import Popular from "./components/Popular";


function App() {
    
  

    return (
  
    <div
      class=" bg-center h-full "
      style={{ backgroundImage: `url(${background})` }}
    >
      <img
        src="./images/blob_https___play.hbomax.com_159b613a-a622-48cb-94bd-64029ab6f706"
        alt=""
      />

      <Navbar></Navbar>
      <Home></Home>
      <Trending></Trending>
      <Popular></Popular>
      <Footer></Footer>
    </div>


  )     




}

export default App;
