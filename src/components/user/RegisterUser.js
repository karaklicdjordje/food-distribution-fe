import React, { useState } from "react";
import { REGISTRATION_TYPE } from "../../const/const";
import UserForm from "../registration/UserForm";
import RestaurantForm from "../registration/RestaurantForm";
import CompanyForm from "../registration/CompanyForm";

const RegisterUser = () => {
  const [currentType, setCurrentType] = useState(REGISTRATION_TYPE.USER);

  const handleTypeofRegistration = (event) => {
    const type = event.target.value;
    setCurrentType(type[0] + type.slice(1, type.length).toLowerCase());
  };
  
  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Registration logo"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form>
              <div className="flex flex-row items-center justify-center lg:justify-start mb-5">
                <p className="text-center font-semibold mx-4 mb-0">
                  Type of registration:
                </p>

                <select
                  className="cursor-pointer w-1/2 form-select appearance-none block px-3 text-lg bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300 rounded ease-out"
                  onChange={(e) => handleTypeofRegistration(e)}
                >
                  <option default disabled value="null">
                    Choose type
                  </option>
                  {Object.keys(REGISTRATION_TYPE).map((type, index) => (
                    <option key={index} value={type}>
                      {REGISTRATION_TYPE[type]}
                    </option>
                  ))}
                </select>
              </div>

              {currentType === REGISTRATION_TYPE.USER && <UserForm />}
              {currentType === REGISTRATION_TYPE.RESTAURANT && (
                <RestaurantForm />
              )}
              {currentType === REGISTRATION_TYPE.COMPANY && <CompanyForm />}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterUser;
