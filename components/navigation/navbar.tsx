"use client";

import Link from "next/link";
import React, { useState, JSX } from "react";
import Image from "next/image";
import { appLogoTransparent } from "@/components/constant/image";
import { Paragraph } from "@/components/text/paragraph";

const menuList = [
  {
    name: "About",
    path: "#",
  },
  {
    name: "Service",
    path: "#",
  },
  {
    name: "Tracking",
    path: "#",
  },
  {
    name: "Service Announcement",
    path: "#",
  },
  {
    name: "More",
    path: "#",
  },
];

export default function Navbar(): JSX.Element {
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);

  return (
    <>
      <header className="relative z-20 w-full border-b border-slate-200 bg-sunflower shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between lg:items-center lg:justify-center font-medium text-slate-700"
            role="navigation"
          >
            <Link
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none"
              href="#"
            >
              <div className="relative w-[160px] h-[51px]">
                <Image src={appLogoTransparent} alt="app_logo" fill />
              </div>
            </Link>

            {/* Mobile trigger */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0"
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen((prev) => !prev)}
              aria-expanded={isToggleOpen}
              aria-label="Toggle navigation"
              type="button"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                />
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                />
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                />
              </div>
            </button>

            {/* Navigation links */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 bg-sunflower lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              {menuList.map((field, index) => (
                <li key={index} role="none" className="flex items-stretch">
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    href={field.path}
                    className="flex items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none px-4"
                  >
                    <Paragraph
                      className={`${
                        field.name === "Features"
                          ? "text-midnight hover:text-midnight focus:text-midnight"
                          : "hover:text-midnight focus:text-midnight"
                      }`}
                    >
                      {field.name}
                    </Paragraph>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
