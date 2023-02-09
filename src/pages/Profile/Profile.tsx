import React from "react";
import { useSelector } from "react-redux";
import { JoinNavigation } from "../../components/Menu/JoinNavigation";
import { ProfileBlock } from "../../features/Profile/ProfileBlock";

import './Profile.less'

export const Profile = () => {
  return (
    <div className="profile">
      <JoinNavigation />
      <ProfileBlock />
    </div>
  );
};
