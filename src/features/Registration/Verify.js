import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import closeSVG from '../../assets/images/close.svg'

export const Verify = ({email, login, set}) => {
    const dispatch = useDispatch()

    const [value, setValue] = useState('')


    const submit = (e) => {
        e.preventDefault()
        axios({
            method: 'PUT',
            url: `http://217.25.88.184:8080/registr/verify/${email}`,
            'Content-Type': 'application/json',
            data: "12345" 
        }).then((res) => {
            set(prev => !prev)
            login()
        }).catch(() => dispatch({type: "FETCH_AUTH_ERROR"}))
    }
    return(
        <div className=''>
            <button onClick={close} className="!translate-x-[430px] translate-y-[30px]"><img src={`${closeSVG}`} alt="login-creatiqa" /></button>
            <form action="verify" className='w-80 my-12 mx-auto'>
                <fieldset>
                    <label className="text-2xl" htmlFor="verify">Код подтверждения
                        <input className="m-0" id='value' placeholder='Код подтверждения' 
                        value={value} 
                        onChange={e => setValue(e.target.value)} type="number" />
                    </label>
                    <button className="py-4 px-9 text-lg bg-[#784adc] border-none outline-none text-white rounded-xl mt-8" 
                    onClick={submit}>Отправить</button>
                </fieldset>
            </form>
        </div>
    )
}