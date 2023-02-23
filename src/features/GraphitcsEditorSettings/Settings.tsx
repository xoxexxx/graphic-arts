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

export const MediaControl: React.FC = () => {
    const isEdit = useSelector((state: any) => state.isEditReducer.isEdit)
    const dispatch = useDispatch()
    
    const handler = () => {
        dispatch({type: "EDITOR", payload: !isEdit})
    }
    return(
        <div className="editor__canvas_media-control">
            <div className="first-flex">
                <div className="nav"> <img src={arrow} alt="back" /><img src={arrow2} alt="next" /> </div>
                <ul className="setting">
                    <li className={`item ${isEdit && 'active'}`} onClick={handler}>Редактировать</li>
                    <li className={`item`}>Повернуть</li>
                    <li className={`item`}>Обрезать</li>
                </ul>
            </div>
            <div className="second-flex">
                <ul className="setting">
                    <li className="item">Расположение</li>
                    <li className="item"> <img src={window} alt="window" /> </li>
                    <li className="item"> <img src={basket} alt="basket" /> </li>
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
        <div className="editor__settings_box">
            <h2>Настройки</h2>
            <div className="editor__settings_box-settings">
                <div className="settings__block">
                    <div className="settings__block_name">
                        <span>Яркость</span>
                        <span>{settings.settings.bright}</span>
                    </div>
                    <Nouislider
                    range={{ min: 0, max: 200 }} 
                    start={[settings.settings.bright]} 
                    onChange={handleBrightChange}  connect />
                </div>
                <div className="settings__block">
                    <div className="settings__block_name">
                        <span>Контраст</span>
                        <span>{settings.settings.contrast}</span>
                    </div>
                    <Nouislider 
                    onChange={handleContrastChange}
                    range={{ min: 0, max: 200 }} start={[settings.settings.contrast]}  connect />
                </div>
                <div className="settings__block">
                    <div className="settings__block_name">
                        <span>Насыщенность</span>
                        <span>{settings.settings.saturation}</span>
                    </div>
                    <Nouislider
                    onChange={handleSaturationChange}
                    range={{ min: 0, max: 200 }} start={[settings.settings.saturation]}  connect />
                </div>
                <div className="settings__block">
                    <div className="settings__block_name">
                        <span>Оттенок</span>
                        <span>{settings.settings.grayscale}</span>
                    </div>
                    <Nouislider
                    onChange={handleGrayscaleChange}
                    range={{ min: 0, max: 100 }} start={[settings.settings.grayscale]}  connect />
                </div>
            </div>
            <h2>Фильтры</h2>
            <div className="editor__settings_box-filter">
                <div className="item-slider">
                    <div className="item" onClick={handleBlueFilter}>
                        <img src={f1} alt="Blue" />
                        <span>Blue</span>
                    </div>
                    <div className="item" onClick={handleGreyscaleFilter}>
                    <img src={f2} alt="Greyscale" />
                        <span>Greyscale</span>
                    </div>
                    <div className="item" onClick={handlePurpleFilter}>
                    <img src={f3} alt="Purple" />
                        <span>Purple</span>
                    </div>
                </div>
                <div className="arrows">
                    <button>←</button>
                    <button>→</button>
                </div>
            </div>
        </div>
    )
}

export const Templates: React.FC = () => {
    const dispatch = useDispatch()
    const handler = (x) => {
        console.log(x)
        dispatch({type: "CURRENT_MEDIA", payload: x})
    }


    return(

            <div className="templates" >
                <div className="btns">
                    {mediaBtnsTemplates.map(x => (
                        <button key={x.name}>{x.name}</button>
                    ))}
                </div>
                <div className="media" >
                        {mediaTemplates.map(x => (
                            <div key={x.url} onClick={() => handler(x)}>
                                <img src={x.url} alt={x.name} />
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
        <div className="editor__settings_media-and-photo">
            <div className="input">
                <input type="text" placeholder="Поиск шаблонов" />
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