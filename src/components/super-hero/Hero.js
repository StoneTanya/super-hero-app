import React from "react";


function Hero(props) {
        return ( 
    <React.Fragment>
<div className="mySlade row">
        <div className="col-3">
        <h5 className ="">{props.name}</h5>
        <p> <img src="{props.image}" /></p>
        </div>
        <div className="col">
        <p className =""><span>Вселенная: </span>{props.universe}</p>
        <p className =""><span>Альтер эго: </span>{props.alterEgo}</p>          
        <p className =""><span>Род деятельности: </span>{props.line}</p>           
        <p className =""><span>Друзья: </span>{props.friends}</p>           
        <p classNameName =""><span>Суперспособности: </span>{props.superpowers}</p>
        <p className =""><span>Подробнее: </span>{props.more}</p>
        </div>
        </div>
    </React.Fragment>
    );
}

export default Hero
