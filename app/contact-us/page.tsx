"use client";

import Contact from "../components/contact-us/contact";
import Footer from "../components/Footer";
import { useMedia } from "../context";

export default function Page() {
  const { isLgUp } = useMedia();
  return (
    <>
      <main>
        <h1 className="text-[#4B84BE] text-3xl md:text-5xl lg:text-7xl text-center leading-tight mb-12 md:mb-20 font-semibold mt-12">
          Let’s Build Bold Brands
          <br />
          Dreams Into Reality!
        </h1>
        <div className="px-4 flex justify-center items-center flex-col">
          {/* <Contact /> */}
        </div>
        <div className="relative px-8 w-full max-w-5xl mx-auto flex justify-center h-auto mt-10 md:mt-11 lg:mt-12">
          <div className="absolute right-4 md:right-8 -top-6 z-10">
            <img
              className="w-40 md:w-48 lg:w-56"
              src="/writetous.webp"
              alt="Write to us"
              loading="lazy"
            />
          </div>

          <div className="bg-[#FCC852] rounded-xl md:rounded-3xl px-4 md:px-8 lg:px-12 relative overflow-hidden min-h-[300px] md:h-[350px] w-full pt-12 md:pt-20 pb-16 flex flex-col justify-between">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-8 md:gap-4">
              <div>
                <div className="text-base md:text-xl lg:text-2xl mb-2 md:mb-4">
                  +91 9311336515
                </div>
                <div className="text-base md:text-xl lg:text-2xl">
                  Plot No 1483, Huda Colony, Sector 46, Gurugram, Haryana 122003
                </div>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="text-base md:text-xl lg:text-2xl">
                  connect@dmediabuzz.com
                </div>

                <div className="flex gap-2 items-center mt-2">
                  <a
                    href="https://www.facebook.com/share/1GdqjfwVKj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center hover:opacity-75 cursor-pointer transition-opacity"
                  >
                    <img
                      src="/Vector.png"
                      alt="Facebook"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/dmediabuzz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center hover:opacity-75 cursor-pointer transition-opacity"
                  >
                    <img
                      src="/insta.png"
                      alt="Instagram"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </a>

                  <a
                    href="https://wa.me/919311336515"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center hover:opacity-75 cursor-pointer transition-opacity"
                  >
                    <img
                      src="/whatsapp.png"
                      alt="WhatsApp"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/dmedia001/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center hover:opacity-75 cursor-pointer transition-opacity"
                  >
                    <img
                      src="/linkedin.png"
                      alt="LinkedIn"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-2 right-0 text-[#FFE6AF]/50 text-4xl md:text-7xl lg:text-[112px] font-bold pl-3 whitespace-nowrap overflow-hidden">
              Let's Get In Touch!
            </div>
          </div>
        </div>
      </main>
      <Footer isLgUp={isLgUp} />
    </>
  );
}
