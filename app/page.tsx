"use client";
import Footer from "./components/Footer";
import FromOurClients from "./components/home/FromOurClients"; 
import Video from "./components/home/Video";
import WhoWeAre from "./components/home/WhoWeAre";
import WhatToExpect from "./components/home/WhatToExpect";
import { useMedia } from "./context";
export default function Home() {

  const {isLgUp, isMdUp, isXlUp, isMobileScreen} = useMedia();

  return (
    <main>
      <div>
        <div className="w-full h-auto flex justify-center items-center mb-10 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-30">
          <Video loadBigger={isMdUp} />
        </div>
        <WhoWeAre isLargeScreen={isXlUp} />
        <WhatToExpect isLgUp={isLgUp} isMobileScreen={isMobileScreen} />
        <FromOurClients />
        <Footer isLgUp={isLgUp} />
      </div>

    </main>
  );
}
