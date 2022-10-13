import React from "react";

function Footer() {
    return ( 
    <React.Fragment>
        <div className="text-center text-lg-start footerbg mt-5">
            <div className="text-center p-3 text-light">
                @ {new Date().getFullYear()} <span className="text-reset fw-bold">Week-26 React </span>   
            </div> 
        </div>
    </React.Fragment>
    );
}

export default Footer