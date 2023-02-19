import React from "react";
import {mediaBtnsTemplates} from '../../utils/editor/templates';
import { mediaTemplates } from "../../utils/editor/templates";


const arrow = require('../../assets/images/e-arrow.svg');
const arrow2 = require('../../assets/images/e-arrow2.svg');

const window = require("../../assets/images/e-window.svg");
const basket = require("../../assets/images/e-basket.svg");

export const MediaControl: React.FC = () => {

    return(
        <div className="editor__canvas_media-control">
            <div className="first-flex">
                <div className="nav"> <img src={arrow} alt="back" /><img src={arrow2} alt="next" /> </div>
                <ul className="setting">
                    <li className="item">Редактировать</li>
                    <li className="item">Повернуть</li>
                    <li className="item">Обрезать</li>
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

export const MediaAndPhoto: React.FC = () => {
    return(
        <div className="editor__settings_media-and-photo">
            <div className="input">
                <input type="text" placeholder="Поиск шаблонов" />
            </div>
            <div className="templates" >
                <div className="btns">
                    {mediaBtnsTemplates.map(x => (
                        <button key={x.name}>{x.name}</button>
                    ))}
                </div>
                <div className="media" >
                        {mediaTemplates.map(x => (
                            <div key={x.url}>
                                <img src={x.url} alt={x.name} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}