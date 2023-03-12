import React from "react";

import { useSelector } from "react-redux";


export const Template: React.FC<{x: any, onClick: any}> = ({x, onClick}) => {
    //@ts-ignore
    const template = useSelector((state) => state.template.data)
    
    return(
        <div onClick={() => onClick(x)}>
        <div className={`hover:bg-[#784adc] duration-300 flex justify-center items-center h-24 w-24 bg-[#d9d9d9] rounded-xl cursor-pointer ${template && template.value == x.value && 'active'}`}>
            <img src={x.img} />
        </div>
        <span className="block w-[100px] text-xs text-center mb-2.5 mt-2.5">{x.value}</span>
        </div>
    )
}