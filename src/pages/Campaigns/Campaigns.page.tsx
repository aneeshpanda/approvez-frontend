import React from "react";
import PlusIcon from "../../assets/PlusIcon.svg";
import SearchIcon from "../../assets/SearchIcon.svg";
import Campaign from "../../components/Campaign/Campaign.component";

function Campaigns() {
  return (
    <div className="Campaigns">
      <div className="Campaigns-Header flex justify-center mt-[40px]">
        <h1 className="text-3xl text-center font-['Montserrat'] text-[36px] font-semibold text-[#776969]">
          CAMPAIGNS
        </h1>
        <img src={PlusIcon} className="absolute right-[12px]" alt="Plus Icon" />
      </div>
      <div className="Login-container bg-[#c4c4c4]/[0.5] h-[100%] rounded-xl text-center shadow-[0_10px_4px_0px_rgba(0,0,0,0.25)] mt-[60px] mx-[6%] mb-[24px]">
        <div className="flex justify-center">
          <div className="flex flex-wrap items-stretch w-11/12 text-center mt-[31px] mb-[21px] relative h-15 bg-white items-center rounded-md mb-6 pr-[14[x]]">
            <input
              aria-label="search"
              type="text"
              className="flex-shrink flex-grow flex-auto rounded-md leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
            />
            <div className="flex -mr-px justify-center w-15 p-4">
              <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                <img src={SearchIcon} alt="Search Icon" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center px-[3px]">
          <Campaign />
          <Campaign />
          <Campaign />
          <Campaign />
          <Campaign />
          <Campaign />
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
