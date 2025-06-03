import {Geist, Inter} from "next/font/google";
import React from "react";
import Typography from "../components/Typography/index";

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
      <main className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start">
        <div className="bg-[#0062ff15] p-[12px] rounded-[12px] w-[772px]">
          <div className="flex justify-between">
            <div className="flex gap-[4px] items-center pb-[4px]">
              <Typography label="Vanilla AI" variant="medium3" color="#1e1f24"/>
              <Typography label="Suggested" variant="medium2" color="#8b8d98"/>
            </div>
            <button className="font-inter font-medium text-xs leading-[16px] text-[#000107E1] flex items-center gap-1 hover:text-gray-600">
              <img
                src={"/assets/icons/loop.svg"}
                alt="loop"
              />
              Regenerate
            </button>
          </div>
          <Typography
            label="Oh no! Sad to
              hear that, but of
              course we can give a refund. Can you please provide your order number if you have one? Or email that you’ve
              used to make this purchase."
            variant="regular3"
            color="#1e1f24"
          />
          <button className="font-inter font-medium text-sm leading-[20px] text-[#000107E1] underline pt-[8px] hover:text-gray-600">
            Reply with this message
          </button>
        </div>
        <div
          className="border border-gray-100 transition-all px-4 py-2 items-center gap-2 bg-white shadow-md rounded-[12px] w-[772px]">
          <input
            type="text"
            placeholder="Typing"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="font-inter font-normal text-sm leading-[20px] text-[#000107e1] outline-none placeholder-neutral-500/200 bg-transparent py-[12px]"
          />

          <div className="flex justify-between pt-[6px] items-center">
            <div className="flex items-center gap-[17px] text-gray-600 relative">
              <img
                src={"/assets/icons/note-1.svg"}
                alt="note"
              />
              <img
                src={"/assets/icons/diamond.svg"}
                alt="diamond"
              />
              <img
                src={"/assets/icons/clip.svg"}
                alt="clip"
              />
              <img
                src={"/assets/icons/emoji.svg"}
                alt="emoji"
              /> <img
              src={"/assets/icons/at.svg"}
              alt="mention"
            />
              <img
                src={"/assets/icons/write.svg"}
                alt="write"
              />
              <div className
                     ="flex  items-center gap-1 pl-[12px] border-l border-gray-300 ml-2 text-xs text-gray-700 whitespace-nowrap">
                <img
                  src={"/assets/icons/sparkle.svg"}
                  alt="sparkle"
                  className="pr-[4px]"
                />
                <p className="font-inter font-medium text-xs leading-[16px] text-[#000107E1] hover:text-gray-600 cursor-default">Quick reply with AI</p>
              </div>
            </div>
            <button className="ml-2 hover:bg-gray-200 hover:rounded-[8px] transition-all duration-300">
              <img
                src="/assets/icons/send.svg"
                alt="send"
              />
            </button>

          </div>
        </div>
      </main>
    </div>
  );
}
