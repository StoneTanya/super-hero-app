import React from "react";


function Hero({hero}) {
        return ( 
    <React.Fragment>
        <div className="mySlade row align-items-center">
            <div className="col-7">
                <h5>{hero.name}</h5>
                <p className="imgWrap"> <img className="img" src={`images/${hero.image}`} /></p>
            </div>
            <div className="col-4 ">
                <p className =""><span>Вселенная: </span>{hero.universe}</p>
                <p className =""><span>Альтер эго: </span>{hero.alterEgo}</p>          
                <p className =""><span>Род деятельности: </span>{hero.line}</p>           
                <p className =""><span>Друзья: </span>{hero.friends}</p>           
                <p className =""><span>Суперспособности: </span>{hero.superpowers}</p>
                </div>
            <div className="col-12">
                <p className =""><span>Подробнее: </span>{hero.more}</p>
            </div>
        </div>
    </React.Fragment>
    );
}

export default Hero
