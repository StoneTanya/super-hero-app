import React from "react";


function Hero(props) {
        return ( 
    <React.Fragment>
        <div className="mySlade row align-items-center">
            <div className="col-7">
                <h5>{props.name}</h5>
                <p className="imgWrap"> <img className="img" src={`images/${props.image}`} /></p>
            </div>
            <div className="col-4 ">
                <p className =""><span>Вселенная: </span>{props.universe}</p>
                <p className =""><span>Альтер эго: </span>{props.alterEgo}</p>          
                <p className =""><span>Род деятельности: </span>{props.line}</p>           
                <p className =""><span>Друзья: </span>{props.friends}</p>           
                <p className =""><span>Суперспособности: </span>{props.superpowers}</p>
                </div>
            <div className="col-12">
                <p className =""><span>Подробнее: </span>{props.more}</p>
            </div>
        </div>
    </React.Fragment>
    );
}

export default Hero
