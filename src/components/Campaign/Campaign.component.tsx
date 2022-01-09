import React from "react";
import CampaignImage from "../../assets/Campaigns/CampaignImage.svg";

function Campaign() {
  return (
    <div>
      <img
        src={CampaignImage}
        alt="Campaign"
        className="my-[16px] mx-[3px] w-[168px]"
      ></img>
    </div>
  );
}

export default Campaign;
