import React, { useMemo, useRef } from "react";
import { Transformer, Image } from "react-konva";
import useImage from "use-image";
import Konva from "konva";
import { useSelector } from "react-redux";


export default function URLImage({
  i,
  url,
  shapeProps,
  isSelected,
  onSelect,
  onClick,
  onChange,
}) {
  const shapeRef = useRef();
  const trRef = useRef();
  const [image] = useImage(url);
  //@ts-ignore
  const filters = useSelector((state) => state.canvas.items[i].filters);
  //@ts-ignore
  const items = useSelector((state) => state.canvas.items)
  //@ts-ignore
  const counts = useSelector((state) => state.canvas.counts)
  const canvas = useMemo(() => {
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
        onClick={() => {
          onClick()
          onSelect()
        }}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragStart={() => {
          onClick()
          onSelect()
        }}
        onDragEnd={(e) => {
          onClick()
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          const node: any = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: Math.round(node.x()),
            y: Math.round(node.y()),

            //set minimal value
            width: Math.round(node.width() * scaleX),
            height: Math.round(node.height() * scaleY),
          });
        }}
      />

      {isSelected && (
        <Transformer
          //@ts-ignore
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            console.log(oldBox, newBox)
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
