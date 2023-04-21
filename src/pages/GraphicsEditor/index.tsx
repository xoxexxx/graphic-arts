import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Resize } from '../../components/resize/Resize'
import { Canvas } from '../../features/Canvas/Canvas'
import { EditorMenu } from '../../features/EditorMenu/EditorMenu'
import { EditorSettings } from '../../features/GraphitcsEditor/EditorSettings'
import { MediaControl } from '../../features/GraphitcsEditor/MediaAndPhoto/Control'


export const GraphicsEditor = () => {
     // @ts-ignore
    const currentMenu = useSelector((state) => state.menuEditor.currentMenu)
     // @ts-ignore
    const current = useSelector((state) => state.menuEditor.current)
     // @ts-ignore
    const {isLogin} = useSelector((state) => state.auth)
    // @ts-ignore
    const canvas = useSelector(state => state.canvas)
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLogin) {
           return navigate('/')
        }
    }, [location])

    return(
        <div className={`editor w-full flex  min-h-[90vh] h-full `}>
            <EditorMenu />
            {currentMenu && <EditorSettings />}
            <div className='flex flex-col justify-between items-center  w-full'>
                {current === "MEDIA" && <MediaControl />}
                    <Canvas />
                {current === "MEDIA" && <Resize />}
            </div>
        </div>
    )
}