import React from "react";
import test from '../../assets/images/test.png'
import del from '../../assets/images/basket.svg'
export const ProfileBlock = () => {

    return(
        <div className="profile__box">
            <div className="profile__box_media">
                <h2>Профиль</h2>
                <span>Мой тариф: <a href="#">Премиум</a></span>
                <div className="profile__box_media_photo">
                    <img src={`${test}`} alt="creatiqa" />
                    <div className="del"> <span>Фото профиля </span> <img src={`${del}`} alt="delete" /></div>
                    <button>Редактировать</button>
                </div>
                
            </div>
            <div className="profile__box_settings">
                    <label>Личные данные</label>
                    <fieldset>
                    <input type="text" />
                    <button>Редактировать</button>
                    </fieldset>
                    
            </div>
            <div className="profile__box_settings">
                    <label>Почта</label>
                    <fieldset>
                    <input type="email" />
                    <button>Изменить</button>
                    </fieldset>
                    
            </div>
            <div className="profile__box_settings">
                    <label>Пароль</label>
                    <fieldset>
                    <input type="password" />
                    </fieldset>
                    
            </div>
        </div>
    )
}