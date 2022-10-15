import React from "react";
import heroesData from "./herosData";
import Hero from "./Hero";

function HeroBlock() {
    const HeroComponents = heroesData.map(hero => <Hero key={hero.name} name={hero.name} image={hero.image} universe={hero.universe} alterEgo={hero.alterEgo} line={hero.line} friends={hero.friends} superpowers={hero.superpowers} more={hero.more} />)
    
    return (
        <React.Fragment>
        {HeroComponents}
        </React.Fragment>
    )
}

export default HeroBlock
