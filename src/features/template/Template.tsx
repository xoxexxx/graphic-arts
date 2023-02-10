import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Temp: React.FC<{x: any, onClick: any}> = ({x, onClick}) => {
    const tempList = useSelector((state: any) => state.templateListReducer.data)
    
    return(
        <div onClick={() => onClick(x)}>
        <div className={`template ${tempList && tempList.value == x.value && 'active'}`}>
            <img src={x.img} />
        </div>
        <span>{x.value}</span>
        </div>
    )
}