import React from "react";
import HeroBlock from "../super-hero/HeroComponent";


function Home() {
    return ( 
    <React.Fragment>
        <div className="homepg container-fluid">
        <h2>Кто они, суперы????</h2>
<HeroBlock/>
        </div> 
    </React.Fragment>
    );
}

export default Home
