import React from "react";
import {mediaBtnsTemplates} from '../../utils/editor/templates'
import { mediaTemplates } from "../../utils/editor/templates";
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