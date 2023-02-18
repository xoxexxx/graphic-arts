import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import {tabMenu} from '../../utils/editor/tab-menu'
export const EditorMenu: React.FC = () => {
    const dispatch = useDispatch()
    const currentMenu = useSelector((state: any) => state.editorReducer.currentMenu)

    const handler = (e: React.MouseEvent<HTMLElement>) => {
        if (currentMenu == (e.target as any).dataset.action) {
            dispatch({type: 'HIDDEN'})
        } else {
            dispatch({type: 'HIDDEN'})
            dispatch({type: (e.target as any).dataset.action})
        }
        
        
    }

    return(
        <div className="editor__menu">
            {tabMenu.map((tab) => (
                <div key={tab.id} data-action={tab.action} className={`editor__menu_tab ${currentMenu === tab.action && 'active'}`} onClick={handler}>
                    <img data-action={tab.action} className="img" src={tab.img} alt="editor creatiqa" />
                    <span data-action={tab.action} className="text">{tab.name}</span>
                </div>
            ))}
        </div>
    )
}