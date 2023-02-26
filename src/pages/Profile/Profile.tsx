import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { DropMenu } from "../../components/drop-menu/drop-menu";
import { JoinNavigation } from "../../components/Menu/JoinNavigation";
import { ProfileBlock } from "../../features/Profile/ProfileBlock";

export const Profile: React.FC = () => {

  const isProfile = useSelector((state: boolean | any) => state.profileReducer.isProfile)
  const drop_ = useSelector((state: boolean | any) => state.dropReducer.drop_)
  const isLogin = useSelector((state: boolean | any) => state.authReducer.isLogin)
  const dispatch = useDispatch()
  const navigate = useNavigate()
//   useEffect(() => {
//     document.title = `Профиль Creatiqa`
// },[])

  const dropHandler = () => {
    dispatch({type: "DROP_", payload: !drop_})
}

  useEffect(() => {
    if (!isLogin) {
      return navigate('/')
    }
  },[])

  return (
    <div className="max-w-full my-0 mx-auto flex">
      <DropMenu onClick={dropHandler} />
      <div className="max-[1140px]:hidden">
      <JoinNavigation />
      </div>
      <ProfileBlock />
    </div>
  );
};
