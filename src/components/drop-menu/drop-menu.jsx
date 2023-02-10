import React, { useEffect } from "react";
import burger from "../../assets/images/burger.svg";
import close from "../../assets/images/burger-close.svg";
import logo from "../../assets/images/Web-logo.svg";
import { useDispatch, useSelector } from "react-redux";


export const DropMenu = ({onClick}) => {
  const drop = useSelector((state) => state.dropReducer.drop);
  const drop_ = useSelector((state) => state.dropReducer.drop_);

  useEffect(() => {
   
  }, [drop_])

  return (
    <>
      <div className="drop__menu">
        {drop || drop_ ? (
         drop ?  <img src={`${close}`} alt="creatiqa_menu" className="logo" onClick={onClick}/> :  <img src={`${logo}`} alt="creatiqa_menu" className="logo" onClick={onClick}  /> 
        ) : (
          <img src={`${burger}`} alt="creatiqa_menu" onClick={onClick} />
        )}
      </div>
    </>
  );
};
