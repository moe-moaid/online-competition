import React from "react";
import MciContainer from "../components/MciContainer";
import MciInput from "../components/MciInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function page() {
  return (
    <div className="py-[120px] flex flex-col justify-center items-center">
      <form
        action=""
        className="flex flex-col items-center w-full px-4 md:w-2/3 lg-1/2 justify-center py-12 bg-gray-bg rounded-lg gap-y-8 md:gap-y-12"
      >
        <h1 className="text-white font-semibold text-[48px]">
          Sign <span className="text-legendary-500">up</span>
        </h1>
        <div className="flex flex-row justify-start items-center w-full gap-x-6">
          <div className="relative bg-lightGray-bg w-[80px] h-[80px] rounded-full">
            <svg
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 8.125H22.75L21.7375 5.2875C21.6675 5.09334 21.5394 4.92551 21.3704 4.80693C21.2015 4.68835 21.0001 4.62482 20.7938 4.625H11.2063C10.7844 4.625 10.4062 4.89063 10.2656 5.2875L9.25 8.125H5C3.61875 8.125 2.5 9.24375 2.5 10.625V24.875C2.5 26.2562 3.61875 27.375 5 27.375H27C28.3813 27.375 29.5 26.2562 29.5 24.875V10.625C29.5 9.24375 28.3813 8.125 27 8.125ZM16 22.375C13.2375 22.375 11 20.1375 11 17.375C11 14.6125 13.2375 12.375 16 12.375C18.7625 12.375 21 14.6125 21 17.375C21 20.1375 18.7625 22.375 16 22.375ZM13 17.375C13 18.1706 13.3161 18.9337 13.8787 19.4963C14.4413 20.0589 15.2044 20.375 16 20.375C16.7956 20.375 17.5587 20.0589 18.1213 19.4963C18.6839 18.9337 19 18.1706 19 17.375C19 16.5793 18.6839 15.8163 18.1213 15.2537C17.5587 14.6911 16.7956 14.375 16 14.375C15.2044 14.375 14.4413 14.6911 13.8787 15.2537C13.3161 15.8163 13 16.5793 13 17.375Z"
                fill="white"
              />
            </svg>
          </div>
            <p className="text-white">Upload Profile Picture</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-x-8 gap-y-8 sm:gap-y-0">
          <MciInput
            name="name"
            label="Full Name"
            placeholder="Full Name"
            required
            fullWidth
          />
          <MciInput name="age" label="Age" placeholder="Age" fullWidth />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-x-8 gap-y-8 sm:gap-y-0">
          <MciInput
            name="email"
            label="Email"
            placeholder="Email"
            required
            fullWidth
          />
          <MciInput
            name="phoneNumer"
            label="Phone Numer"
            placeholder="Phone Numer"
            required
            fullWidth
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-x-8 gap-y-8 sm:gap-y-0">
          <MciInput
            name="password"
            label="Password"
            placeholder="Password"
            required
            fullWidth
          />
          <MciInput
            name="confirmPass"
            label="Confirm Passowrd"
            placeholder="Confirm Passowrd"
            required
            fullWidth
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-x-8 gap-y-8 sm:gap-y-0">
          <MciInput
            name="country"
            label="Country"
            placeholder="Country"
            fullWidth
          />
          <MciInput
            name="address"
            label="Address"
            placeholder="Address"
            fullWidth
          />
        </div>
        <Button
          className="bg-legendary-500 text-white text-[20px] rounded-lg py-6 w-full sm:w-[320px]"
          variant="default"
          size="lg"
        >
          Signup
        </Button>
        <p className="text-white w-[318px] text-center relative mci-separator">
          Or sign up with
        </p>
        <div className="flex flex-row justify-between w-[320px] gap-x-6">
          <Button
            className="bg-lightGray-bg flex-1"
            variant="default"
            size="lg"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_223_16913)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.98047 9.92896C2.73043 8.31523 3.78925 6.90455 5.03359 5.62923C7.84396 2.74404 11.2504 0.896326 15.2725 0.265917C20.9061 -0.616849 25.9535 0.685545 30.3102 4.36357C30.5855 4.59659 30.6536 4.73196 30.3546 5.01912C28.8152 6.49555 27.3014 7.99616 25.7778 9.48806C25.6219 9.64083 25.5163 9.82744 25.2391 9.57895C21.4005 6.13297 15.1353 6.17261 11.0579 9.88835C9.68342 11.1461 8.63794 12.7094 8.00974 14.4462C7.91106 14.3853 7.81238 14.3312 7.72456 14.2635L1.98047 9.92896Z"
                  fill="#D7282A"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.96353 21.4832C8.51416 22.8523 9.198 24.1469 10.2134 25.2463C12.7975 28.0425 16.0055 29.2466 19.8376 28.8585C21.6197 28.6768 23.2449 28.085 24.7626 27.1762C24.9077 27.3038 25.0468 27.4401 25.1998 27.5581C26.976 28.9169 28.7538 30.2741 30.5334 31.6296C28.6064 33.4235 26.2349 34.6933 23.6535 35.3135C17.5137 36.8382 11.8544 35.8714 6.82872 31.9874C4.7628 30.4 3.09837 28.3671 1.96484 26.0469L7.96353 21.4832Z"
                  fill="#45AC43"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.5328 31.6298C28.7566 30.2723 26.9787 28.9151 25.1992 27.5583C25.0462 27.4403 24.9032 27.304 24.762 27.1763C25.9659 26.2762 26.9705 25.2116 27.6297 23.859C27.8812 23.3174 28.0894 22.7575 28.2523 22.1843C28.3727 21.7908 28.3352 21.6371 27.8389 21.6419C24.8785 21.6661 21.9181 21.6535 18.9578 21.6535C18.3311 21.6535 18.3311 21.6535 18.3311 21.0183C18.3311 19.0526 18.34 17.0879 18.3223 15.1203C18.3223 14.7412 18.3864 14.5962 18.8216 14.5972C24.2818 14.6126 29.742 14.6126 35.2023 14.5972C35.4983 14.5972 35.6818 14.6184 35.7332 14.9694C36.4121 19.6472 35.8674 24.1161 33.3649 28.2447C32.6021 29.5152 31.6834 30.6687 30.5328 31.6298Z"
                  fill="#5D7FBE"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.9628 21.4832L1.96412 26.0469C0.986209 24.2688 0.424727 22.3573 0.161254 20.3665C-0.296615 16.9205 0.206647 13.6002 1.69966 10.4356C1.78156 10.2616 1.88517 10.0982 1.97892 9.92896L7.72301 14.2635C7.81281 14.3312 7.91346 14.3853 8.00819 14.4462C7.20298 16.7871 7.24639 19.1337 7.9628 21.4832Z"
                  fill="#F4C300"
                />
              </g>
              <defs>
                <clipPath id="clip0_223_16913">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Button>
          <Button
            className="bg-lightGray-bg flex-1"
            variant="default"
            size="lg"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_223_16923)">
                <path
                  d="M30.7267 30.7288C37.7562 23.6991 37.7562 12.3019 30.7267 5.27223C23.6973 -1.7574 12.3003 -1.7574 5.27089 5.27223C-1.75855 12.3019 -1.75855 23.6991 5.27089 30.7288C12.3003 37.7584 23.6973 37.7584 30.7267 30.7288Z"
                  fill="#3C5B9A"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.179 23.4333C15.179 21.7483 15.1723 20.0642 15.1857 18.3792C15.1857 18.0937 15.1076 18.0072 14.8232 18.0186C14.2989 18.0395 13.7718 18.0186 13.2467 18.0281C13.0335 18.0338 12.9555 17.9748 12.9612 17.7493C12.972 16.6977 12.972 15.6463 12.9612 14.5953C12.9612 14.3936 13.0202 14.327 13.2248 14.3317C13.7623 14.3441 14.3008 14.3165 14.8374 14.3431C15.1486 14.3584 15.2123 14.248 15.2056 13.9626C15.1879 13.1633 15.1879 12.3632 15.2056 11.562C15.2275 10.5849 15.4911 9.67246 16.0714 8.878C16.8078 7.87232 17.8554 7.41182 19.0627 7.35568C20.2996 7.3005 21.5469 7.33095 22.7895 7.31763C22.9626 7.31763 23.014 7.37757 23.013 7.54597C23.0073 8.60843 23.0073 9.67151 23.013 10.7352C23.013 10.9255 22.9531 10.9826 22.7676 10.9798C22.1701 10.9702 21.5726 10.9798 20.9751 10.9798C20.1806 10.9798 19.704 11.3917 19.6545 12.1786C19.6145 12.8094 19.644 13.444 19.6288 14.0815C19.6288 14.307 19.7582 14.2908 19.9066 14.2908C20.8143 14.2908 21.7229 14.3003 22.6306 14.2841C22.897 14.2841 22.9854 14.3412 22.9541 14.6219C22.8399 15.678 22.7419 16.736 22.6515 17.795C22.6306 18.0338 22.5221 18.0804 22.3071 18.0757C21.5907 18.0652 20.8742 18.0681 20.1578 18.0757C19.6431 18.0757 19.6926 18.0005 19.6926 18.5257C19.6926 21.8225 19.6859 25.1202 19.7002 28.4208C19.7002 28.769 19.6126 28.8556 19.2682 28.8499C18.0377 28.827 16.8072 28.827 15.5767 28.8499C15.2304 28.8565 15.1733 28.7395 15.1752 28.4303C15.1857 26.7538 15.179 25.0936 15.179 23.4333Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_223_16923">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Button>
          <Button
            className="bg-lightGray-bg flex-1"
            variant="default"
            size="lg"
          >
            <svg
              width="30"
              height="36"
              viewBox="0 0 30 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.8369 0.462575C17.1906 1.34968 14.9812 4.02257 14.6633 6.72139L14.4936 8.16005H15.6001C17.4417 8.16005 19.7401 6.37427 21.0175 3.95094C21.5121 3.01252 21.8555 -0.0227121 21.4641 0.000128214C21.2997 0.00971552 20.5675 0.217816 19.8369 0.462575ZM7.11962 8.98851C6.64715 9.10214 5.59617 9.55839 4.78423 10.0025C-0.343306 12.8074 -1.51297 20.7256 2.07261 28.3582C4.08928 32.6514 6.61349 35.5905 8.60631 35.966C9.22607 36.0831 10.3017 35.8981 11.8813 35.4032C14.8078 34.4859 15.5048 34.4857 18.5915 35.3984C21.5503 36.2731 22.4458 36.1741 24.049 34.795C25.3783 33.6513 27.4303 30.6606 28.5062 28.2982L29.25 26.6655L28.5912 26.2248C26.7917 25.0202 25.2509 23.1123 24.7896 21.5169C23.8705 18.3398 24.674 15.4027 27.0333 13.3155L28.2955 12.1988L27.2552 11.1803C25.9167 9.86941 23.9028 8.98456 21.8269 8.79535C20.476 8.67241 19.6876 8.8055 17.4345 9.53752L14.6883 10.4297L12.113 9.577C9.50607 8.71358 8.6714 8.61517 7.11962 8.98851Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
        <p className="text-white">
          Already have an account?{" "}
          <Link href="/login" className="text-legendary-500">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default page;
