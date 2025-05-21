import React from "react";
import MciContainer from "../components/MciContainer";
import { SocialIcon } from "react-social-icons";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <MciContainer className="py-[120px] bg-cover bg-center bg-no-repeat bg-[url('/how-it-works.png')] relative z-0">
      <div className="bg-black/80 inset-0 absolute -z-10" />
      <div className="flex flex-col gap-y-8 md:gap-y-0 md:flex-row xl:px-28 md:gap-x-8 items-start ">
        {/* left col */}
        <div className="flex flex-col w-full md:w-1/2 text-white gap-y-5">
          <h1 className="font-bold text-[42px]">
            Get in <span className="text-legendary-500">Touch</span>
          </h1>
          <p>We Are Here For You 24/7 Hours Support..</p>
          <div className="flex flex-row justify-start items-center gap-x-4">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="#252525" />
              <path
                d="M34 20.608V28.75C34.0001 29.5801 33.6824 30.3788 33.1123 30.9822C32.5422 31.5856 31.7628 31.948 30.934 31.995L30.75 32H17.25C16.4199 32.0001 15.6212 31.6824 15.0178 31.1123C14.4144 30.5422 14.052 29.7628 14.005 28.934L14 28.75V20.608L23.652 25.664C23.7594 25.7202 23.8788 25.7496 24 25.7496C24.1212 25.7496 24.2406 25.7202 24.348 25.664L34 20.608ZM17.25 16H30.75C31.5556 15.9999 32.3325 16.299 32.93 16.8393C33.5276 17.3795 33.9032 18.1225 33.984 18.924L24 24.154L14.016 18.924C14.0935 18.1543 14.443 17.4375 15.0017 16.9025C15.5605 16.3674 16.2917 16.0492 17.064 16.005L17.25 16H30.75H17.25Z"
                fill="white"
              />
            </svg>
            <p>Support@mackie.com</p>
          </div>
          <div className="flex flex-row justify-start items-center gap-x-4">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="#252525" />
              <path
                d="M32.0002 22.999H34.0002C34.0002 17.869 30.1272 14 24.9902 14V16C29.0522 16 32.0002 18.943 32.0002 22.999Z"
                fill="white"
              />
              <path
                d="M25.0003 20.0002C27.1033 20.0002 28.0003 20.8972 28.0003 23.0002H30.0003C30.0003 19.7752 28.2253 18.0002 25.0003 18.0002V20.0002ZM28.4223 25.4432C28.2301 25.2686 27.9776 25.1754 27.7181 25.1835C27.4585 25.1915 27.2123 25.3001 27.0313 25.4862L24.6383 27.9472C24.0623 27.8372 22.9043 27.4762 21.7123 26.2872C20.5203 25.0942 20.1593 23.9332 20.0523 23.3612L22.5113 20.9672C22.6977 20.7864 22.8064 20.5401 22.8144 20.2804C22.8225 20.0208 22.7292 19.7683 22.5543 19.5762L18.8593 15.5132C18.6843 15.3206 18.4412 15.2037 18.1814 15.1875C17.9217 15.1713 17.6659 15.2569 17.4683 15.4262L15.2983 17.2872C15.1254 17.4608 15.0222 17.6917 15.0083 17.9362C14.9933 18.1862 14.7073 24.1082 19.2993 28.7022C23.3053 32.7072 28.3233 33.0002 29.7053 33.0002C29.9073 33.0002 30.0313 32.9942 30.0643 32.9922C30.3088 32.9786 30.5396 32.8749 30.7123 32.7012L32.5723 30.5302C32.7417 30.3328 32.8276 30.077 32.8115 29.8173C32.7954 29.5576 32.6788 29.3143 32.4863 29.1392L28.4223 25.4432Z"
                fill="white"
              />
            </svg>
            <p>+971-50-xxxxxx</p>
          </div>
          <div className="flex flex-row items-center justify-start gap-x-4">
            <SocialIcon
              url="https://www.instagram.com"
              bgColor="#252525"
              fgColor="white"
            />
            <SocialIcon
              url="https://www.facebook.com"
              bgColor="#252525"
              fgColor="white"
            />
            <SocialIcon
              url="https://www.tiktok.com"
              bgColor="#252525"
              fgColor="white"
            />
            <SocialIcon
              url="https://www.linkedin.com"
              bgColor="#252525"
              fgColor="white"
            />
            <SocialIcon
              url="https://www.x.com"
              bgColor="#252525"
              fgColor="white"
            />
          </div>
        </div>
        {/* right col */}
        <div className="bg-gray-bg text-white w-full md:w-1/2 px-4 md:px-8 xl:px-16 py-8 md:py-12 lg:py-20 rounded-lg">
          <form className="flex flex-col justify-between gap-y-8">
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="name">
                Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                className="outline-none border border-white rounded-md px-3 py-1 bg-transparent text-[#838383] hover:border-legendary-500 hover:text-white focus:border-legendary-500 focus:text-white w-full"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="email">
                Email Address<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email Address"
                className="outline-none border border-white rounded-md px-3 py-1 bg-transparent text-[#838383] hover:border-legendary-500 hover:text-white focus:border-legendary-500 focus:text-white"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="message">
                Message<span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                placeholder="Your Message..."
                className="outline-none border border-white rounded-md px-3 py-1 bg-transparent text-[#838383] hover:border-legendary-500 hover:text-white focus:border-legendary-500 focus:text-white"
                rows={8}
              />
            </div>
            <Button
              type="submit"
              variant="default"
              className="bg-legendary-500 rounded-lg py-6"
              size="lg"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </MciContainer>
  );
}

export default page;
