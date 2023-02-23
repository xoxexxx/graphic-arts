import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Stage, Layer, Image } from 'react-konva';
import useImage from "use-image";
import "./Canvas.less";
import Konva from "konva";

export const Canvas = () => {
  return <div className=""></div>;
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
    ctx.filter =
      `brightness(${settings.settings.bright}%) contrast(${settings.settings.contrast}%) saturate(${settings.settings.saturation}%) grayscale(${settings.settings.grayscale}%)`;
    ctx.drawImage(image, 0, 0);
    return el;
  }, [image, settings]);

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
      });
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);
  return (
    <div className="editor__canvas_media ">
       {/* <Stage width={dimensions.width - 410} height={dimensions.height - 105}> */}
       <Stage width={settings.settings.width}
              height={settings.settings.height}>
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
