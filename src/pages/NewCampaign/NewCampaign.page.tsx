import React from "react";
import BackIcon from "../../assets/BackIcon.svg";
import UploadImageIcon from "../../assets/Campaigns/UploadImageIcon.svg";

function NewCampaign() {
  return (
    <div className="Campaigns">
      <div className="Campaigns-Header flex justify-center mt-[40px]">
        <img src={BackIcon} className="absolute left-[12px]" alt="Back Icon" />
        <h1 className="text-3xl text-center font-['Montserrat'] text-[36px] font-semibold text-[#776969]">
          CAMPAIGNS
        </h1>
      </div>
      <div className="Login-container p-6 bg-[#c4c4c4]/[0.5] h-[100%] rounded-xl text-center shadow-[0_10px_4px_0px_rgba(0,0,0,0.25)] mt-[60px] mx-[6%] mb-[24px]">
        <div className="flex flex-row flex-col justify-center px-[3px]">
          <div className="font-semibold text-xl mt-[12px]">
            <div className="add-image-container text-left">Add Image</div>
            <div className="image-upload flex justify-center">
              <label htmlFor="uploadImage">
                <img
                  src={UploadImageIcon}
                  className="cursor-pointer text-center"
                  alt="Upload"
                />
              </label>

              <input
                type="file"
                aria-label="Image Upload"
                className="hidden"
                name="uploadImage"
                id="uploadImage"
                accept=".jpg, .jpeg, .png"
              />
            </div>
          </div>
          <div className="add-caption text-left font-semibold text-xl mt-[12px]">
            <label htmlFor="caption">Add Caption</label>
            <br />
            <input
              aria-label="caption"
              className="border-0 rounded-xl focus-visible:outline-0 p-[15px] w-11/12 bg-[#c4c4c4]/[0.8] placeholder:text-gray-600"
              type="text"
              name="caption"
              id="caption"
              placeholder="Enter your caption"
            />
          </div>
          <div className="social-media-platform text-left font-semibold text-xl mt-[12px]">
            <label htmlFor="">Social Media Platform</label>
            <fieldset
              id="social-media-platforms"
              className="flex flex-wrap flex-row"
            >
              <div className="flex">
                <div>
                  <div className="font-semibold text-lg">
                    <input
                      aria-label="social-media-platform"
                      type="radio"
                      name="social-media-platform"
                      value="facebook"
                      id=""
                    />
                    <label className="p-2">Facebook</label>
                  </div>
                  <div className="font-semibold text-lg">
                    <input
                      aria-label="social-media-platform"
                      type="radio"
                      name="social-media-platform"
                      value="instagram"
                      id=""
                    />
                    <label className="p-2">Instagram</label>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <div className="font-semibold text-lg">
                    <input
                      aria-label="social-media-platform"
                      type="radio"
                      name="social-media-platform"
                      value="linkedin"
                      id=""
                    />
                    <label className="p-2">Linkedin</label>
                  </div>
                  <div className="font-semibold text-lg">
                    <input
                      aria-label="social-media-platform"
                      type="radio"
                      name="social-media-platform"
                      value="twitter"
                      id=""
                    />
                    <label className="p-2">Twitter</label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="deadline text-left font-semibold text-xl mt-[12px]">
            <label>Deadline</label>
            <br />
            <input
              className="border-0 rounded-xl focus-visible:outline-0 p-[15px] w-11/12 bg-[#c4c4c4]/[0.8] placeholder:text-gray-600"
              aria-label="date"
              type="date"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="text-center">
          <button className="bg-[#C27FA8] hover:bg-[#FFA4DC] py-2 px-4 mt-6 rounded-md w-[157px] justify-center">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewCampaign;
