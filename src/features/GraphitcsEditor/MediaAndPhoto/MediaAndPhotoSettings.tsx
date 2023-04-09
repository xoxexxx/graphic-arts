import React from "react";
import Nouislider from "nouislider-react";
import { useDispatch } from "react-redux";
import {
  changeBrightness,
  changeContrast,
  changeGrayscale,
  changeSaturate,
} from "../../../services/reducers/canvasReducer";

export const MediaAndPhotoSettings: React.FC = (): JSX.Element => {
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
            <span className="text-xs block mb-4 py-1 px-0 mr-4">
              Насыщенность
            </span>
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
