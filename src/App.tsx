import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import WhiteCard from "./components/WhiteCard";

import { IoFlashOutline } from "react-icons/io5";

import { BiBrain } from "react-icons/bi";

import { BsChat } from "react-icons/bs";

import { AiOutlineEye } from "react-icons/ai";

function App() {
  return (
    <div className=" App bg-[#ECF2FF]">
      <div className=" flex h-screen w-full flex-col justify-center text-center">
        <div className=" mx-auto flex h-[47%] w-[49%] rounded-[32px] bg-white text-center drop-shadow-[0_30px_30px_rgba(61,108,236,0.15)]">
          <div className=" w-[50%] rounded-[32px] bg-gradient-to-b  from-[#7755FF] to-[#2F2CE9]">
            <div className=" flex h-full flex-col items-center pt-[34px] pb-[36px] text-white">
              <div className="pb-[35px] text-2xl font-bold  text-[#CAC9FF]">
                Your Result
              </div>
              <div className=" flex h-[200px] w-[200px]  flex-col rounded-full bg-gradient-to-b from-[#4D21C9]  to-[#2521C9] pt-[55px]">
                <div className="  text-7xl font-extrabold text-white  ">76</div>
                <div className="text-base font-bold text-[#CAC9FF]">of 100</div>
              </div>
              <div className="pt-[32px] pb-[14px] text-2xl font-bold">
                Great
              </div>
              <div className="px-[54px] text-lg text-[#CAC9FF]">
                Your performance exceed 65% of the people conducting the test
                here!
              </div>
            </div>
          </div>
          <div className=" w-[50%]">
            <div className="flex flex-col px-[40px] pt-[38px]">
              <div className=" mb-[28px] text-start text-2xl font-bold text-[#303B59]">
                Summary
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className=" flex h-[56px] w-full items-center  justify-between rounded-[12px] bg-[#FFF6F6] px-[16px] py-[18px] text-[#FF5555]">
                  <div className=" flex gap-[12px] text-base">
                    <IoFlashOutline size={20} />
                    <div>Reaction</div>
                  </div>
                  <div className=" text-lg font-bold text-black-rgba">
                    <span className="text-[#303B59]">80</span>{" "}
                    <span className="text-black-rgba">/ 100</span>
                  </div>
                </div>
                <div className=" flex h-[56px] w-full items-center  justify-between rounded-[12px] bg-[#FFFBF4] px-[16px] py-[18px] text-[#FFB21E]">
                  <div className=" flex gap-[12px] text-base">
                    <BiBrain size={20} />
                    <div>Memory </div>
                  </div>
                  <div className=" text-lg font-bold text-black-rgba">
                    <span className="text-[#303B59]">92</span>{" "}
                    <span className="text-black-rgba">/ 100</span>
                  </div>
                </div>
                <div className=" flex h-[56px] w-full items-center  justify-between rounded-[12px] bg-[#F2FCF9] px-[16px] py-[18px] text-[#00BB8F]">
                  <div className=" flex gap-[12px] text-base">
                    <BsChat size={20} />
                    <div>Verbal</div>
                  </div>
                  <div className=" text-lg font-bold text-black-rgba">
                    <span className="text-[#303B59]">61</span>{" "}
                    <span className="text-black-rgba">/ 100</span>
                  </div>
                </div>
                <div className=" flex h-[56px] w-full items-center  justify-between rounded-[12px] bg-[#F3F4FD] px-[16px] py-[18px] text-[#1125D6]">
                  <div className=" flex gap-[12px] text-base">
                    <AiOutlineEye size={20} />
                    <div>Visual </div>
                  </div>
                  <div className=" text-lg font-bold text-black-rgba">
                    <span className="text-[#303B59]">73</span>{" "}
                    <span className="text-black-rgba">/ 100</span>
                  </div>
                </div>
              </div>
              <button className=" mt-[41px]  flex h-[56px] w-full items-center justify-center rounded-[128px] bg-[#303B59] from-[#7755FF] to-[#2F2CE9] text-base font-bold text-white hover:bg-gradient-to-b">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
