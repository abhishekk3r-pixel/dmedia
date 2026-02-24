import Link from "next/link";

type WhoWeAreProps = {
  isLargeScreen: boolean;
};

// Update values here:
const description = `We’re a full-service creative and digital agency delivering social media marketing and ad films that blend strategy with storytelling. We help brands build credibility, earn trust, and drive consistent, measurable growth.`;

export default function WhoWeAre(props: WhoWeAreProps) {
  const { isLargeScreen } = props;
  return (
    <div
      className="relative w-full bg-white flex items-center justify-center h-full mb-16 mt-72 px-4 pt-8 pb-28  xl:min-h-screen
    xl:mb-0 xl:mt-0
    xl:px-8 xl:pt-0 xl:pb-0"
    >
      <div className="absolute inset-0 w-full bg-white flex items-center justify-center h-full">
        <img
          src={isLargeScreen ? "/handshome.png" : "/twohand.svg"}
          alt="Description"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="relative w-full max-w-6xl text-center text-black -mt-50 ">
        <h2
          className="text-[#438E88] font-semibold text-4xl mb-4 -mt-20        xl:text-7xl xl:mb-8 xl:-mt-50
"
        >
          Who are we?
        </h2>
        <p
          className="font-medium text-xl mb-4         xl:text-4xl xl:mb-8
"
        >
          Turning deadlines into trust.
        </p>
        <p className="leading-relaxed mx-auto text-base mb-4 max-w-75">
          {description}
        </p>
        <Link
          href={"/about-us"}
          className="bg-transparent text-blue-500 rounded-md hover:underline transition text-base px-4 py-2         xl:text-xl xl:px-8 xl:py-4
"
        >
          Know More
        </Link>
      </div>
    </div>
  );
}
