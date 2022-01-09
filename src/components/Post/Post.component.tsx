import React from "react";
import CampaignImage from "../../assets/Campaigns/CampaignImage.svg";
import PublishedByIcon from "../../assets/Post/PublishedByIcon.svg";
import ReviewedByIcon from "../../assets/Post/ReviewedByIcon.svg";
import PostedByIcon from "../../assets/Post/PostedByIcon.svg";

function Campaign() {
  return (
    <div className="Campaign bg-white p-[24px] m-[12px] flex flex-col w-[310px]">
      <img
        src={CampaignImage}
        alt="Campaign"
        className="my-[16px] mx-[3px] w-[252px]"
      />
      <div className="post-caption font-normal text-xs mb-[18px]">
        Dignissimos, maiores! Assumenda, expedita in? Quia alias porro saepe
        praesentium voluptatem ..... Read More
      </div>
      <div className="flex mb-[16px] items-center font-normal text-xs">
        <img src={PublishedByIcon} alt="Published By" />
        <div className="ml-1">Published By Vibhuti</div>
      </div>
      <div className="flex mb-[16px] items-center font-normal text-xs">
        <img src={ReviewedByIcon} alt="Published By" />
        <div className="ml-1">To be reviewed by Prx and Kartik</div>
      </div>
      <div className="flex mb-[16px] items-center font-normal text-xs">
        <img src={PostedByIcon} alt="Published By" />
        <div className="ml-1">To be posted on 9/1/22</div>
      </div>
      <div className="text-right">
        <button className="bg-[#C27FA8] hover:bg-[#FFA4DC] py-2 px-4 text-white rounded-md w-[120px] justify-center">
          Comment
        </button>
      </div>
    </div>
  );
}

export default Campaign;
