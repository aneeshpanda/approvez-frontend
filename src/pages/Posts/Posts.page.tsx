import React from "react";
import PlusIcon from "../../assets/PlusIcon.svg";
import BackIcon from "../../assets/BackIcon.svg";
import Post from "../../components/Post/Post.component";

function Posts() {
  return (
    <div className="Campaigns">
      <div className="Campaigns-Header flex justify-center mt-[40px]">
        <img src={BackIcon} className="absolute left-[12px]" alt="Back Icon" />
        <h1 className="text-3xl text-center font-['Montserrat'] text-[36px] font-semibold text-[#776969]">
          CAMPAIGNS
        </h1>
        <img src={PlusIcon} className="absolute right-[12px]" alt="Plus Icon" />
      </div>
      <div className="Login-container bg-[#c4c4c4]/[0.5] h-[100%] rounded-xl text-center shadow-[0_10px_4px_0px_rgba(0,0,0,0.25)] mt-[60px] mx-[6%] mb-[24px]">
        <div className="flex flex-row flex-wrap justify-center px-[3px]">
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}

export default Posts;
