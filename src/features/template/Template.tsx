import React from "react";
import { Link } from "react-router-dom";

export const Temp = ({x}: any) => {

    return(
        <Link to="#">
        <div className="template">
            <img src={x.img} />
        </div>
        <span>{x.value}</span>
        </Link>
    )
}