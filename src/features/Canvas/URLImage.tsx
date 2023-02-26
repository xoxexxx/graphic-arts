import React, { useEffect, useRef, useState } from "react";
import {  Transformer, Image } from "react-konva";
import useImage from "use-image";
import Konva from "konva";
export default function URLImage({ h,w, url, shapeProps, isSelected, onSelect, onChange }) {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  const [image] = useImage(url);
  const canvas = React.useMemo(() => {
    if (!image) {
      return undefined;
    }
    
    const el = document.createElement("canvas");
    el.width = image.width;
    el.height = image.height;

    const ctx: any = el.getContext("2d");
    // ctx.filter =
    //   `brightness(${settings.settings.bright}%) contrast(${settings.settings.contrast}%) saturate(${settings.settings.saturation}%) grayscale(${settings.settings.grayscale}%)`;
    ctx.drawImage(image, 0, 0);
    return el;
  }, [image]);

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      //@ts-ignore
      trRef.current.nodes([shapeRef.current]);
      //@ts-ignore
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);


  return (
    <>
    <Image
      image={canvas}
      // filters={[Konva.Filters.HSV]}
      // hue={110}
      // saturation={10}
      // value={100}
     
      onClick={onSelect}
      onTap={onSelect}
      ref={shapeRef}
      {...shapeProps}
      draggable
      onDragEnd={(e) => {
        onChange({
          ...shapeProps,
          x: e.target.x(),
          y: e.target.y(),
        });
      }}
      onTransformEnd={(e) => {
        const node = shapeRef.current;
        //@ts-ignore
        const scaleX = node.scaleX();
        //@ts-ignore
        const scaleY = node.scaleY();
        onChange({
          ...shapeProps,
          //@ts-ignore
          x: node.x(),
          //@ts-ignore
          y: node.y(),
          // set minimal value
          //@ts-ignore
          width: Math.max(5, node.width() * scaleX),
          //@ts-ignore
          height: Math.max(node.height() * scaleY),
        });
      }}
      
    />

    {isSelected && (
        <Transformer
         //@ts-ignore
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
   </> 
  );
}
