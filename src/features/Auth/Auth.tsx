import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IPopup } from "../types";

import {
  fetchAuthRequest,
  fetchAuthSuccess,
  fetchAuthError,
} from "../../services/reducers/authReducer";
const closeSVG = require("../../assets/images/close.svg");

export const Auth: React.FC<{ popup_: IPopup | any; handlers }> = ({
  popup_,
  handlers,
}) => {
  const dispatch = useDispatch();

  const [popup, setPopup] = popup_;
  const [closeHandle, showRegistrationHandle] = handlers;

  const [usr, setUsr] = useState<any>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // axios({
    //   method: 'PUT',
    //   url: 'http://217.25.88.184:8080/api-authlogin/?next=/auth',
    //   data: usr,
    //   headers: {
    //             'Content-Type': 'application/json',
    //   }
    // }).then((res) => console.log(res))
    dispatch(fetchAuthRequest());
    setPopup(false);
    return navigate("/home");
  };

  return (
    <>
      {popup.auth && (
        <div className="overflow-y-scroll max-h-[90%] rounded-xl bg-[white] w-[480px]">
          <form
            action="http://217.25.88.184:8080/api-authlogin/?next=/auth"
            className="w-80 my-5 mx-auto"
          >
            <input type="hidden" name="_csrf" value="SKUDASCSRF" />
            <label
              htmlFor="title"
              className="title inline-block text-xl mt-2.5"
            >
              Вход
            </label>
            <button
              onClick={close}
              className="x2 absolute outline-none border-none bg-transparent cursor-pointer translate-x-[300px] translate-y-[10px]"
            >
              <img src={`${closeSVG}`} alt="login-creatiqa" />
            </button>
            <fieldset className="flex flex-col p-0 m-0">
              <label className="flex flex-col mt-4" htmlFor="email">
                E-mail
                <input
                  className="py-3 px-4 text-base font-normal  mt-0.5 outlone-none border border-[#d9d9d9] border-solid rounded-xl .placeholder-gray-500"
                  onChange={(e) => setUsr({ ...usr, email: e.target.value })}
                  type="email"
                  placeholder="Введите адрес электронной почты"
                />
              </label>
              <label className="flex flex-col mt-4" htmlFor="password">
                Пароль
                <input
                  className="py-3 px-4 text-base font-normal  mt-0.5 outlone-none border border-[#d9d9d9] border-solid rounded-xl .placeholder-gray-500"
                  onChange={(e) => setUsr({ ...usr, password: e.target.value })}
                  type="password"
                  placeholder="Придумайте пароль"
                />
              </label>
              <button
                onClick={submit}
                className="mt-2.5 bg-[#784adc] rounded-xl outline-none border-none cursor-pointer text-white font-normal py-4 px-9"
              >
                Войти
              </button>
              <p className="text-xs my-2">
                Нет аккаунт?{" "}
                <Link
                  onClick={showRegistrationHandle}
                  className="text-[#784adc]"
                  to="/"
                >
                  Зарегистрироваться
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      )}
    </>
  );
};
