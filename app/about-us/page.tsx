"use client";
import { useMedia } from "@/app/context";
import AnimatedCircles from "../components/about/AnimatedCircles";
import Founder from "../components/about/Founder";
import Footer from "../components/Footer";
export default function Page() {
  const { isLgUp } = useMedia();

  return (
    <>
      <main>
        <div className="w-full overflow-x-hidden">
          <AnimatedCircles isLgUp={isLgUp} />
        </div>
        <div className="w-full max-w-6xl mx-auto pt-20 md:py-40 px-4 md:px-8 md:h-5/6 flex items-center mt-12 md:-mt-16">
        <Founder />
        </div>
      </main>
      <Footer isLgUp={isLgUp} />
    </>
  );
}
