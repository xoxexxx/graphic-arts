import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { JoinNavigation } from "../../components/Menu/JoinNavigation";
import { Temp } from "../../features/template/Template";
import { mainTemp, lastDesign } from "../../utils/temp/main-templates";
import "./Main.less";
export const Main = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  
  const drop = useSelector((state: boolean | any) => state.dropReducer.drop);
  const isLogin = useSelector(
    (state: boolean | any) => state.authReducer.isLogin
  );
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
        <div className="main">
          <JoinNavigation />
          <div className="main__list">
            <h2>Выбрать формат...</h2>
            <div className="main__list_main">
              {mainTemp.map((x: any) => (
                <Temp key={x.id} x={x} onClick={handleTemp} />
              ))}
            </div>
            <h2>Последние дизайны</h2>
            <div className="main__list_main">
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
