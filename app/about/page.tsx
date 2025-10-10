import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MciContainer from '../components/MciContainer';

const WE_DO = [
  {
    icon: (
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5544 30C13.1713 30.01 9.90957 28.7415 7.42364 26.449C4.93771 24.1566 3.41152 21.0098 3.15129 17.64C3.12869 17.3713 3.1619 17.1009 3.24883 16.8457C3.33577 16.5904 3.47455 16.3559 3.65649 16.1568C3.83563 15.9644 4.05267 15.8111 4.29398 15.7065C4.53528 15.6019 4.79563 15.5483 5.05866 15.5491H14.7089C14.8145 15.5491 14.9191 15.5283 15.0167 15.4879C15.1142 15.4475 15.2029 15.3884 15.2776 15.3138C15.3522 15.2392 15.4115 15.1506 15.4519 15.0531C15.4923 14.9556 15.5131 14.8512 15.5131 14.7457V5.09457C15.5135 4.82854 15.5697 4.56554 15.678 4.3225C15.7863 4.07947 15.9444 3.86179 16.142 3.68347C16.3401 3.49936 16.5745 3.35848 16.8301 3.26981C17.0857 3.18115 17.357 3.14663 17.6267 3.16847C21.0888 3.43501 24.3123 5.03348 26.6182 7.6272C28.9241 10.2209 30.1323 13.6074 29.9885 17.0735C29.8491 20.4544 28.4422 23.6594 26.0471 26.0521C23.652 28.4448 20.4439 29.8504 17.0596 29.9897L16.5544 30ZM5.21331 17.64C5.47581 20.5466 6.85088 23.2399 9.052 25.1587C11.2531 27.0775 14.1105 28.0738 17.0287 27.94C19.8781 27.7889 22.5708 26.5901 24.5885 24.5744C26.6062 22.5587 27.8062 19.8686 27.9574 17.022C28.0832 14.1118 27.0823 11.2651 25.1624 9.07279C23.2425 6.88051 20.5512 5.51117 17.6473 5.24907V14.7354C17.6446 15.494 17.3417 16.2207 16.8048 16.7571C16.2679 17.2935 15.5404 17.5961 14.7811 17.5988L5.21331 17.64Z"
          fill="white"
        />
        <path
          d="M11.5641 14.447H1.91381C1.65087 14.4472 1.39071 14.3933 1.1495 14.2888C0.908281 14.1842 0.691162 14.0312 0.51163 13.8393C0.330504 13.6418 0.192146 13.409 0.105217 13.1555C0.0182885 12.9021 -0.0153406 12.6334 0.00643476 12.3664C0.26918 9.17608 1.65705 6.1825 3.92281 3.91896C6.18857 1.65542 9.18509 0.268916 12.3786 0.00642843C12.6459 -0.0153256 12.9148 0.0182707 13.1684 0.105114C13.4221 0.191958 13.6552 0.33018 13.8529 0.511128C14.045 0.690484 14.1981 0.907389 14.3028 1.14837C14.4074 1.38935 14.4614 1.64925 14.4612 1.91193V11.5527C14.464 11.9336 14.3909 12.3112 14.2463 12.6636C14.1016 13.016 13.8883 13.3361 13.6188 13.6054C13.3492 13.8747 13.0287 14.0878 12.676 14.2323C12.3233 14.3768 11.9453 14.4498 11.5641 14.447ZM2.06846 12.387H11.5641C11.7774 12.387 11.9819 12.3024 12.1327 12.1517C12.2835 12.001 12.3683 11.7967 12.3683 11.5836V2.05613C9.72042 2.32252 7.24689 3.49761 5.36888 5.38128C3.49088 7.26496 2.32453 9.74075 2.06846 12.387Z"
          fill="white"
        />
      </svg>
    ),
    title: 'Safe & Secure',
    description:
      'We provide a safe and secured virtual platform where singers can share their videos.',
  },
  {
    icon: (
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.1097 6.46588C29.9991 3.271 30.0004 0.971188 30 0.87486C29.9991 0.635884 29.9008 0.407565 29.728 0.242665C29.5552 0.0777069 29.3229 -0.00948623 29.0842 0.000820009C21.8874 0.303917 15.0599 3.7219 10.6802 9.46939L5.59794 9.2221C5.35083 9.21056 5.10986 9.30314 4.93483 9.47835L0.257031 14.1608C0.0299304 14.3881 -0.0549545 14.7215 0.035722 15.0298C0.126399 15.3383 0.378187 15.5724 0.692044 15.6404L6.10836 16.8127C5.36861 18.2071 4.9047 19.1863 4.85158 19.2991C4.69375 19.6343 4.76307 20.0326 5.02486 20.2947L5.41641 20.6866C4.99216 20.8352 4.59406 21.0788 4.25551 21.4177C3.99173 21.6817 3.78014 21.9875 3.62622 22.3271L0.145938 28.6573C-0.0414408 28.9981 0.0174697 29.4218 0.290845 29.6984C0.459913 29.8695 0.686019 29.9592 0.91505 29.9592C1.05627 29.9592 1.19866 29.9251 1.32935 29.855L7.72568 26.4226C7.82501 26.3773 7.92119 26.3274 8.01204 26.2737C8.0214 26.2684 8.03058 26.2628 8.03965 26.2572C8.25347 26.1279 8.45161 25.9726 8.62876 25.7952C8.96724 25.4564 9.21066 25.0579 9.35914 24.6332L9.79995 25.0744C10.075 25.3501 10.498 25.4097 10.8366 25.2267C10.9518 25.1646 11.8773 24.6641 13.1827 23.9185L14.3472 29.3088C14.4844 29.98 15.3447 30.2356 15.8254 29.7443L20.5032 25.0619C20.6783 24.8867 20.7712 24.6457 20.7592 24.3982L20.5124 19.3164C21.4212 18.6586 22.211 18.0244 22.7718 17.4631C26.1565 14.011 27.9399 10.4666 29.1097 6.46588ZM27.4026 6.05316C27.2157 6.71827 26.9761 7.45838 26.6709 8.24722L21.7375 3.30895C23.7911 2.50617 25.9535 2.00591 28.1924 1.81765C28.1124 2.73127 27.9108 4.24488 27.4026 6.05316ZM2.63603 14.2638L5.90097 10.9957L9.46251 11.169C8.54153 12.5299 7.69561 13.9443 6.98634 15.2054L2.63603 14.2638ZM8.00824 20.7967L6.70788 19.495C6.91684 19.072 7.24006 18.4308 7.6505 17.6575L9.39746 19.4061L8.00824 20.7967ZM7.38777 24.553C7.30903 24.6318 7.22099 24.7006 7.12598 24.7572C7.12446 24.7582 7.12288 24.7591 7.12136 24.76C7.07895 24.7851 7.0325 24.8088 6.98336 24.8306C6.96306 24.8396 6.94311 24.8493 6.92351 24.8598L3.11287 26.9046L5.18153 23.1422C5.1944 23.1188 5.20621 23.0948 5.21686 23.0703C5.2839 22.9167 5.37797 22.7787 5.4965 22.66C6.01792 22.1381 6.8663 22.1382 7.38772 22.66C7.90913 23.1819 7.90914 24.0311 7.38777 24.553ZM10.5759 23.3668L9.24922 22.0388L10.6384 20.6483L12.3546 22.3661C11.6134 22.7902 10.9928 23.1365 10.5759 23.3668ZM18.9873 24.0948L15.7224 27.3629L14.7783 22.9927C16.0531 22.2411 17.4805 21.3693 18.8121 20.4886L18.9873 24.0948ZM21.5307 16.2209C20.0434 17.7097 16.6481 19.8481 13.9253 21.4541L11.8794 19.4061L14.763 16.5197C15.1057 16.1766 15.1057 15.6205 14.763 15.2775C14.4204 14.9344 13.8647 14.9344 13.522 15.2775L10.6384 18.1639L8.52813 16.0516C8.60524 15.9147 8.68381 15.7761 8.76395 15.6359C10.5776 12.4654 12.3261 9.99893 13.8205 8.50312C15.6442 6.67769 17.7256 5.18703 20.0126 4.06675L25.9212 9.98113C24.9532 12.0005 23.5532 14.1964 21.5307 16.2209Z"
          fill="white"
        />
        <path
          d="M21.4723 8.56154C19.1829 6.25979 15.1949 7.91242 15.2082 11.1588C15.1675 13.1331 16.9053 14.8727 18.8777 14.8318C22.1206 14.8452 23.7722 10.8529 21.4723 8.56154ZM20.2314 12.5138C19.5187 13.2571 18.2366 13.2572 17.524 12.5138C16.7813 11.8005 16.7813 10.517 17.524 9.80379C18.2704 9.05665 19.4849 9.05671 20.2314 9.80379C20.9778 10.5509 20.9778 11.7667 20.2314 12.5138Z"
          fill="white"
        />
      </svg>
    ),
    title: 'Encourage Talent',
    description:
      'We encourage the talents who either lack the courage, resources, or the right connections to promote themselves.',
  },
  {
    icon: (
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        width="22"
        height="30"
        viewBox="0 0 22 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 30H10.43C8.91719 29.8197 7.52489 29.0853 6.52203 27.9388C5.51918 26.7922 4.97692 25.3148 5 23.792V20.2131C3.01253 18.9201 1.49624 17.0197 0.677122 14.7951C-0.141997 12.5704 -0.220082 10.1408 0.454504 7.8682C1.12909 5.59562 2.52023 3.6018 4.42057 2.18391C6.32092 0.766029 8.62872 0 11 0C13.3713 0 15.6791 0.766029 17.5794 2.18391C19.4798 3.6018 20.8709 5.59562 21.5455 7.8682C22.2201 10.1408 22.142 12.5704 21.3229 14.7951C20.5038 17.0197 18.9875 18.9201 17 20.2131V24.0019C17 25.5927 16.3679 27.1183 15.2426 28.2432C14.1174 29.3681 12.5913 30 11 30ZM11 2.00891C10.6658 2.01112 10.332 2.03114 10 2.06889C8.15886 2.28351 6.42891 3.0612 5.04654 4.2957C3.66417 5.53021 2.69681 7.16129 2.27665 8.96609C1.85649 10.7709 2.00402 12.6614 2.69909 14.3792C3.39415 16.097 4.60284 17.5584 6.16 18.5636C6.41886 18.7355 6.63107 18.9688 6.77766 19.2427C6.92425 19.5166 7.00064 19.8225 7 20.1331V23.782C6.97374 24.8053 7.32684 25.8021 7.99139 26.5809C8.65595 27.3597 9.58504 27.8653 10.6 28.0006C11.1579 28.0567 11.7214 27.9949 12.2538 27.8192C12.7863 27.6435 13.2758 27.3578 13.6907 26.9808C14.1056 26.6037 14.4366 26.1437 14.6622 25.6305C14.8877 25.1173 15.0028 24.5624 15 24.0019V20.1331C15.0017 19.8196 15.0823 19.5115 15.2343 19.2372C15.3863 18.9629 15.605 18.7313 15.87 18.5636C17.501 17.5105 18.7475 15.9583 19.4236 14.1387C20.0996 12.3191 20.1689 10.3298 19.6211 8.46763C19.0733 6.60546 17.9378 4.97033 16.384 3.8063C14.8303 2.64227 12.9416 2.01177 11 2.00891Z"
          fill="white"
        />
        <path d="M16 21.2529H6V23.2529H16V21.2529Z" fill="white" />
        <path
          d="M14 14.0049H8C7.44772 14.0049 7 14.4526 7 15.0049C7 15.5572 7.44772 16.0049 8 16.0049H14C14.5523 16.0049 15 15.5572 15 15.0049C15 14.4526 14.5523 14.0049 14 14.0049Z"
          fill="white"
        />
        <path d="M12 14.2549H10V22.2523H12V14.2549Z" fill="white" />
      </svg>
    ),
    title: 'Promote',
    description:
      'We promote diversity and inclusiveness through our platform and give them the right exposure.',
  },
  {
    icon: (
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        width="31"
        height="28"
        viewBox="0 0 31 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.1393 9.70166L17.2323 14.4566C16.6901 14.8824 16.0206 15.1139 15.3311 15.1139C14.6417 15.1139 13.9722 14.8824 13.43 14.4566L7.47314 9.70166"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.76826 2H21.8229C23.7061 2.02077 25.4964 2.81696 26.78 4.20162C27.4158 4.8887 27.9062 5.69719 28.2218 6.57855C28.5373 7.45991 28.6714 8.39594 28.6161 9.33044V18.3696C28.6714 19.3041 28.5373 20.2401 28.2218 21.1214C27.9062 22.0028 27.4158 22.8113 26.78 23.4984C26.1467 24.1829 25.3805 24.7311 24.5282 25.1096C23.6759 25.4881 22.7554 25.689 21.8229 25.7H8.76826C4.72503 25.7 2 22.4114 2 18.3696V9.33044C2 5.28859 4.72503 2 8.76826 2Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Encourage Visitors',
    description:
      'We encourage the visitors to discover, engage and vote for their favorite talents.',
  },
];
const MISSION_VISION = [
  {
    white: 'Our',
    color: 'Mission',
    text: 'We strive to be recognized as a global leader and proffered virtual venue in helping Talents succeed in the world’s fast- paced entertainment market.',
  },
  {
    white: 'Our',
    color: 'Vision',
    text: 'To build a Global creative and diverse community of talents by making a positive impact in their lives.',
  },
];
function AboutPage() {
  return (
    <div className="">
      <div className="relative">
        <div className="relative h-[350px] w-full lg:h-[980px]">
          <Image src={'/about-header.png'} fill alt="About Us Header Image" />
        </div>
        <div className="w-max-full absolute left-[12px] top-[50%] z-50 -translate-y-[50%] transform tracking-widest text-white md:w-1/2 lg:left-[90px] xl:left-[150px]">
          <h1 className="text-[18px] font-semibold lg:text-[40px] xl:text-[72px]">
            ABOUT <span className="font-semibold text-legendary-500">US</span>
          </h1>
          <p className="sm:text[16px] text-[12px] font-medium lg:text-[18px] xl:text-[24px]">
            Show it with Mackie is a free virtual singing competition organised
            quarterly which strives to bring people together from all over the
            world, to spark joy and human connection.
          </p>
          <Button
            variant="default"
            className="mt-4 bg-legendary-500 font-medium duration-300  ease-in-out hover:bg-legendary-600 sm:px-[30px] sm:py-[28px] sm:text-[20px]"
          >
            Learn More
          </Button>
        </div>
      </div>
      {/* who we are */}
      <MciContainer className="flex flex-col gap-x-[67px] py-[120px] lg:flex-row lg:items-center">
        <div className="w-max-1/2 w-full">
          <div className="relative h-[370px] w-full">
            <Image src={'/about-who-we-are.png'} fill alt="about-image" />
          </div>
        </div>
        <div className="w-max-1/2 w-full text-white">
          <h1 className="mb-4 text-[40px] font-semibold tracking-wider">
            Who <span className="text-legendary-500">We Are</span>
          </h1>
          <p className="text-[20px] font-medium tracking-wider">
            Show it with Mackie is a free virtual singing competition organised
            quarterly which strives to bring people together from all over the
            world, to spark joy and human connection. Our Innovative Platform
            has been founded on the basis of our mother company:{' '}
            <Link
              href="https://www.mackieentertainment.com"
              className="font-semibold text-legendary-500"
            >
              Mackie Entertainment
            </Link>{' '}
            as a collaborative and cohesive way of helping talented people
            achieve their dreams
          </p>
        </div>
      </MciContainer>
      {/* what we do */}
      <MciContainer className="bg-gray-bg py-[120px] text-white ">
        <div className="mx-auto flex w-full flex-col items-center text-center md:w-1/3">
          <h1 className="mb-4 text-[30px] font-bold lg:text-[40px]">
            What <span className="text-legendary-500">we do</span>
          </h1>
          <p className="">
            Fully layered dolor sit amet, nobis id officiis layered dolor sit
            amet laboriosam.
          </p>
        </div>
        <div className="mt-4 flex flex-col md:mt-12 md:flex-row md:items-start md:justify-between">
          {WE_DO.map(item => (
            <div
              key={item.title}
              className="group flex flex-col items-center justify-between gap-y-4 rounded-md px-3 py-10 duration-300 ease-in-out hover:bg-lightGray-bg xl:px-[32px]"
            >
              <div className="relative h-[60px] w-[60px] rounded-full bg-lightGray-bg duration-300 ease-in-out group-hover:bg-legendary-500">
                {item.icon}
              </div>
              <h6 className="text-[20px] font-bold">{item.title}</h6>
              <p className="text-center tracking-widest">{item.description}</p>
            </div>
          ))}
        </div>
      </MciContainer>

      {/* out mission */}
      <MciContainer className="flex w-full flex-col items-center justify-center gap-y-12 py-[120px] text-center md:flex-row md:gap-x-[150px] md:gap-y-0">
        {MISSION_VISION.map(item => (
          <div key={item.color} className="w-full text-white md:w-1/2">
            <h1 className="mb-3 text-[40px] font-bold">
              {item.white}{' '}
              <span className="text-legendary-500">{item.color}</span>
            </h1>
            <p className="text-[20px] font-medium tracking-wider">
              {item.text}
            </p>
          </div>
        ))}
      </MciContainer>
    </div>
  );
}

export default AboutPage;
