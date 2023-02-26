import React, { useMemo, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {mediaBtnsTemplates} from '../../utils/editor/templates';
import { mediaTemplates } from "../../utils/editor/templates";

import Nouislider from "nouislider-react";


const arrow = require('../../assets/images/e-arrow.svg');
const arrow2 = require('../../assets/images/e-arrow2.svg');

const window = require("../../assets/images/e-window.svg");
const basket = require("../../assets/images/e-basket.svg");

const f1 = require("../../assets/editor-templates/filter1.svg")
const f2 = require("../../assets/editor-templates/filter2.svg")
const f3 = require("../../assets/editor-templates/filter3.svg")

import { twMerge } from "tailwind-merge";

export const MediaControl: React.FC = () => {
    const isEdit = useSelector((state: any) => state.isEditReducer.isEdit)
    const dispatch = useDispatch()
    
    const handler = () => {
        dispatch({type: "EDITOR", payload: !isEdit})
    }
    return(
        <div className="flex justify-between border-b border-solid border-[#dcdcdc]">
            <div className="my-5 mx-6 flex ">
                <div className="flex mr-5"> <img className="mr-5" src={arrow} alt="back" /><img src={arrow2} alt="next" /> </div>
                <ul className="p-0 flex ">
                    <li className={twMerge(`py-0 px-1 ml-8 corsor-pointer`,isEdit && 'bg-[#F5F5F5')} onClick={handler}>Редактировать</li>
                    <li className="py-0 px-1 ml-8 corsor-pointer">Обрезать</li>
                </ul>
            </div>
            <div className="my-5 mx-6 flex ">
                <ul className="p-0 flex">
                    <li className="py-0 px-1 ml-8 corsor-pointer"> <img className="cursor-pointer" src={window} alt="window" /> </li>
                    <li className="py-0 px-1 ml-8 corsor-pointer"> <img className="cursor-pointer" src={basket} alt="basket" /> </li>
                </ul>
            </div>
        </div>
    )
}

export const Settings: React.FC = () => {
   const dispatch = useDispatch()
   const settings = useSelector((state: any) => state.canvasMediaSettingsReducer)


    const handleBrightChange = (e) => {
        dispatch({type: 'ЯРКОСТЬ', payload: Math.round(e[0])})
    }
    const handleContrastChange = (e) => {
        dispatch({type: "КОНТРАСТ", payload: Math.round(e[0])})
    }
    const handleSaturationChange = (e) => {
        dispatch({type: "НАСЫЩЕННОСТЬ", payload: Math.round(e[0])})
    }
    const handleGrayscaleChange = (e) => {
        dispatch({type: "ОТТЕНОК", payload: Math.round(e[0])})
    }

    const handleBlueFilter = () => {
        dispatch({type: "BLUE"})
    }
    const handleGreyscaleFilter = () => {
        dispatch({type: "GREYSCALE"})
    }
    const handlePurpleFilter = () => {
        dispatch({type: "PURPLE"})
    }
    return(
        <div className="relative !overflow-y-scroll h-[90vh]">
            <h2 className="my-6 mx-5 font-normal text-lg">Настройки</h2>
            <div className="py-6 mx-3 bg-white mt-5 mb-0 mx-22">
                <div className="mb-5">
                    <div className="flex justyfy-between">
                        <span className="text-xs block mb-4 py-1 px-0">Яркость</span>
                        <span className="text-xs block mb-4 py-1 px-4 border border-solid rounded-xl border-[ #D9D9D9]">{settings.settings.bright}</span>
                    </div>
                    <Nouislider
                    range={{ min: 0, max: 200 }} 
                    start={[settings.settings.bright]} 
                    onChange={handleBrightChange}  connect />
                </div>
                <div className="mb-5">
                    <div className="flex justyfy-between">
                        <span className="text-xs block mb-4 py-1 px-0">Контраст</span>
                        <span className="text-xs block mb-4 py-1 px-4 border border-solid rounded-xl border-[ #D9D9D9]">{settings.settings.contrast}</span>
                    </div>
                    <Nouislider 
                    onChange={handleContrastChange}
                    range={{ min: 0, max: 200 }} start={[settings.settings.contrast]}  connect />
                </div>
                <div className="mb-5">
                    <div className="flex justyfy-between">
                        <span className="text-xs block mb-4 py-1 px-0">Насыщенность</span>
                        <span className="text-xs block mb-4 py-1 px-4 border border-solid rounded-xl border-[ #D9D9D9]">{settings.settings.saturation}</span>
                    </div>
                    <Nouislider
                    onChange={handleSaturationChange}
                    range={{ min: 0, max: 200 }} start={[settings.settings.saturation]}  connect />
                </div>
                <div className="mb-5">
                    <div className="flex justyfy-between">
                        <span className="text-xs block mb-4 py-1 px-0">Оттенок</span>
                        <span className="text-xs block mb-4 py-1 px-4 border border-solid rounded-xl border-[ #D9D9D9]">{settings.settings.grayscale}</span>
                    </div>
                    <Nouislider
                    onChange={handleGrayscaleChange}
                    range={{ min: 0, max: 100 }} start={[settings.settings.grayscale]}  connect />
                </div>
            </div>
            <h2>Фильтры</h2>
            <div className="py-6 px-4 rounded-2xl bg-white mx-2 mt-5 mb-0">
                <div className="flex text-center ">
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
                </div>
                <div className="flex flex-center ">
                    <button className="m-2">←</button>
                    <button className="m-2">→</button>
                </div>
            </div>
        </div>
    )
}

export const Templates: React.FC = () => {
    const dispatch = useDispatch()
    const handler = (x) => {
        console.log(x)
        dispatch({type: "ADD_CANVAS_ITEM", payload: {
            id: x.name,
            type: 'image',
            url: x.url,
            size: {
                w: x.w,
                h: x.h
            },
            x: 0,
            y: 0,
            width: x.w,
            height: x.h
        }})
    }


    return(

            <div className="h-[90vh] flex flex-col ml-2 relative !overflow-y-scroll" >
                <div className="max-w-[90%]">
                    {mediaBtnsTemplates.map(x => (
                        <button className="py-2 px-5 bg-white border border-solid border-[#69696a] rounded-xl text-[#69696a] cursor-pointer mt-2 mr-2 mb-0 ml-0" key={x.name}>{x.name}</button>
                    ))}
                </div>
                <div className="flex flex-wrap mt-2 max-w-[90%] h-full " >
                        {mediaTemplates.map(x => (
                            <div className="w-40 mt-2.5 mr-2 mb-0 ml-0 cursor-pointer duration-500 
                            max-[1380px]:w-28 
                            hover:brightness-75
                            " key={x.url} onClick={() => handler(x)}>
                                <img className="w-full" src={x.url} alt={x.name} />
                            </div>
                        ))}
                </div>
            </div>
    )
}

export const MediaAndPhoto: React.FC = () => {

    const isEdit = useSelector((state: any) => state.isEditReducer.isEdit)

    return(
        <>
        <div>
            <div className="">
                <input className="block py-2 px-12 rounded-md mt-8 mr-0 mb-5 ml-2 text-base text-[#7b7c7d]
                max-[1380px]:w-44 
                " type="text" placeholder="Поиск шаблонов" />
            </div>
            {isEdit ?
              <Settings />
              :
              <Templates />
            }
        </div>
        </>
        
        
    )
}