"use client";
import { useRouter } from "next/navigation";
import LogoCarausol from "../LogoCarausol";

const cards = [
  {
    title: "Graphic Designing",
    description: "Crafting visual identities that resonate",
    imageSrc: "/Graphic Design.png",
    desktopImageSrc: "/green.webp",
    alt: "Graphic Designing",
  },
  {
    title: "Copywriting & Creative Writing",
    description: "Crafting compelling narratives that captivate",
    imageSrc: "/copywriting.png",
    desktopImageSrc: "/pink.webp",
    alt: "Copywriting & Creative Writing",
  },
  {
    title: "Website Design & SEO",
    description: "Creating digital experiences that engage and convert",
    imageSrc: "/website.png",
    desktopImageSrc: "/orange.webp",
    alt: "Website Design & SEO",
  },
  {
    title: "Photography & Videography",
    description: "Capturing moments and stories with creativity",
    imageSrc: "/Photography.png",
    desktopImageSrc: "/yellow.webp",
    alt: "Photography & Videography",
  },
  {
    title: "Social Media Management & Marketing",
    description: "Elevating your brand’s digital Presence",
    imageSrc: "/Social media.png",
    desktopImageSrc: "/blue.webp",
    alt: "Social Media Management & Marketing",
  },
];

type WhatToExpectProps = {
  isLgUp: boolean;
  isMobileScreen: boolean;
};

export default function WhatToExpect(props: WhatToExpectProps) {
  const { isLgUp, isMobileScreen } = props;
  const route = useRouter();

  function handleClick(filter: string) {
    const params = new URLSearchParams();
    params.set("filter", "Copywriting & Creative Writing");

    route.push(`/work?${params.toString()}`);
  }

  return (
    <div className="bg-white flex flex-col items-center justify-center pt-4 relative overflow-hidden pb-1 md:pb-1 sm:pb-0 mt-24">
      <h2 className="text-center text-4xl -mt-5 sm:text-5xl md:text-6xl font-semibold mb-16 z-50">
        <span className="text-[#D75835]">What to</span>{" "}
        <span className="text-[#4B84BE]">Expect</span>
      </h2>

      {!isLgUp && !isMobileScreen && (
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 px-4 md:px-8 mb-20 mobile-cards">
          {cards.map((card, index) => {
            const isOdd = index % 2 !== 0;
            return (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden"
                style={{
                  width: "100%",
                  maxWidth: "900px",
                  margin: "0px auto",
                  minHeight: "200px",
                }}
              >
                <img
                  src={card.imageSrc}
                  alt={card.alt}
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-container text-center pb-4">
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-white">
                      {card.description}
                    </p>
                  </div>
                  <div className="mb-2">
                    <button
                      className={`
                    relative
                    group
                    flex
                    items-center
                    bg-transparent
                                        ${
                                          isOdd
                                            ? "text-black border-black"
                                            : "text-white border-white"
                                        }
                    px-4
                    py-2
                    rounded-full
                    border
                    transition-all
                    duration-700
                    ease-in-out
                    min-w-40
                  `}
                      onClick={() => handleClick(card.title)}
                    >
                      <div
                        className={`absolute
                      flex
                      items-center
                      justify-center
                      h-8
                      w-8
                     ${isOdd ? "bg-black/20" : "bg-white/20"}
                      bg-opacity-20
                      rounded-full
                      transition-all
                      duration-1500
                      ease-out
                      left-1
                      group-hover:left-[calc(100%-32px)]
                    `}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-right"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                      <span className="w-full transition-all duration-100 ease-out text-right pr-4 group-hover:text-left group-hover:pl-4">
                        Know More
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {(isLgUp || isMobileScreen) && (
        <div className="cards-container min-h-100 md:min-h-150 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 px-4 md:px-8 relative z-10">
          {cards.map((card, index) => {
            const isOdd = index % 2 !== 0;

            return (
              <div
                key={index}
                className="p-4 md:p-8 rounded-lg flex flex-col justify-center items-center text-center transform transition-transform duration-300 hover:scale-100"
                style={{
                  backgroundImage: `url('${card.desktopImageSrc}')`,
                  backgroundSize: "cover",
                  minHeight: "350px",
                  height: "100%",
                }}
              >
                <div className="text-container mt-0 md:-mt-20">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-white">
                    {card.description}
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    className={`
                relative
                group
                flex
                items-center
                bg-transparent
                 ${
                   isOdd ? "text-black border-black" : "text-white border-white"
                 }
                px-4
                py-2
                rounded-full
                border
                transition-all
                duration-700
                ease-in-out
                min-w-40
              `}
                    onClick={() => handleClick(card.title)}
                  >
                    <div
                      className={`
                  absolute
                  flex
                  items-center
                  justify-center
                  h-8
                  w-8
                  ${isOdd ? "bg-black/20" : "bg-white/20"}
                  bg-opacity-20
                  rounded-full
                  transition-all
                  duration-1500
                  ease-out
                  left-1
                  group-hover:left-[calc(100%-32px)]
                `}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                    <span className="w-full transition-all duration-100 ease-out text-right pr-4 group-hover:text-left group-hover:pl-4">
                      Know More
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <LogoCarausol />

      <div
        className="transition-transform duration-300 ease-in-out overflow-hidden z-20"
        style={{
          height: "125px",
          backgroundColor: "white",
          width: "150%",
          transform: "rotate(7deg) translateX(-10%)",
          position: "relative",
          marginLeft: "-25%",
          marginRight: "-25%",
        }}
      />
    </div>
  );
}
