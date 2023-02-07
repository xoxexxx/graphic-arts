import React from "react";
import burger from "../../assets/images/burger.svg";
import close from "../../assets/images/burger-close.svg";
import { useDispatch, useSelector } from "react-redux";


export const DropMenu = () => {
  const drop = useSelector((state) => state.dropReducer.drop);
    const dispatch = useDispatch()

    const dropHandler = () => {
        dispatch({type: "DROP", payload: !drop})
    }

  return (
    <>
      <div className="drop__menu">
        {drop ? (
          <img src={`${close}`} alt="creatiqa_menu"  onClick={dropHandler}/>
        ) : (
          <img src={`${burger}`} alt="creatiqa_menu" onClick={dropHandler} />
        )}
      </div>
    </>
  );
};
