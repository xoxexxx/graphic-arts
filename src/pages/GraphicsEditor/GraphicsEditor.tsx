import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Resize } from '../../components/resize/Resize'
import { EditorMenu } from '../../features/EditorMenu/EditorMenu'
import { EditorSettings } from '../../features/GraphitcsEditorSettings/EditorSettings'
import { MediaControl } from '../../features/GraphitcsEditorSettings/Settings'
import './GraphicsEditor.less'


export const GraphicsEditor = () => {
    const currentMenu = useSelector((state: any) => state.editorReducer.currentMenu)
    const current = useSelector((state: any) => state.editorReducer.current)
    const isLogin = useSelector((state: boolean | any) => state.authReducer.isLogin)
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLogin) {
           return navigate('/')
        }
    }, [location])

    return(
        <div className='editor'>
            <EditorMenu />
            {currentMenu && <EditorSettings />}
            <div className='editor__canvas'>
                {current === "MEDIA" && <MediaControl />}
                <div className='canvas'></div>
                {current === "MEDIA" && <Resize />}
            </div>
        </div>
    )
}