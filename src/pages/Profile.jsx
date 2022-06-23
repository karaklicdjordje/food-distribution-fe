import React from "react";
import jwt from "jwt-decode";
import { ROLES } from "../const/const";

import PersonProfile from "../components/profile/PersonProfile";
import RestaurantProfile from "../components/profile/RestaurantProfile";
import CompanyProfile from "../components/profile/CompanyProfile";
import CharityProfile from "../components/profile/CharityProfile";
import AdminProfile from "../components/profile/AdminProfile";

//TODO: link with backend when all user informations are available...
const Profile = () => {
  // decode token to get role
  const user = jwt(localStorage.getItem("token"));

  return (
    <section>
      <div className="w-full">
        <div className="h-10"></div>
        {user.roles === ROLES.ROLE_PERSON && <PersonProfile />}
        {user.roles === ROLES.ROLE_RESTAURANT && <RestaurantProfile />}
        {user.roles === ROLES.ROLE_CORPORATE && <CompanyProfile />}
        {user.roles === ROLES.ROLE_CHARITY && <CharityProfile />}
        {user.roles === ROLES.ROLE_ADMIN && <AdminProfile />}
      </div>
    </section>
  );
};

export default Profile;
