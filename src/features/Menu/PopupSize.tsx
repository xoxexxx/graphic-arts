import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { canvasHeight, canvasWidth } from "../../services/reducers/canvasReducer";
import { dropCanvasSettingSize } from "../../services/reducers/dropReducer";

const x = require("../../assets/images/close.svg");
const v = require("../../assets/images/size-vector.svg");

export const DropSizes = () => {
const navigate = useNavigate()
const dispatch = useDispatch()
    const canvas = useSelector((state: any | boolean) => state.canvasReducer)
    const [value, setValue] = useState({w: '', h: ''})

    const closeHandle = () => {
        dispatch(dropCanvasSettingSize(false))
    }
    const editorHandle = () => {
        dispatch(canvasHeight(value.h))
        dispatch(canvasWidth(value.w))
        dispatch(dropCanvasSettingSize(false))
        return navigate('/editor')
    }
    return(
        <div className="fixed flex justify-center items-center top-0 bg-[black]/50 w-full h-full">
            <div className="w-[347px] flex flex-col rounded-2xl bg-white py-6">
                <div className="flex justify-between mx-4"><h2>Пользовательский формат</h2><img className="cursor-pointer translate-y-[-1rem]" src={x} alt="close" /></div>
                <div className="flex justify-around mt-5 mx-4">
                    <div className="flex w-36"><img className="absolute translate-x-2 translate-y-5" src={v} alt="w" /><input
                    onChange={(e) => setValue({...value, w: e.target.value})}
                    className="px-8 py-3 border border-solid border-[#000000]/30 w-36 outline-none" type="text" placeholder="Ширина" /></div>
                    <div className="flex w-36"><img className="absolute rotate-90 translate-x-2 translate-y-5" src={v} alt="h" /><input
                    onChange={(e) => setValue({...value, h: e.target.value})}
                    className="px-8 py-3 border border-solid border-[#000000]/30 w-36 outline-none" type="text" placeholder="Высота" /></div>
                </div>
                <div></div>
                <div className="flex justify-end mt-5 mr-4">
                    <button 
                    onClick={closeHandle}
                    className="text-[#571CD3] text-sm px-5 py-2 rounded-xl outline-none border border-solid border-[#571CD3] mr-2">Отмена</button>
                    <button
                    onClick={editorHandle}
                    className="text-[#571CD3] text-sm px-5 py-2 rounded-xl outline-none border border-solid border-[#571CD3]">Создать</button>
                </div>
            </div>
        </div>
    )
}