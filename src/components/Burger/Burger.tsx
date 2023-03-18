import React from "react";
import { useSelector } from "react-redux";

const burger = require("../../assets/images/burger.svg");
const close = require("../../assets/images/burger-close.svg");
const logo = require("../../assets/images/Web-logo.svg");

import { twMerge } from "tailwind-merge";

export const Burger = ({ onClick }) => {
  //@ts-ignore
  const drop = useSelector((state) => state.drop);
  //@ts-ignore
  const { isProfile } = useSelector((state) => state.check);

  return (
    <>
      <div
        className={twMerge(
          isProfile && `!left-3`,
          " absolute top-[40px] left-[92%] right-0 bottom-0 cursor-pointer w-[35px] h-[30px] min-[1140px]:hidden max-[420px]:left-[86%] max-[420px]:top-[20px]"
        )}
      >
        {drop.dropMenu || drop.dropProfileMenu ? (
          drop ? (
            <img
              src={`${close}`}
              alt="creatiqa_menu"
              className="logo"
              onClick={onClick}
            />
          ) : (
            <img
              src={`${logo}`}
              alt="creatiqa_menu"
              className={twMerge(isProfile && "hidden")}
              onClick={onClick}
            />
          )
        ) : (
          <img src={`${burger}`} alt="creatiqa_menu" onClick={onClick} />
        )}
      </div>
    </>
  );
};
