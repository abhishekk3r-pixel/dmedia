"use client";

import Link from "next/link";
import React, { useState } from "react";

type FooterProps = {
  isLgUp: boolean;
};

const links = {
  fb: "https://www.facebook.com/share/1GdqjfwVKj/",
  ig: "https://www.instagram.com/dmediabuzz/",
  wh: "https://wa.me/919311336515",
  li: "https://www.linkedin.com/company/dmedia001/",
}

export default function Footer(props: FooterProps) {
  const { isLgUp } = props;
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: replace with real submission logic (API call, etc.)
    console.info("Newsletter email submitted:", email);
    setEmail("");
  };


  return (
    <footer className="relative text-white w-full mt-24 pt-20 pb-20 lg:pb-0">
      <img
        src={isLgUp ? "/Group.png": "/footer_mobile.png"}
        alt="Footer background"
        className="absolute inset-0 w-screen h-full object-cover"
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-10 sm:pt-20 lg:pt-96">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:ml-20 lg:pb-40">
          <div className="flex flex-col items-center lg:items-start">
            <nav className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-4 lg:space-y-0 mb-5 text-sm">
              <Link href="/" data-discover="true">
                HOME
              </Link>
              <Link href="/about-us" data-discover="true">
                ABOUT US
              </Link>
              <Link href="/work" data-discover="true">
                OUR WORK
              </Link>
              <Link href="/services" data-discover="true">
                SERVICES
              </Link>
              <Link href="/contact-us" data-discover="true">
                CONTACT US
              </Link>
            </nav>

            <div className="flex justify-center mb-8 px-4">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col lg:flex-row items-center max-w-3xl w-full space-y-4 lg:space-y-0 lg:space-x-4"
              >
                <div className="flex flex-col lg:flex-row w-full max-w-md">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="newsletter-email"
                    name="email"
                    placeholder="Subscribe For Newsletter"
                    className="flex-1 px-4 py-2 bg-transparent border border-white text-white placeholder-white placeholder:text-sm mb-2 lg:mb-0"
                    autoComplete="email"
                    aria-label="Email address for newsletter subscription"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-white text-[#2F5C55] font-medium transition-colors lg:ml-2"
                  >
                    Submit
                  </button>
                </div>

                <div className="flex space-x-4 mt-2 lg:mt-0 text-white">
                  <a
                    href={links.fb}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/w_facebook.svg"
                      alt="Facebook"
                      className="w-10 h-6 hover:scale-110 transition-transform"
                    />
                  </a>
                  <a
                    href={links.ig}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/w_insta.svg"
                      alt="Instagram"
                      className="w-10 h-6 hover:scale-110 transition-transform"
                    />
                  </a>
                  <a
                    href={links.wh}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/w_whatsapp.svg"
                      alt="WhatsApp"
                      className="w-10 h-6 hover:scale-110 transition-transform"
                    />
                  </a>
                  <a
                    href={links.li}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/w_linkedin.svg"
                      alt="LinkedIn"
                      className="w-10 h-6 hover:scale-110 transition-transform"
                    />
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* <div className="lg:ml-20 ml-0 mt-6 lg:mt-0">
            <a href="/" data-discover="true">
              <img className="w-32 md:w-48" src="/fun.png" alt="logo" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}