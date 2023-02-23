import React, { useEffect } from "react";
import { Temp } from "../../features/template/Template";
import { JoinNavigation } from "../../components/Menu/JoinNavigation";
import { mainTemp } from "../../utils/temp/main-templates";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";


export const Templates = () => {
  const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
  const drop = useSelector((state: boolean | any) => state.dropReducer.drop);
  const isLogin = useSelector((state: boolean | any) => state.authReducer.isLogin);
  const listTemp = useSelector((state: boolean | any) => state.templateListReducer.data)
//   useEffect(() => {
//     document.title = `Шаблоны Creatiqa `
// },[])
    useEffect(() => {
        if (!isLogin) {
            return navigate('/')
          }
    }, [location])
  
    const handleTemp = (x) => {
      dispatch({type: x.name})
    }
    const handleRedactor = (x) => {
      console.log('redactor...')     
    }
  return (
    <>
      {!drop && (
        <div className="templates">
          <JoinNavigation />
          <div className="templates__list">
            <div className="templates__list_main">
              {mainTemp.map((x: any) => (
                <Temp key={x.id} x={x} onClick={handleTemp} />
              ))}
            </div>
            <h2>{listTemp && listTemp.value}</h2>
            <div className="templates__list_social">
              {listTemp && listTemp.data.map((x: any) => (
                <Temp key={x.id} x={x} onClick={handleRedactor} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
