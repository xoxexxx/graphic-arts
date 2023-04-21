import React from "react";
import { useSelector } from "react-redux";
import { MediaAndPhoto } from "./MediaAndPhoto/MediaAndPhoto";


export const EditorSettings: React.FC = () => {

    const current = useSelector((state: any) => state.menuEditor.current);

    return(
        <div className="min-w-[410px] w-[410px] h-full bg-[#f5f5f5] overflow-y-hidden 
        max-[1380px]:w-[310px] max-[1380px]:min-w-[310px]
        ">
            {current == "MEDIA" && 
            <MediaAndPhoto />
            }
        </div>
    )
}


