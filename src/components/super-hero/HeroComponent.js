import React from "react";
import heroesData from "./herosData";
import Hero from "./Hero";

function HeroBlock() {
    const HeroComponents = heroesData.map(hero => <Hero key={hero.name} hero={hero} />)

    return (
        <React.Fragment>
            {HeroComponents}
        </React.Fragment>
    )
}

export default HeroBlock
