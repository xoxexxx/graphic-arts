import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { JoinNavigation } from "../../components/Menu/JoinNavigation";
import { Temp } from "../../features/template/Template";
import { mainTemp, lastDesign } from "../../utils/templates/main-templates";

export const Main = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();
   // @ts-ignore
  const drop = useSelector((state) => state.dropReducer.drop);
   // @ts-ignore
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  // useEffect(() => {
  //   document.title = `Главная Creatiqa `;
  // }, []);
  useEffect(() => {
    dispatch({type: "NULL"})
    if (!isLogin) {
      return navigate("/");
    }
  }, [location]);

  const handleTemp = (x) => {
    dispatch({type: x.name})
    navigate("/templates")
  }
  const handleRedactor = (x) => {
    console.log('redactor...')     
  }
  return (
    <>
      {!drop && (
        <div className="flex !max-w-[100%] mx-auto my-0">
          <JoinNavigation />
          <div className="m-0">
            <h2 className="mx-6 p-0 font-normal text-xl">Выбрать формат...</h2>
            <div className="flex flex-wrap mt-4 ml-6 gap-4 ">
              {mainTemp.map((x: any) => (
                <Temp key={x.id} x={x} onClick={handleTemp} />
              ))}
            </div>
            <h2 className="mx-6 p-0 mt-10 font-normal text-xl">Последние дизайны</h2>
            <div className="flex flex-wrap mt-4 ml-6 gap-4">
              {lastDesign.map((x: any) => (
                <Temp key={x.id} x={x} onClick={handleRedactor} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
