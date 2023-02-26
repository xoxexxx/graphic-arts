import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import {tabMenu} from '../../utils/editor/tab-menu'

import { twMerge } from "tailwind-merge";

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
        <div className="flex flex-col items-center w-24 h-full bg-[#9a77e5]">
            {tabMenu.map((tab) => (
                <div key={tab.id} data-action={tab.action} className={twMerge(currentMenu === tab.action && 'active', "mx-4 my-3 p-1.5 rounded-2xl diration-500 cursor-pointer hover:bg-[#000000]/20 first:mx-4 first:mt-6 first:mb-2")} onClick={handler}>
                    <img data-action={tab.action} className="block my-0 mx-auto " src={tab.img} alt="editor creatiqa" />
                    <span data-action={tab.action} className="block text-center font-medium text-xs text-white">{tab.name}</span>
                </div>
            ))}
        </div>
    )
}