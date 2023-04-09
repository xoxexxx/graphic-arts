import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { filterEditHandle } from "../../../services/reducers/checkURLReducer";

const arrow = require("../../../assets/images/e-arrow.svg");
const arrow2 = require("../../../assets/images/e-arrow2.svg");

const window = require("../../../assets/images/e-window.svg");
const basket = require("../../../assets/images/e-basket.svg");

const f1 = require("../../../assets/editor-templates/filter1.svg");
const f2 = require("../../../assets/editor-templates/filter2.svg");
const f3 = require("../../../assets/editor-templates/filter3.svg");

import { twMerge } from "tailwind-merge";

export const MediaControl: React.FC = () => {
  //@ts-ignore
  const isEditFilters = useSelector((state) => state.check.isEditFilters);
  //@ts-ignore
  const currentID = useSelector((state) => state.canvas.currentID);
  const dispatch = useDispatch();

  const handler = () => {
    if (!currentID && currentID !== 0) return;
    dispatch(filterEditHandle(!isEditFilters));
  };
  return (
    <div className="flex justify-between border-b border-solid border-[#dcdcdc] w-full">
      <div className="my-5 mx-6 flex ">
        <div className="flex mr-5">
          {" "}
          <img className="mr-5" src={arrow} alt="back" />
          <img src={arrow2} alt="next" />{" "}
        </div>
        <ul className="p-0 flex ">
          <li
            className={twMerge(
              `py-0 px-1 ml-8 cursor-pointer px-2 px-4 rounded-xl`,
              isEditFilters && "bg-[#F5F5F5]"
            )}
            onClick={handler}
          >
            Редактировать
          </li>
          <li className="py-0 px-1 ml-8 corsor-pointer">Обрезать</li>
        </ul>
      </div>
      <div className="my-5 mx-6 flex ">
        <ul className="p-0 flex">
          <li className="py-0 px-1 ml-8 corsor-pointer">
            {" "}
            <img className="cursor-pointer" src={window} alt="window" />{" "}
          </li>
          <li className="py-0 px-1 ml-8 corsor-pointer">
            {" "}
            <img className="cursor-pointer" src={basket} alt="basket" />{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};
