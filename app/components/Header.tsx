"use client";
import { useState } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";


const routes = [
    { name: "Home", href: "/", color: "rgb(221, 70, 38)", active: false },
    { name: "About Us", href: "/about-us", color: "rgb(75, 132, 190)", active: true },
    { name: "work", href: "/work", color: "rgb(67, 142, 136)", active: false },
    { name: "Services", href: "/services", color: "rgb(242, 187, 70)", active: false },
    { name: "Contact Us", href: "/contact-us", color: "rgb(75, 132, 190)", active: false },
]

// const logoLink = "/LOGO.webp"
const logoLink = "/fun.png"

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();


    function handleToggleMenu() {
        setShowMenu(!showMenu);
    }



    return (
        <div className="w-full">
            {/* Logo */}
            <div className="flex justify-center py-4">
                <Link className="cursor-pointer" href="/" data-discover="true">
                    <img
                        className="w-32 md:w-48"
                        src={logoLink}
                        alt="logo"
                    />
                </Link>
            </div>

            {/* Mobile top bar */}
            <div className="md:hidden flex justify-between items-center px-4">
                <button className="text-black p-2" onClick={handleToggleMenu}>
                    {
                        showMenu ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-x"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>

                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-menu"
                            >
                                <line x1="4" x2="20" y1="12" y2="12"></line>
                                <line x1="4" x2="20" y1="6" y2="6"></line>
                                <line x1="4" x2="20" y1="18" y2="18"></line>
                            </svg>
                        )
                    }


                </button>


                {/* <div className="relative">
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
            title="Search website"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search text-gray-600"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </div> */}
            </div>

            {/* Navigation */}
            <nav
                className="w-full"
                style={{ backgroundColor: "rgb(242, 242, 242)" }}
            >
                {/* Desktop */}
                <div className="hidden md:flex justify-center items-center gap-8 py-4 relative">
                    {routes.map(({ name, href, color }) => {
                        const active = pathname === href;
                        return (
                        <div key={name} className="relative group">
                            <Link
                                href={href}
                                data-discover="true"
                                className="text-black text-base font-light transition-all duration-300"
                            >
                                {name}
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                    style={{ backgroundColor: color }}
                                />
                            </Link>
                        </div>
                    )
                    })}

                    {/* <button
                        className="ml-4 p-2 rounded-full hover:bg-white/30 transition-all duration-300 group"
                        title="Search website"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-search text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                    </button> */}
                </div>

                {/* Mobile menu */}
                {showMenu && <div className="md:hidden block">
                    <ul className="flex flex-col items-center gap-6 py-4">
                        {routes.map(({ name, href, color }) => {
                            const active = pathname === href;
                            return (
                            <li key={name} className="relative group">
                                <Link
                                    href={href}
                                    data-discover="true"
                                    className="text-black text-base font-light transition-all duration-300"
                                >
                                    {name}
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 w-0 ${active ? "w-full" : "w-0 group-hover:w-full"} transition-all duration-300`}
                                        style={{ backgroundColor: color }}
                                    />
                                </Link>
                            </li>
                        )
                        })}
                    </ul>
                </div>}
            </nav>
        </div>
    );
}
