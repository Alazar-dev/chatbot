import {Geist, Inter} from "next/font/google";
import {ImLoop2} from "react-icons/im";
import {RiSendPlaneFill} from "react-icons/ri";
import {PiSparkleFill} from "react-icons/pi";
import {CiFaceSmile} from "react-icons/ci";
import {TfiClip} from "react-icons/tfi";
import {FiAtSign} from "react-icons/fi";
import {FaNoteSticky} from "react-icons/fa6";
import React from "react";
import {LuSquareSlash} from "react-icons/lu";

const geistSans = Geist({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  const [message, setMessage] = React.useState("")
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[14px] row-start-2 items-center sm:items-start">
        <div className="bg-[#0062ff15] p-[12px] rounded-[12px] w-[772px]">
          <div className="flex justify-between">
            <div className="flex gap-[4px] items-center">
              <p className="font-inter font-medium text-sm leading-[20px] text-[#1e1f24]">Vanilla AI</p>
              <p className="font-inter font-medium text-sm leading-[20px] text-neutral-500">Suggested</p>
            </div>
            <div className="flex items-center gap-1">
              <ImLoop2 color="#0002119D" size={12} />
              <p className="font-inter font-medium text-xs leading-[16px] text-[#000107E1]">Regenerate</p>
            </div>
          </div>
          <p className="font-inter font-normal text-sm leading-[20px] text-[#1e1f24] pt-[px] pb-[8px]">Oh no! Sad to
            hear that, but of
            course we can give a refund. Can you please provide your order number if you have one? Or email that you’ve
            used to make this purchase.</p>
          <button className="font-inter font-medium text-sm leading-[20px] text-[#000107] underline">
            Reply with this message
          </button>
        </div>
        <div
          className="border border-gray-100 focus-within:ring-2 focus-within:ring-yellow-300 transition-all px-4 py-2 items-center gap-2 bg-white shadow-sm rounded-[12px] w-[772px]">
          <input
            type="text"
            placeholder="Typing"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 outline-none text-sm placeholder-gray-500 text-gray-500 bg-transparent py-[12px]"
          />

          <div className="flex justify-between pt-[6px]">
            <div className="flex items-center gap-[6px] text-gray-600">
              <FaNoteSticky color="#0002119D" size={14}/>
              <PiSparkleFill color="#0002119D" size={14}/>
              <TfiClip color="#0002119D" size={14}/>
              <CiFaceSmile color="#0002119D" size={14}/>
              <FiAtSign color="#0002119D" size={14}/>
              <LuSquareSlash color="#0002119D" size={14}/>
              <div className
                     ="flex  items-center gap-1 pl-2 border-l border-gray-300 ml-2 text-xs text-gray-700 whitespace-nowrap">
                <PiSparkleFill color="#0002119D" size={14}/>
                Quick reply with AI
              </div>
            </div>
            <button className="ml-2 bg-gray-100 p-1.5 rounded-md hover:bg-gray-200">
              <RiSendPlaneFill className="w-4 h-4 text-gray-700"/>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
