import React from "react";
import { useDispatch } from "react-redux";
import { addCanvasItem } from "../../../services/reducers/canvasReducer";
import { mediaBtnsTemplates } from "../../../utils/objects/editor/templates";
import { mediaTemplates } from "../../../utils/objects/editor/templates";

export const MediaAndPhotoTemplates: React.FC = () => {
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
      })
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
