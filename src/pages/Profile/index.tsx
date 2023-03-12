import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Burger } from "../../components/Burger/Burger";
import { JoinNavigation } from "../../components/Menu/JoinNavigation";
import { ProfileBlock } from "../../features/Profile/ProfileBlock";

export const Profile: React.FC = () => {

   // @ts-ignore
  const {isProfile} = useSelector((state) => state.check)
   // @ts-ignore
  const {dropProfileMenu} = useSelector((state) => state.drop)
   // @ts-ignore
  const {isLogin} = useSelector((state) => state.auth)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
//   useEffect(() => {
//     document.title = `Профиль Creatiqa`
// },[])

  const dropHandler = () => {
    dispatch({type: "DROP_PROFILE_MENU", payload: !dropProfileMenu})
}

  useEffect(() => {
    if (!isLogin) {
      return navigate('/')
    }
  },[])

  return (
    <div className="max-w-full my-0 mx-auto flex">
      <Burger onClick={dropHandler} />
      <div className="max-[1140px]:hidden">
      <JoinNavigation />
      </div>
      <ProfileBlock />
    </div>
  );
};
