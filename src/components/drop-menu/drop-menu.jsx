import React from "react";
import { useSelector } from "react-redux";

import burger from "../../assets/images/burger.svg";
import close from "../../assets/images/burger-close.svg";
import logo from "../../assets/images/Web-logo.svg";

export const DropMenu = ({onClick}) => {
  const drop = useSelector((state) => state.dropReducer.drop);
  const drop_ = useSelector((state) => state.dropReducer.drop_);
  const isProfile = useSelector((state) => state.profileReducer.isProfile)
  

  return (
    <>
      <div className={`${drop_ && isProfile && `hidden`} drop__menu`}>
        {drop || drop_ ? (
         drop ?  <img src={`${close}`} alt="creatiqa_menu" className="logo" onClick={onClick}/> :  <img src={`${logo}`} alt="creatiqa_menu" className="logo" onClick={onClick}  /> 
        ) : (
          <img src={`${burger}`} alt="creatiqa_menu" onClick={onClick} />
        )}
      </div>
    </>
  );
};
