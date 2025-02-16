import React from "react";
import ProfilePic from "../assets/profile.jpg";
const Profile = () => {
  return (
    <div className="min-h-screen pt-30 px-20 flex justify-center items-center">
      <div className="w-screen max-w-[500px] py-12 flex flex-col gap-10 justify-center items-center bg-white rounded-3xl shadow-2xl shadow-white md:space-x-8 md:flex-row md:px-12 md:py-20">
        <img
          src={ProfilePic}
          alt=""
          className="w-1/3 min-w-[120px] max-h-[250px] m-0 rounded-3xl shadow-xl"
        />
        <div className="flex flex-col gap-4 px-2 text-neutral-800 text-md font-medium md:gap-8 md:text-lg ">
          <h1>Username : {`Pepo`}</h1>
          <h1>Email : {`Pepo@gmail.com`}</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
