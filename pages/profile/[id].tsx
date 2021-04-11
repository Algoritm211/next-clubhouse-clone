import Profile from "../../components/Profile/Profile";
import React from "react";
import {useRouter} from "next/router";

const ProfilePage = () => {
  const router = useRouter()
  const {id} = router.query

  return (
    <Profile />
  );
};

export default ProfilePage;
