import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Resize } from '../../components/resize/Resize'
import { Canvas, MediaCanvas } from '../../features/Canvas/Canvas'
import { EditorMenu } from '../../features/EditorMenu/EditorMenu'
import { EditorSettings } from '../../features/GraphitcsEditorSettings/EditorSettings'
import { MediaControl } from '../../features/GraphitcsEditorSettings/Settings'


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
        <div className='editor w-full flex h-screen '>
            <EditorMenu />
            {currentMenu && <EditorSettings />}
            <div className='flex flex-col justify-between mb-12 border-b border-solid border-[#dcdcdc] w-full'>
                {current === "MEDIA" && <MediaControl />}
                {current === "MEDIA" && <MediaCanvas />}
                {current !== "MEDIA" && <Canvas />} 
                {current === "MEDIA" && <Resize />}
            </div>
        </div>
    )
}