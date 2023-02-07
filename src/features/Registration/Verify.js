import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import closeSVG from '../../assets/images/close.svg'

export const Verify = ({email, close}) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('12345')
    
    const submit = (e) => {
        e.preventDefault()
        axios({
            method: 'PUT',
            url: `http://217.25.88.184:8080/registr/verify/${email}`,
            'Content-Type': 'application/json',
            data: "12345"
           
        }).then((res) => {
            
        }).catch(() => dispatch({type: "FETCH_AUTH_ERROR"}))
    }
    return(
        <div className='popup__registration_verify'>
            <button onClick={close} className="x"><img src={`${closeSVG}`} alt="login-creatiqa" /></button>
            <form action="verify">
                <fieldset>
                    <label htmlFor="verify">Код подтверждения
                        <input placeholder='Код подтверждения' value={value} onChange={e => setValue(e.target.value)} type="number" />
                    </label>
                    <button onClick={submit}>Отправить</button>
                </fieldset>
            </form>
        </div>
    )
}