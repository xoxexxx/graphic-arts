import React from "react";
import { useSelector } from "react-redux";
import { MediaAndPhoto } from "./Settings";

export const EditorSettings: React.FC = () => {

    const current = useSelector((state: any) => state.editorReducer.current);

    return(
        <div className="editor__settings">
            {current == "MEDIA" && 
            <MediaAndPhoto />
            }
        </div>
    )
}


