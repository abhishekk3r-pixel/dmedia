"use client";

import Footer from "../components/Footer";
import { LgAboveCard, LgCard } from "../components/services/Card";
import { useMedia } from "../context";

// const lgCards = [
//   {
//     backgroundStyle: { backgrounColor: "rgb(67, 142, 136)", opacity: 0.2 },
//     icon: "/icon1.svg",
//     color: "rgb(67, 142, 136)",
//     title: "Product Styling & Photoshoots",
//     bgImage: "/one.webp",
//     description: "Creating visuals that build desire and brand trust.",
//     list: [
//       "Naming, Logo, and Identity Design",
//       "Brand Manual and Visual Identity Manual Creation",
//       "Communication Collaterals (Brochures, Pitch Decks, Flyers, Posters, etc.)",
//       "Brand Signages And Interior Panels",
//       "Social Media Identity Design",
//       "Packaging Design (Labels, Thank You Cards, etc.)",
//     ],
//   },
//   {
//     backgroundStyle: { backgrounColor: "rgb(255, 129, 174)", opacity: 0.2 },
//     icon: "/icon1.svg",
//     bgImage: "/two.webp",
//     color: "rgb(255, 129, 174)",
//     title: "Copywriting & Creative Writing",
//     description: "Crafting Compelling Narratives that Captivate",
//     list: [
//       "Catchy Phrases for Ads",
//       "Social Media Content Creation",
//       "Website Content Writing",
//       "Brand Voice Development",
//       "Collateral Content Creation",
//     ],
//   },
//   {
//     backgroundStyle: { backgrounColor: "rgb(215, 88, 53)", opacity: 0.2 },
//     icon: "/icon1.svg",
//     color: "rgb(215, 88, 53)",
//     bgImage: "/three.webp",

//     title: "Website Design & SEO",
//     description: "Creating Digital Experiences that Engage and Convert",
//     list: [
//       "Search Engine Optimization (SEO)",
//       "Content Creation for Websites",
//       "Navigation and User Experience Design",
//       "Mobile Optimization",
//       "Website Hosting and Development (Shopify, WordPress, Wix, etc.)",
//     ],
//   },
//   {
//     backgroundStyle: { backgrounColor: "rgb(242, 187, 70)", opacity: 0.2 },
//     icon: "/icon1.svg",
//     color: "rgb(242, 187, 70)",
//     title: "Photography & Videography",
//     bgImage: "/four.webp",

//     description: "Capturing Moments and Stories with Creativity",
//     list: [
//       "Fashion Photography",
//       "Videography Services",
//       "Wedding and Event Coverage",
//       "Documentaries and Styled Photography",
//       "Photojournalism",
//       "Art Direction and Styling",
//     ],
//   },
// ];

const lgCards = [
  {
    backgroundStyle: { backgroundColor: "rgb(67, 142, 136)", opacity: 0.2 },
    icon: "/icon1.svg",
    color: "rgb(67, 142, 136)",
    title: "Product Styling & Photoshoots",
    bgImage: "/one.webp",
    description: "Creating visuals that build desire and brand trust.",
    list: [
      "Creative Product Styling & Concept Development",
      "Studio & Lifestyle Photoshoots",
      "E-commerce & Catalog Shoots",
      "Campaign & Social Media Visuals",
      "Art Direction & Set Design",
    ],
  },
  {
    backgroundStyle: { backgroundgColor: "rgb(255, 129, 174)", opacity: 0.2 },
    icon: "/icon2.svg",
    bgImage: "/two.webp",
    color: "rgb(255, 129, 174)",
    title: "Video Production (TVCs, DVCs, Corporate Films)",
    description: "Story-driven videos that build credibility and recall.",
    list: [
      "TV Commercials & Digital Video Campaigns",
      "Corporate & Brand Films",
      "Ad Film Concept to Execution",
      "Scriptwriting & Storyboarding",
      "High-Quality Production & Post-Production",
    ],
  },
  {
    backgroundStyle: { backgroundColor: "rgb(215, 88, 53)", opacity: 0.2 },
    icon: "/icon3.png",
    color: "rgb(215, 88, 53)",
    bgImage: "/three.webp",
    title: "Social Media Management & Performance Marketing",
    description: "Growing brands through content, community, and conversion.",
    list: [
      "Social Media Strategy & Content Planning",
      "Creative Post & Reel Production",
      "Community Management",
      "Paid Ads & Performance Campaigns",
      "Data-Driven Optimization & Reporting",
    ],
  },
  {
    backgroundStyle: { backgroundColor: "rgb(242, 187, 70)", opacity: 0.2 },
    icon: "/icon4.svg",
    color: "rgb(242, 187, 70)",
    title: "Animation",
    bgImage: "/four.webp",
    description: "Engaging visuals that simplify and amplify your message.",
    list: [
      "2D & 3D Animation",
      "Motion Graphics",
      "Explainer Videos",
      "Animated Ads & Social Content",
      "Visual Storyboarding",
    ],
  },
  {
    backgroundStyle: { backgroundColor: "rgb(98, 91, 190)", opacity: 0.2 },
    icon: "/icon5.png",
    color: "rgb(98, 91, 190)",
    title: "Event Management",
    bgImage: "/five.webp",
    description: "Turning live experiences into powerful brand moments.",
    list: [
      "Event Planning & Creative Direction",
      "On-Ground Execution & Coordination",
      "Live Event Coverage",
      "Highlight & After-Movie Production",
    ],
  },
];

export default function Page() {
  const { isLgUp } = useMedia();
  return (
    <>
    <main>
      <div>
        <div className="max-w-9xl mx-auto text-center px-4 py-12">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-snug md:leading-normal lg:leading-[100px]">
            Services That Don’t{" "}
            <span className="text-[#4B84BE]">Just Execute</span> 
            <br className="hidden md:block md:mb-6 lg:mb-8" />They Elevate {" "}
            <span className="text-[#438E88]"> What Matters</span>
          </h1>

          {/* <h2
            className="text-2xl md:text-3xl lg:text-4xl text-[#D75835] mb-6"
            style={{ fontWeight: 450 }}
          >
            Fear not, Your Regular Company Swoops in on a Griffin!
          </h2> */}

          <p className="text-lg md:text-xl lg:text-2xl text-black max-w-full md:max-w-4xl lg:max-w-6xl mx-auto font-thin">
            We blend creativity, strategy, and performance to build brands that stand out and stay remembered. From visual storytelling to data-driven growth, our services are designed to create impact at every touchpoint.
          </p>
        </div>
        <div className="max-w-[1700px] mx-auto p-4 sm:p-5 overflow-visible">
          <div className="space-y-12 sm:space-y-8 mx-auto overflow-visible">
            {!isLgUp &&
              lgCards.map((card, idx) => {
                // @ts-ignore
                return <LgCard key={idx} {...card} />;
              })}

            {isLgUp &&
              lgCards.map((card, idx) => {
                // @ts-ignore
                return <LgAboveCard key={idx} {...card} />;
              })}
          </div>
        </div>
      </div>
    </main>
    <Footer isLgUp={isLgUp} />
    </>
  );
}
