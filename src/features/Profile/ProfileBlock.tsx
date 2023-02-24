import React from "react";
const del = require('../../assets/images/basket.svg')
const test = require( '../../assets/images/test.png')
export const ProfileBlock = () => {
    return(
        <div className="w-[786px] mx-6 my-0 mb-12 max-[1140px]:w-full">
            <div className="pb-6 border-b border-[#d3d3d4] border-solid">
                <div className="flex justify-between my-7">
                    <h2 className="font-bold inline-block text-2xl">Профиль</h2>
                    <span className="text-[#4f5052] mt-2 block">Мой тариф: &nbsp; <a className="text-[#571cd3]" href="#"> Премиум</a></span>
                </div>
                <div className="flex justify-between items-center">
                    <img src={test} alt="creatiqa" />
                    <div className="flex max-[1140px]:flex-col"> 
                        <div className="flex max-[1140px]:justify-end max-[1140px]:mb-7"><span className="flex items-center mr-4">Фото профиля</span><img width='35' src={del} alt="delete" /></div> 
                        <button 
                        className="w-44 h-12 ml-8 border-none outline-none bg-[#f2f2f2] rounded-xl
                         cursor-pointer duration-300 hover:text-white hover:bg-[#784adc]">Редактировать</button>
                    </div>
                </div>  
            </div>
            <div>
                <label className="block mt-6 mx-0 mb-4 text-base">Личные данные</label>
                <fieldset>
                <input type="text" 
                    className="py-3 px-4 outline-none border border-[#d3d3d4] border-solid rounded-xl w-1/2 mt-1 
                    max-[1140px]:w-[95%] max-[1140px]:mb-5" />
                <button 
                    className="w-44 h-12 mt-2 outline-none border-none bg-[#f2f2f2] rounded-xl cursor-pointer float-right
                    duration-500 hover:text-white hover:bg-[#784adc]">Редактировать</button>
                </fieldset>  
            </div>
            <div>
                <label className="block mt-6 mx-0 mb-4 text-base">Почта</label>
                <fieldset>
                <input className="py-3 px-4 outline-none border border-[#d3d3d4] border-solid rounded-xl w-1/2 mt-1 
                    max-[1140px]:w-[95%] max-[1140px]:mb-5"   type="email" />
                <button className="w-44 h-12 mt-2 outline-none border-none bg-[#f2f2f2] rounded-xl cursor-pointer float-right
                    duration-500 hover:text-white hover:bg-[#784adc]">Изменить</button>
                </fieldset>  
            </div>
            <div>
                <label className="block mt-6 mx-0 mb-4 text-base">Пароль</label>
                <fieldset>
                <input className="py-3 px-4 outline-none border border-[#d3d3d4] border-solid rounded-xl w-1/2 mt-1 
                    max-[1140px]:w-[95%] max-[1140px]:mb-5"  type="password" />
                </fieldset>    
            </div>
        </div>
    )
}