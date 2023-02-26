import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const x = require("../../assets/images/close.svg")
export const DropSizes = () => {
const navigate = useNavigate()
const dispatch = useDispatch()
    const canvas = useSelector((state: any | boolean) => state.canvasReducer)
    const [value, setValue] = useState({w: '', h: ''})

    const closeHandle = () => {
        dispatch({type: "CANVAS_SIZE_DROP", payload: false})
    }
    const editorHandle = () => {
        dispatch({type: "CANVAS_HEIGHT", payload: value.h})
        dispatch({type: "CANVAS_WIDTH", payload: value.w})
        dispatch({type: "CANVAS_SIZE_DROP", payload: false})

        return navigate('/editor')
    }
    return(
        <div className="fixed flex justify-center items-center top-0 bg-[black]/50 w-full h-full">
            <div className="w-[347px] flex flex-col rounded-2xl">
                <div><h2>Пользовательский формат</h2><img src={x} alt="close" /></div>
                <div>
                    <div><input
                    onChange={(e) => setValue({...value, w: e.target.value})}
                    className="px-8 py-3 border border-solid border-[#000000]/30" type="text" placeholder="Ширина" /><img src="" alt="width" /></div>
                    <div><input
                    onChange={(e) => setValue({...value, h: e.target.value})}
                    className="px-8 py-3 border border-solid border-[#000000]/30" type="text" placeholder="Высота" /><img src="" alt="height" /></div>
                </div>
                <div></div>
                <div className="flex justify-end">
                    <button 
                    onClick={closeHandle}
                    className="text-[#571CD3] px-5 py-2 rounded-xl outline-none border border-solid border-[#571CD3] mr-2">Отмена</button>
                    <button
                    onClick={editorHandle}
                    className="text-[#571CD3] px-5 py-2 rounded-xl outline-none border border-solid border-[#571CD3]">Создать</button>
                </div>
            </div>
        </div>
    )
}