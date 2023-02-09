import React from 'react'
import { JoinNavigation } from '../../components/Menu/JoinNavigation'
import './Main.less'
export const Main = () => {
    return(
        <div className='main'>
            <JoinNavigation />
            <div className='main__box'></div>
        </div>
    )
}