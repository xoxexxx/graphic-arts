import React from "react";
import { useSelector } from "react-redux";
import './Canvas.less';




export const Canvas = () => {

    return(
        <div className=""></div>
    )
}


export const MediaCanvas = () => {
    const settings = useSelector((state: any) => state.canvasMediaSettingsReducer)

    return(
        <div className="editor__canvas_media"><img src={settings.currentMedia} 
        style={{filter: 
            `brightness(${settings.settings.bright}%) contrast(${settings.settings.contrast}%) saturate(${settings.settings.saturation}%) grayscale(${settings.settings.grayscale}%)
            `}} 
        
        /></div>
            
    )
}