import React, { useEffect } from "react";
import { Temp } from "../../features/template/Template";
import { JoinNavigation } from "../../components/Menu/JoinNavigation";
import { mainTemp } from "../../utils/templates/main-templates";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";


export const Templates = () => {
  const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

  // @ts-ignore
  const drop = useSelector((state) => state.dropReducer.drop);
   // @ts-ignore
  const isLogin = useSelector((state) => state.authReducer.isLogin);
   // @ts-ignore
  const listTemp = useSelector((state) => state.templateListReducer.data)


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
        <div className="flex !max-w-[100%] mx-auto my-0">
          <JoinNavigation />
          <div>
            <div className="flex flex-wrap mt-4 ml-6 gap-4 ">
              {mainTemp.map((x: any) => (
                <Temp key={x.id} x={x} onClick={handleTemp} />
              ))}
            </div>
            <h2 className="mx-6 p-0 font-normal text-xl">{listTemp && listTemp.value}</h2>
            <div className="flex flex-wrap mt-4 ml-6 gap-4 ">
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
