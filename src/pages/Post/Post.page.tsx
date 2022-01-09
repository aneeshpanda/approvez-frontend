import React from "react";
import PlusIcon from "../../assets/PlusIcon.svg";
import BackIcon from "../../assets/BackIcon.svg";
import CampaignImage from "../../assets/Campaigns/CampaignImage.svg";
import PublishedByIcon from "../../assets/Post/PublishedByIcon.svg";
import ReviewedByIcon from "../../assets/Post/ReviewedByIcon.svg";
import PostedByIcon from "../../assets/Post/PostedByIcon.svg";
import Approved from "../../assets/Post/Approved.svg";
import Retry from "../../assets/Post/Retry.svg";
import "./Post.styles.css";
function Post() {
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
          <div className="Campaign bg-white p-[24px] m-[12px] flex flex-col w-[310px]">
            <img
              src={CampaignImage}
              alt="Campaign"
              className="my-[16px] mx-[3px] w-[252px]"
            />
            <div className="post-caption font-normal text-xs mb-[18px]">
              Dignissimos, maiores! Assumenda, expedita in? Quia alias porro
              saepe praesentium voluptatem ..... Read More
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
            <div className="text-center text-[#C887A9] font-bold text-[24px]">
              Comment
            </div>
            <div className="flex flex-col rounded-md border-[#008205] border-2 text-left p-2 mt-[24px] comment">
              <div className="comment-text">
                <div className="relative bottom-[24px] comment-inner">
                  <div className="justify-end relative left-[18px] flex">
                    <img className="approved-image" src={Approved} alt="" />
                  </div>
                  <div className="name font-bold text-xs">Vibhuti Arora</div>
                  <div className="text text-xs">LGTM!</div>
                </div>
                <div className="time text-right text-xs text-[#9A9A9A]">
                  09:56 AM
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-md border-[#D00000] border-2 text-left p-2 mt-[24px] comment">
              <div className="comment-text">
                <div className="relative bottom-[24px] comment-inner">
                  <div className="justify-end relative left-[18px] flex">
                    <img className="approved-image" src={Retry} alt="" />
                  </div>
                  <div className="name font-bold text-xs">Vibhuti Arora</div>
                  <div className="text text-xs">LGTM!</div>
                </div>
                <div className="time text-right text-xs text-[#9A9A9A]">
                  09:56 AM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
