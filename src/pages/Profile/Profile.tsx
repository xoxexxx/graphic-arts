import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DropMenu } from "../../components/drop-menu/drop-menu";
import { JoinNavigation } from "../../components/Menu/JoinNavigation";
import { ProfileBlock } from "../../features/Profile/ProfileBlock";

import './Profile.less'

export const Profile: React.FC = () => {

  const isProfile = useSelector((state: boolean | any) => state.profileReducer.isProfile)
  const drop_ = useSelector((state: boolean | any) => state.dropReducer.drop_)
  const dispatch = useDispatch()
  
  const dropHandler = () => {
    dispatch({type: "DROP_", payload: !drop_})
}


  return (
    <div className="profile">
      <DropMenu onClick={dropHandler} />
      <div className="profile__media-mob">
      <JoinNavigation />
      </div>
      <ProfileBlock />
    </div>
  );
};
