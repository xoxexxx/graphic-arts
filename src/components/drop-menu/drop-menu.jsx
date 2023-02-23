import React from "react";
import { useSelector } from "react-redux";

import burger from "../../assets/images/burger.svg";
import close from "../../assets/images/burger-close.svg";
import logo from "../../assets/images/Web-logo.svg";
import { twMerge } from "tailwind-merge";
export const DropMenu = ({onClick}) => {
  const drop = useSelector((state) => state.dropReducer.drop);
  const drop_ = useSelector((state) => state.dropReducer.drop_);
  const isProfile = useSelector((state) => state.profileReducer.isProfile)
  

  return (
    <>
      <div className={twMerge(isProfile && `!left-3`, " absolute top-[40px] left-[92%] right-0 bottom-0 cursor-pointer w-[35px] h-[30px] min-[1140px]:hidden max-[420px]:left-[86%] max-[420px]:top-[20px]")}>
        {drop || drop_ ? (
         drop ?  <img src={`${close}`} alt="creatiqa_menu" className="logo" onClick={onClick}/> :  <img src={`${logo}`} alt="creatiqa_menu" className="logo" onClick={onClick}  /> 
        ) : (
          <img src={`${burger}`} alt="creatiqa_menu" onClick={onClick} />
        )}
      </div>
    </>
  );
};
