import React from "react";
import { useSelector } from "react-redux";



export const Home = () => {
   // @ts-ignore
  const drop = useSelector((state) => state.drop);

//   useEffect(() => {
//     document.title = `Creatiqa`
// },[])


  return (
    <>
      {!drop.dropMenu && (
        <div className=" 
        max-w-screen-lg ml-auto mr-auto mt-12 mb-12">
          <div className="
          flex px-12 
          max-[1040px]:flex-col">
            <div className="
            max-w-[27rem] text-2xl font-light mt-36 mr-44 
            max-[1040px]:w-full max-[1040px]:mx-auto max-[1040px]:my-0 max-[1040px]:max-w-3xl  max-[1040px]:mt-16">
              <p>
                <span className="font-bold bg-clip-text home__creatiqa">CREATIQA</span> - поможет найти решение для графического
                дизайна, презентаций, макетов для полиграфии, графики для
                социальных сетей и многого другого в мире цифровых иллюстраций.
                Creatiqa подходит как профессионалам, так и любителям.
              </p>
            </div>
            <div 
            className="home__svg 
            relative z-0 
             max-[1040px]:absolute max-[1040px]:left-64 max-[1040px]:top-[520px]
             max-[840px]:left-40 max-[840px]:top-[580px] 
             max-[660px]:scale-75 max-[660px]:left-28 max-[660px]:top-[500px]
             max-[420px]:scale-[0.6] max-[420px]:left-10 max-[420px]:top-[640px]
             ">
              <div className="absolute rounded-full w-24 h-24  bg-[#ff66a3]  -translate-x-[60px] translate-y-[220px]"></div>
              <div className="absolute w-60 h-60 rounded-2xl bg-[#9a77e5]"></div>
              <div className="absolute translate-x-[240px] translate-y-[210px]">
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
              <div className="absolute rounded-full w-56 h-56  bg-[#ff66a3] translate-y-[300px]"></div>
              <div className="absolute rounded-2xl w-28 h-28 bg-[#9a77e5]"></div>
            </div>
          </div>
          <div className="
          text-center mt-56 px-5
          max-[1020px]:w-11/12
          max-[1020px]:mt-16
          max-[1020px]:mx-auto
          ">
            <button 
            className="text-white py-4 px-9 bg-[#784ADC] 
            outline-none border-none 10px; rounded-lg font-semibold
            text-lg cursor-pointer
            max-[1020px]:w-11/12
           
            ">Начать бесплатно</button>
          </div>
        </div>
      )}
    </>
  );
};
