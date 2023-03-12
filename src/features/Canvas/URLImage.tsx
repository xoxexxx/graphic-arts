import React, { useEffect, useRef, useState } from "react";
import {  Transformer, Image } from "react-konva";
import useImage from "use-image";
import Konva from "konva";
import { useDispatch, useSelector } from "react-redux";
;
export default function URLImage({ i, name, h,w, url, shapeProps, isSelected, onSelect, onChange }) {
  const dispatch = useDispatch()
  const shapeRef = React.useRef();
  const trRef = React.useRef();
  const [image] = useImage(url);
  //@ts-ignore
  const filters = useSelector(state => state.canvasReducer.items[i].filters)

  const canvas = React.useMemo(() => {
    if (!image) {
      return undefined;
    }
    
    const el = document.createElement("canvas");
    el.width = image.width;
    el.height = image.height;

    const ctx: any = el.getContext("2d");
     ctx.filter = `brightness(${filters.brightness}%) contrast(${filters.contrast}%) saturate(${filters.saturate}%) grayscale(${filters.grayscale}%)`;
    ctx.drawImage(image, 0, 0);
    return el;
  }, [image, filters]);

  React.useEffect(() => {
    if (isSelected) {
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
      filters={[Konva.Filters.HSV]}
      hue={110}
      saturation={10}
      value={100}
      onClick={onSelect}
      onTap={onSelect}
      ref={shapeRef}
      {...shapeProps}
      draggable
      onDragEnd={(e) => {
        // onChange({
        //   ...shapeProps,
        //   x: e.target.x(),
        //   y: e.target.y(),
        // });
        
      }}
      onTransformEnd={(e) => {
        const node = shapeRef.current;
        //@ts-ignore
        const scaleX = node.scaleX();
        //@ts-ignore
        const scaleY = node.scaleY();
        // onChange({
        //   ...shapeProps,
        //   x: node.x(),
        //   y: node.y(),
        //   width: Math.max(5, node.width() * scaleX),
        //   height: Math.max(node.height() * scaleY),
        // });
        
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
