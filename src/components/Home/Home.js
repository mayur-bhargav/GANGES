import React from "react";
import Navbar from "../Navbar/Navbar";
import Imagecontainer  from "../frontpage/imagecontainer";
import Welcome from "../frontpage/welcome";
import Video from "../frontpage/video";
const Home = () => {

  return (
    <div style={{marginTop:"-2rem"}}>
<Navbar/>
   <Imagecontainer/>
   <Welcome/>
   <Video/>
    </div>
  );
};

export default Home;
