import React, { useEffect } from "react";
import "./Home.less";
import { useSelector } from "react-redux";
export const Home = () => {
  const drop = useSelector((state: any) => state.dropReducer.drop);

  return (
    <>
      {!drop && (
        <div className="home-header">
          <div className="home-header__box">
            <div className="home-header__box_subtitle">
              <p>
                <span>CREATIQA</span> - поможет найти решение для графического
                дизайна, презентаций, макетов для полиграфии, графики для
                социальных сетей и многого другого в мире цифровых иллюстраций.
                Creatiqa подходит как профессионалам, так и любителям.
              </p>
            </div>
            <div className="home-header__box_image">
              <div></div>
              <div></div>
              <div>
                <svg
                  width="226"
                  height="199"
                  viewBox="0 0 226 199"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100.876 6.99999C106.264 -2.33334 119.736 -2.33333 125.124 7L223.851 178C229.24 187.333 222.504 199 211.727 199H14.2731C3.49589 199 -3.23986 187.333 2.14875 178L100.876 6.99999Z"
                    fill="#33D6D6"
                  />
                </svg>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="home-header__start-button">
            <button>Начать бесплатно</button>
          </div>
        </div>
      )}
    </>
  );
};
