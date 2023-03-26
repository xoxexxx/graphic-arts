import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stage, Layer, Image } from "react-konva";
import URLImage from "./URLImage";
import { selectIndex, handleChangeItem, IItem, selectedItem } from "../../services/reducers/canvasReducer";
import useImage from "use-image";
import Konva from "konva";

export const Canvas = () => {
  //@ts-ignore
  const idx = useSelector((state) => state.canvas.currentItemID);

  const dispatch = useDispatch();
  // @ts-ignore
  const canvas = useSelector((state) => state.canvas);
  const { items }: { items: IItem[] } = canvas;
  // @ts-ignore
  const [selectedId, selectShape] = React.useState<number | string | null>(
    null
  );
  const checkDeselect = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
     selectShape(null);
    }
  };
  console.log("canvasRender")
  return (
    <div className="flex items-center justify-center mt-10">
      <Stage
        width={canvas.w}
        height={canvas.h}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer>
          {items &&
            items.map((x, i) => (
              <URLImage
                key={x.id}
                url={x.url}
                i={i}
                id={x.id}
                shapeProps={x}
                isSelected={x.id === selectedId}
                //@ts-ignore
                onClick={() => {
                  dispatch(selectedItem(i));  
                  dispatch(selectIndex()) 
                }}
                onSelect={(e) => {
                  selectShape(x.id)      
                }}
                onChange={(newAttrs) => {
                  dispatch(handleChangeItem(newAttrs))
                }}
              />
            ))}
        </Layer>
      </Stage>
    </div>
  );
};

export const MediaCanvas = () => {
  const settings = useSelector(
    (state: any) => state.canvasMediaSettingsReducer
  );
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [image] = useImage(settings.currentMedia);
  const canvas = React.useMemo(() => {
    if (!image) {
      return undefined;
    }
    const el = document.createElement("canvas");

    el.width = image.width;
    el.height = image.height;
    const ctx: any = el.getContext("2d");
    ctx.filter = `brightness(${settings.settings.bright}%) contrast(${settings.settings.contrast}%) saturate(${settings.settings.saturation}%) grayscale(${settings.settings.grayscale}%)`;
    ctx.drawImage(image, 0, 0);
    return el;
  }, [image, settings]);

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);
  return (
    <div className="flex items-center justify-center">
      {/* <Stage width={dimensions.width - 410} height={dimensions.height - 105}> */}
      <Stage width={settings.settings.width} height={settings.settings.height}>
        <Layer>
          <Image
            // x={(dimensions.width - 410 - settings.settings.width) / 2}
            // y={(dimensions.height - 310 - settings.settings.height) / 2}
            image={canvas}
            filters={[Konva.Filters.HSV]}
            hue={110}
            saturation={10}
            value={100}
            width={settings.settings.width}
            height={settings.settings.height}
          />
        </Layer>
      </Stage>
    </div>
  );
};
