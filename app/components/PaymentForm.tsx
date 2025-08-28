"use client";
import { useVoteContext } from "@/lib/context/vote context";
import clsx from "clsx";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import VidCard from "./VidCard";
import { useGetListVideos } from "@/lib/getListService";
import { videoType } from "@/lib/types/videoType";
import VotePreview from "../vote/components/VotePreview";

function PaymentForm() {
  const { isVoteOpen, setIsVoteOpen, currentVoteVideoId } = useVoteContext();
  const [method, setMethod] = useState<"paypal" | "card" | null>(null);
  useEffect(() => {
    if (!isVoteOpen) {
      setMethod(null);
    }
  }, [isVoteOpen]);

  return (
    <div
      className={clsx(
        "origin-right fixed top-0 right-0 bottom-0 text-white z-30 scale-x-0 transition-transform duration-300 ease-in-out h-100 bg-black w-1/4 border-s border-gray-text h-screen overflow-y-scroll",
        isVoteOpen && "scale-x-100"
      )}
    >
      <div
        className={clsx(
          "flex flex-row justify-between items-center border-b border-gray-text pt-12 pb-4 px-6"
        )}
      >
        <h1 className="text-[22px]">Payment</h1>
        <button onClick={() => setIsVoteOpen(false)}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.87818 7.99773L15.606 2.28325C15.8568 2.03242 15.9977 1.69222 15.9977 1.3375C15.9977 0.98277 15.8568 0.642573 15.606 0.391744C15.3552 0.140914 15.015 0 14.6602 0C14.3055 0 13.9653 0.140914 13.7145 0.391744L8 6.11954L2.28552 0.391744C2.03469 0.140914 1.6945 -2.64291e-09 1.33977 0C0.985044 2.64292e-09 0.644846 0.140914 0.394017 0.391744C0.143188 0.642573 0.00227327 0.98277 0.00227327 1.3375C0.00227327 1.69222 0.143188 2.03242 0.394017 2.28325L6.12182 7.99773L0.394017 13.7122C0.269166 13.836 0.17007 13.9834 0.102444 14.1457C0.0348177 14.308 0 14.4821 0 14.658C0 14.8338 0.0348177 15.0079 0.102444 15.1702C0.17007 15.3326 0.269166 15.4799 0.394017 15.6037C0.517848 15.7286 0.665174 15.8277 0.827496 15.8953C0.989818 15.9629 1.16392 15.9977 1.33977 15.9977C1.51562 15.9977 1.68972 15.9629 1.85204 15.8953C2.01437 15.8277 2.16169 15.7286 2.28552 15.6037L8 9.87591L13.7145 15.6037C13.8383 15.7286 13.9856 15.8277 14.148 15.8953C14.3103 15.9629 14.4844 15.9977 14.6602 15.9977C14.8361 15.9977 15.0102 15.9629 15.1725 15.8953C15.3348 15.8277 15.4822 15.7286 15.606 15.6037C15.7308 15.4799 15.8299 15.3326 15.8976 15.1702C15.9652 15.0079 16 14.8338 16 14.658C16 14.4821 15.9652 14.308 15.8976 14.1457C15.8299 13.9834 15.7308 13.836 15.606 13.7122L9.87818 7.99773Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      {!method && <InitView setMethod={setMethod} />}
      {method === "card" && (
        <CardView setMethod={setMethod} currentVideoId={currentVoteVideoId} />
      )}
    </div>
  );
}

export default PaymentForm;

const InitView = ({
  setMethod,
}: {
  setMethod: Dispatch<SetStateAction<"paypal" | "card" | null>>;
}) => {
  return (
    <div className="px-6 flex flex-col gap-y-6 items-start justify-center">
      <p className="text-[22px] font-semibold mt-6 mb-4">
        For casting vote you have to submit{" "}
        <span className="text-legendary-500 font-bold inline-block">$3</span>
      </p>
      Select a Payment Method
      {/* Paypal */}
      <button
        className="bg-white rounded-lg w-full py-4 flex justify-center"
        onClick={() => setMethod("paypal")}
      >
        <svg
          width="76"
          height="24"
          viewBox="0 0 76 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_223_14930)">
            <path
              d="M9.17762 2.1001H3.32762C2.95262 2.1001 2.57762 2.4001 2.50262 2.7751L0.177622 17.7751C0.102622 18.0751 0.327622 18.3001 0.627622 18.3001H3.40262C3.77762 18.3001 4.15262 18.0001 4.22762 17.6251L4.82762 13.5751C4.90262 13.2001 5.20262 12.9001 5.65262 12.9001H7.52762C11.3526 12.9001 13.6026 11.0251 14.2026 7.3501C14.4276 5.7751 14.2026 4.5001 13.4526 3.6001C12.6276 2.6251 11.1276 2.1001 9.17762 2.1001ZM9.85262 7.5751C9.55262 9.6751 7.90262 9.6751 6.40262 9.6751H5.50262L6.10262 5.7751C6.10262 5.5501 6.32762 5.4001 6.55262 5.4001H6.92762C7.97762 5.4001 8.95262 5.4001 9.47762 6.0001C9.85262 6.3001 10.0026 6.8251 9.85262 7.5751Z"
              fill="#003087"
            />
            <path
              d="M26.5774 7.5H23.8024C23.5774 7.5 23.3524 7.65 23.3524 7.875L23.2024 8.625L22.9774 8.325C22.3774 7.425 21.0274 7.125 19.6774 7.125C16.6024 7.125 13.9774 9.45 13.4524 12.75C13.1524 14.4 13.5274 15.975 14.5024 17.025C15.3274 18 16.6024 18.45 18.0274 18.45C20.5024 18.45 21.9274 16.875 21.9274 16.875L21.7774 17.625C21.7024 17.925 21.9274 18.225 22.2274 18.225H24.7774C25.1524 18.225 25.5274 17.925 25.6024 17.55L27.1024 7.95C27.1774 7.8 26.8774 7.5 26.5774 7.5ZM22.7524 12.9C22.4524 14.475 21.2524 15.6 19.6024 15.6C18.7774 15.6 18.1774 15.375 17.7274 14.85C17.2774 14.325 17.1274 13.65 17.2774 12.9C17.5024 11.325 18.8524 10.2 20.4274 10.2C21.2524 10.2 21.8524 10.5 22.3024 10.95C22.6774 11.475 22.8274 12.15 22.7524 12.9Z"
              fill="#003087"
            />
            <path
              d="M41.5032 7.5H38.7282C38.4282 7.5 38.2032 7.65 38.0532 7.875L34.1532 13.575L32.5032 8.1C32.4282 7.725 32.0532 7.5 31.7532 7.5H28.9782C28.6782 7.5 28.3782 7.8 28.5282 8.175L31.6032 17.25L28.6782 21.3C28.4532 21.6 28.6782 22.05 29.0532 22.05H31.8282C32.1282 22.05 32.3532 21.9 32.5032 21.675L41.8782 8.175C42.1032 7.95 41.8782 7.5 41.5032 7.5Z"
              fill="#003087"
            />
            <path
              d="M50.8026 2.1001H44.9526C44.5776 2.1001 44.2026 2.4001 44.1276 2.7751L41.8026 17.7001C41.7276 18.0001 41.9526 18.2251 42.2526 18.2251H45.2526C45.5526 18.2251 45.7776 18.0001 45.7776 17.7751L46.4526 13.5001C46.5276 13.1251 46.8276 12.8251 47.2776 12.8251H49.1526C52.9776 12.8251 55.2276 10.9501 55.8276 7.2751C56.0526 5.7001 55.8276 4.4251 55.0776 3.5251C54.1776 2.6251 52.7526 2.1001 50.8026 2.1001ZM51.4776 7.5751C51.1776 9.6751 49.5276 9.6751 48.0276 9.6751H47.1276L47.7276 5.7751C47.7276 5.5501 47.9526 5.4001 48.1776 5.4001H48.5526C49.6026 5.4001 50.5776 5.4001 51.1026 6.0001C51.4776 6.3001 51.5526 6.8251 51.4776 7.5751Z"
              fill="#009CDE"
            />
            <path
              d="M68.2024 7.5H65.4274C65.2024 7.5 64.9774 7.65 64.9774 7.875L64.8274 8.625L64.6024 8.325C64.0024 7.425 62.6524 7.125 61.3024 7.125C58.2274 7.125 55.6024 9.45 55.0774 12.75C54.7774 14.4 55.1524 15.975 56.1274 17.025C56.9524 18 58.2274 18.45 59.6524 18.45C62.1274 18.45 63.5524 16.875 63.5524 16.875L63.4024 17.625C63.3274 17.925 63.5524 18.225 63.8524 18.225H66.4024C66.7774 18.225 67.1524 17.925 67.2274 17.55L68.7274 7.95C68.7274 7.8 68.5024 7.5 68.2024 7.5ZM64.3024 12.9C64.0024 14.475 62.8024 15.6 61.1524 15.6C60.3274 15.6 59.7274 15.375 59.2774 14.85C58.8274 14.325 58.6774 13.65 58.8274 12.9C59.0524 11.325 60.4024 10.2 61.9774 10.2C62.8024 10.2 63.4024 10.5 63.8524 10.95C64.3024 11.475 64.4524 12.15 64.3024 12.9Z"
              fill="#009CDE"
            />
            <path
              d="M71.5024 2.4751L69.1024 17.7001C69.0274 18.0001 69.2524 18.2251 69.5524 18.2251H71.9524C72.3274 18.2251 72.7024 17.9251 72.7774 17.5501L75.1774 2.6251C75.2524 2.3251 75.0274 2.1001 74.7274 2.1001H72.0274C71.7274 2.1001 71.5774 2.2501 71.5024 2.4751Z"
              fill="#009CDE"
            />
          </g>
          <defs>
            <clipPath id="clip0_223_14930">
              <rect width="75.75" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      {/* Debit card */}
      <button
        className="bg-white rounded-lg w-full py-4 flex flex-row justify-center gap-x-2"
        onClick={() => setMethod("card")}
      >
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
          >
            <rect width="24" height="24" fill="url(#pattern0_223_14949)" />
            <defs>
              <pattern
                id="pattern0_223_14949"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_223_14949"
                  transform="scale(0.0078125)"
                />
              </pattern>
              <image
                id="image0_223_14949"
                width="128"
                height="128"
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </span>
        <p className="text-[#333333] text-[20px] font-semibold">
          Debit or Credit Card
        </p>
      </button>
    </div>
  );
};

const PaymentInputs = [
  { lable: "Name on card", placeHolder: "Name on card", name: "name" },
  { lable: "Email address", placeHolder: "example@mail.com", name: "email" },
  { lable: "Card number", placeHolder: "Card number", name: "number" },
  { lable: "Expiry date", placeHolder: "MM/YY", name: "expiry" },
  { lable: "CVC/CVV", placeHolder: "CVC/CVV", name: "cvc" },
];
const CardView = ({
  setMethod,
  currentVideoId,
}: {
  setMethod: Dispatch<SetStateAction<"paypal" | "card" | null>>;
  currentVideoId?: number;
}) => {
  const { data: videos } = useGetListVideos();
  const video = videos?.find((video: videoType) => video.id === currentVideoId);
  const { setIsChangeVoteOpen } = useVoteContext();

  return (
    <div className="flex flex-col items-start justify-center px-6 mt-6">
      <div className="flex flex-row justify-start items-center gap-x-4">
        <button onClick={() => setMethod(null)}>
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6.00003H3.14L6.77 1.64003C6.93974 1.43581 7.0214 1.17253 6.99702 0.908108C6.97264 0.643682 6.84422 0.39977 6.64 0.230032C6.43578 0.060293 6.1725 -0.0213689 5.90808 0.0030108C5.64365 0.0273905 5.39974 0.155815 5.23 0.360032L0.23 6.36003C0.196361 6.40776 0.166279 6.45789 0.14 6.51003C0.14 6.56003 0.14 6.59003 0.0700002 6.64003C0.0246737 6.75469 0.000941121 6.87674 0 7.00003C0.000941121 7.12332 0.0246737 7.24537 0.0700002 7.36003C0.0700002 7.41003 0.0699999 7.44003 0.14 7.49003C0.166279 7.54217 0.196361 7.59231 0.23 7.64003L5.23 13.64C5.32402 13.7529 5.44176 13.8437 5.57485 13.9059C5.70793 13.9681 5.85309 14.0003 6 14C6.23365 14.0005 6.46009 13.9191 6.64 13.77C6.74126 13.6861 6.82496 13.583 6.88631 13.4666C6.94766 13.3503 6.98546 13.223 6.99754 13.092C7.00961 12.961 6.99573 12.829 6.95669 12.7034C6.91764 12.5777 6.8542 12.4611 6.77 12.36L3.14 8.00003H15C15.2652 8.00003 15.5196 7.89467 15.7071 7.70714C15.8946 7.5196 16 7.26525 16 7.00003C16 6.73482 15.8946 6.48046 15.7071 6.29292C15.5196 6.10539 15.2652 6.00003 15 6.00003Z"
              fill="white"
            />
          </svg>
        </button>
        <p className="text-[24px] font-semibold">Debit Card</p>
      </div>
      <form className="flex flex-col gap-y-6 mt-6 w-full" action="">
        {PaymentInputs.map((input, index) => (
          <div
            key={`${input.name} - ${index}`}
            className="flex flex-col items-start gap-y-2"
          >
            <label className="text-white text-[20px]" htmlFor={input.name}>
              {input.lable}
            </label>
            <input
              className="bg-transparent border border-white rounded-sm text-gray-text px-2 py-4 focus:text-white focus:border-legendary-500 outline-none stroke-none w-full"
              name={input.name}
              type="text"
              placeholder={input.placeHolder}
            />
          </div>
        ))}
        <div className="w-full">
          <div className="flex flex-row justify-between items-center ">
            <p className="text-gray-text text-[16px]">you are voting for</p>
            <button
              type="button"
              className="text-legendary-500 text-[16px]"
              onClick={() => setIsChangeVoteOpen(true)}
            >
              change
            </button>
          </div>
          <div className="bg-gray-bg p-4 mt-4 rounded-md w-full">
            <VotePreview video={video} />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-white rounded-md py-4 text-center text-[#333333] text-[20px] font-semibold"
        >
          Confirm Payment and Vote
        </button>
      </form>
    </div>
  );
};
