import React, { useEffect } from "react";
import { Temp } from "../../features/template/Template";
import { JoinNavigation } from "../../components/Menu/JoinNavigation";
import { mainTemp } from "../../utils/temp/main-templates";
import { socialTemp } from "../../utils/temp/main-templates";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./Templates.less";

export const Templates = () => {
    const navigate = useNavigate()
    const location = useLocation()
  const drop = useSelector((state: boolean | any) => state.dropReducer.drop);
  const isLogin = useSelector((state: boolean | any) => state.authReducer.isLogin);
  
    useEffect(() => {
        if (!isLogin) {
            return navigate('/')
          }
    }, [location])
  
  return (
    <>
      {!drop && (
        <div className="templates">
          <JoinNavigation />
          <div className="templates__list">
            <div className="templates__list_main">
              {mainTemp.map((x: any) => (
                <Temp key={x.id} x={x} />
              ))}
            </div>
            <h2>Социальные сети</h2>
            <div className="templates__list_social">
              {socialTemp.map((x: any) => (
                <Temp key={x.id} x={x} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
