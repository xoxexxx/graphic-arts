import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { JoinNavigation } from "../../components/Menu/JoinNavigation";
import { Template } from "../../components/template/Template";
import { mainTemplate, lastDesign } from "../../utils/objects/templates";

import { handleTemplate as handleTemplateFunc } from "../../utils/func/handlers";
export const Main = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();
   // @ts-ignore
  const {dropMenu} = useSelector((state) => state.drop);
   // @ts-ignore
  const {isLogin} = useSelector((state) => state.auth);
  // useEffect(() => {
  //   document.title = `Главная Creatiqa `;
  // }, []);
  useEffect(() => {
    dispatch({type: "NULL"})
    if (!isLogin) {
      return navigate("/");
    }
  }, [location]);

  const handleTemplate = (x) => {
    handleTemplateFunc(dispatch, x)
    navigate("/templates")
  }
  const handleRedactor = (x) => {
    
  }
  return (
    <>
      {!dropMenu && (
        <div className="flex !max-w-[100%] mx-auto my-0">
          <JoinNavigation />
          <div className="m-0">
            <h2 className="mx-6 p-0 font-normal text-xl">Выбрать формат...</h2>
            <div className="flex flex-wrap mt-4 ml-6 gap-4 ">
              {mainTemplate.map((x: any) => (
                <Template key={x.id} x={x} onClick={() => handleTemplate(x)} />
              ))}
            </div>
            <h2 className="mx-6 p-0 mt-10 font-normal text-xl">Последние дизайны</h2>
            <div className="flex flex-wrap mt-4 ml-6 gap-4">
              {lastDesign.map((x: any) => (
                <Template key={x.id} x={x} onClick={handleRedactor} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
