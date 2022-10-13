import React from "react";
import heroesData from "./herosData";
import Hero from "./Hero";

function HeroBlock() {
    const HeroComponents = heroesData.map(hero => <Hero key={hero.name} Имя={hero.name} Вселенная={hero.universe} Альтер эго={hero.alterEgo} Род деятельности={hero.line} Друзья={hero.friends} Суперспособности={hero.superpowers} Подробнее={hero.more} />)
    
    return (
        <React.Fragment>
        {HeroComponents}
        </React.Fragment>
    )
}

export default HeroBlock
