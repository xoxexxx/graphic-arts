import React, { useEffect } from "react";
import { Template } from "../../components/template/Template";
import { JoinNavigation } from "../../components/Menu/JoinNavigation";
import { mainTemplate } from "../../utils/templates/main-templates";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { handleTemplate } from "../../utils/func/handlers";

export const Templates = () => {
    
  const dispatch = useDispatch()
    
  // @ts-ignore
  const {dropMenu} = useSelector((state) => state.drop);
   // @ts-ignore
  const {isLogin} = useSelector((state) => state.auth);
   // @ts-ignore
  const templateList = useSelector((state) => state.template.data)

  const navigate = useNavigate()
  const location = useLocation()

    useEffect(() => {
        if (!isLogin) {
            return navigate('/')
          }
    }, [location])
  
    const handleEditor = (x) => {
      console.log(templateList, x)
    }
  return (
    <>
      {!dropMenu && (
        <div className="flex !max-w-[100%] mx-auto my-0">
          <JoinNavigation />
          <div>
            <div className="flex flex-wrap mt-4 ml-6 gap-4 ">
              {mainTemplate.map((x: any) => (
                <Template key={x.id} x={x} onClick={() => handleTemplate(dispatch,x)} />
              ))}
            </div>
            <h2 className="mx-6 p-0 font-normal text-xl">{templateList && templateList.value}</h2>
            <div className="flex flex-wrap mt-4 ml-6 gap-4 ">
              {templateList && templateList.data.map((x: any) => (
                <Template key={x.id} x={x} onClick={handleEditor} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
