import React from "react";

import { ReactComponent as Check } from '../../../assets/check-svg.svg';

const Subscription = () => {
  return (
    <div
      className="flex min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0" />
      <div className="w-full max-w-xl p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white ">
        <h2 className="text-3xl text-green-500 text-center">
          Successfull subscription!
        </h2>
        {/*content*/}
        <div>
          {/*body*/}
          <div className="text-center p-5 flex-auto justify-center">
            <Check className="w-16 h-16 flex items-center text-teal-500 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
