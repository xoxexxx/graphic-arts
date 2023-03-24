import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { mediaBtnsTemplates } from "../../utils/objects/editor/templates";
import { mediaTemplates } from "../../utils/objects/editor/templates";

import {
  addCanvasItem,
  changeBrightness,
  changeContrast,
  changeGrayscale,
  changeSaturate,
} from "../../services/reducers/canvasReducer";
import { filterEditHandle } from "../../services/reducers/checkURLReducer";

import Nouislider from "nouislider-react";

const arrow = require("../../assets/images/e-arrow.svg");
const arrow2 = require("../../assets/images/e-arrow2.svg");

const window = require("../../assets/images/e-window.svg");
const basket = require("../../assets/images/e-basket.svg");

const f1 = require("../../assets/editor-templates/filter1.svg");
const f2 = require("../../assets/editor-templates/filter2.svg");
const f3 = require("../../assets/editor-templates/filter3.svg");

import { twMerge } from "tailwind-merge";

export const MediaControl: React.FC = () => {
  //@ts-ignore
  const isEditFilters = useSelector((state) => state.check.isEditFilters);
  //@ts-ignore
  const currentID = useSelector((state) => state.canvas.currentID)
  const dispatch = useDispatch();

  const handler = () => {
    if (!currentID && currentID !== 0) return
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

export const Settings: React.FC = () => {
  const dispatch = useDispatch();
  //@ts-ignore
  const idx = useSelector((state) => state.canvas.currentID);
  //@ts-ignore
  const canvas = useSelector((state) => state.canvas);
  //@ts-ignore
  const filters = useSelector((state) => state.canvas.items[idx].filters);
  //@ts-ignore
  const items = useSelector((state) => state.canvas.items);
  //@ts-ignore
  const handleBrightChange = (e) => {
    dispatch(changeBrightness(Number(e[0])));
  };
  const handleContrastChange = (e) => {
    dispatch(changeContrast(Number(e[0])));
  };
  const handleSaturateChange = (e) => {
    dispatch(changeSaturate(Number(e[0])));
  };
  const handleGrayscaleChange = (e) => {
    dispatch(changeGrayscale(Number(e[0])));
  };
  return (
    <div className="relative !overflow-y-scroll h-[90vh]">
      <h2 className="my-6 mx-5 font-normal text-lg">Настройки</h2>
      <div className="py-6 mx-3 bg-white mt-5 mb-0 mx-22 px-4 rounded-2xl">
        <div className="mb-5">
          <div className="flex justyfy-between">
            <span className="text-xs block mb-4 py-1 px-0 mr-4">Яркость</span>
            <span className="text-xs block mb-4 py-1 px-4 border border-solid rounded-xl border-[ #D9D9D9]">
              {filters.brightness}
            </span>
          </div>
          <Nouislider
            range={{ min: 0, max: 200 }}
            start={[100]}
            onChange={handleBrightChange}
            connect
          />
        </div>
        <div className="mb-5">
          <div className="flex justyfy-between">
            <span className="text-xs block mb-4 py-1 px-0 mr-4">Контраст</span>
            <span className="text-xs block mb-4 py-1 px-4 border border-solid rounded-xl border-[ #D9D9D9]">
              {filters.contrast}
            </span>
          </div>
          <Nouislider
            onChange={handleContrastChange}
            range={{ min: 0, max: 200 }}
            start={[100]}
            connect
          />
        </div>
        <div className="mb-5">
          <div className="flex justyfy-between">
            <span className="text-xs block mb-4 py-1 px-0 mr-4">Насыщенность</span>
            <span className="text-xs block mb-4 py-1 px-4 border border-solid rounded-xl border-[ #D9D9D9]">
              {filters.saturate}
            </span>
          </div>
          <Nouislider
            onChange={handleSaturateChange}
            range={{ min: 0, max: 200 }}
            start={[100]}
            connect
          />
        </div>
        <div className="mb-5">
          <div className="flex justyfy-between">
            <span className="text-xs block mb-4 py-1 px-0 mr-4">Оттенок</span>
            <span className="text-xs block mb-4 py-1 px-4 border border-solid rounded-xl border-[ #D9D9D9]">
              {filters.grayscale}
            </span>
          </div>
          <Nouislider
            onChange={handleGrayscaleChange}
            range={{ min: 0, max: 100 }}
            start={[0]}
            connect
          />
        </div>
      </div>
      <h2>Фильтры</h2>
      <div className="py-6 px-4 rounded-2xl bg-white mx-2 mt-5 mb-0">
        {/* <div className="flex text-center ">
                    <div className="cursor-pointer mr-2" onClick={handleBlueFilter}>
                        <img src={f1} alt="Blue" />
                        <span>Blue</span>
                    </div>
                    <div className="cursor-pointer mr-2" onClick={handleGreyscaleFilter}>
                    <img src={f2} alt="Greyscale" />
                        <span>Greyscale</span>
                    </div>
                    <div className="cursor-pointer"  onClick={handlePurpleFilter}>
                    <img src={f3} alt="Purple" />
                        <span>Purple</span>
                    </div>
                </div> */}
        <div className="flex flex-center ">
          <button className="m-2">←</button>
          <button className="m-2">→</button>
        </div>
      </div>
    </div>
  );
};

export const Templates: React.FC = () => {
  const dispatch = useDispatch();
  const handler = (x) => {
    dispatch(
      addCanvasItem({
          id: x.name,
          type: "image",
          url: x.url,
          x: 0,
          y: 0,
          width: x.w,
          height: x.h,
          w: x.w,
          h: x.h,
          filters: {
            brightness: 100,
            contrast: 100,
            saturate: 100,
            grayscale: 0,
          },
        },
      )
    );
  };

  return (
    <div className="h-[90vh] flex flex-col ml-2 relative !overflow-y-scroll">
      <div className="max-w-[90%]">
        {mediaBtnsTemplates.map((x) => (
          <button
            className="py-2 px-5 bg-white border border-solid border-[#69696a] rounded-xl text-[#69696a] cursor-pointer mt-2 mr-2 mb-0 ml-0"
            key={x.name}
          >
            {x.name}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap mt-2 max-w-[90%] h-full ">
        {mediaTemplates.map((x: any) => (
          <div
            className="w-40 mt-2.5 mr-2 mb-0 ml-0 cursor-pointer duration-500 
                            max-[1380px]:w-28 
                            hover:brightness-75
                            "
            key={x.url}
            onClick={() => handler(x)}
          >
            <img className="w-full" src={x.url} alt={x.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const MediaAndPhoto: React.FC = () => {
  const  isEditFilters = useSelector((state: any) => state.check.isEditFilters);

  return (
    <>
      <div>
        <div className="">
          <input
            className="block py-2 px-12 rounded-md mt-8 mr-0 mb-5 ml-2 text-base text-[#7b7c7d]
                max-[1380px]:w-44 
                "
            type="text"
            placeholder="Поиск шаблонов"
          />
        </div>
        {isEditFilters ? <Settings /> : <Templates />}
      </div>
    </>
  );
};
