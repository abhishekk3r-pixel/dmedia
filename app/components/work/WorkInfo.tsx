"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

type IndustryKey =
  | "Food & Hospitality"
  | "Social & Environment"
  | "Real Estate"
  | "Technology"
  | "Finance"
  | "Home & Wellness"
  | "Others";

const SERVICES = [
  { label: "Branding & Identity", className: "bg-green-50 border-green-200" },
  { label: "Social Media", className: "bg-purple-50 border-purple-200" },
  { label: "Website & SEO", className: "bg-red-50 border-red-200" },
  {
    label: "Copywriting & Creative Writing",
    className: "bg-pink-50 border-pink-200",
  },
  { label: "Space/Events", className: "bg-gray-100 border-gray-300" },
  { label: "Print/Packaging Design", className: "bg-cyan-50 border-cyan-200" },
  { label: "Graphic Design", className: "bg-blue-50 border-blue-200" },
  {
    label: "Photography, Videography & Video Editing",
    className: "bg-yellow-50 border-yellow-200",
  },
];

const INDUSTRIES = [
  { label: "Food & Hospitality", className: "bg-green-50 border-green-200" },
  {
    label: "Social & Environment",
    className: "bg-purple-50 border-purple-200",
  },
  { label: "Real Estate", className: "bg-indigo-50 border-indigo-200" },
  { label: "Technology", className: "bg-orange-50 border-orange-200" },
  { label: "Finance", className: "bg-red-100 border-red-300" },
  { label: "Home & Wellness", className: "bg-blue-100 border-blue-300" },
  { label: "Others", className: "bg-gray-200 border-gray-400" },
];

type ServiceKey =
  | "Branding & Identity"
  | "Social Media"
  | "Website & SEO"
  | "Copywriting & Creative Writing"
  | "Space/Events"
  | "Print/Packaging Design"
  | "Graphic Design"
  | "Photography, Videography & Video Editing";

type WorkItem = {
  industry: IndustryKey;
  service: ServiceKey[];
  title: string;
  description: string;
  images: string[];
};

const workItems: WorkItem[] = [
  // ... (keep your existing workItems list)
  {
    industry: "Social & Environment",
    service: ["Branding & Identity", "Print/Packaging Design"],
    title: "Abiliti Aids",
    description:
      "Abiliti Aids is dedicated to empowering individuals with disabilities by designing innovative equipment that enhances independence and promotes barrier-free living. Their mission is to create products that cater to diverse needs while inspiring confidence and self-reliance. Serving individuals with disabilities and therapists committed to supporting their clients' journeys, Abiliti Aids fosters an inclusive environment where everyone can thrive. With a vision of a world where every individual experiences the freedom to live life to the fullest, Abiliti Aids continues to champion accessibility and empowerment for all.",
    images: ["/work3.png", "/work4.png"],
  },
  {
    industry: "Food & Hospitality",
    service: ["Copywriting & Creative Writing", "Social Media"],
    title: "The Brew Room",
    description:
      "The Brew Room is a cozy café that offers a unique blend of artisanal coffee and a warm, inviting atmosphere. Their mission is to create a community space where coffee lovers can gather, relax, and enjoy expertly crafted beverages made from the finest beans. Serving coffee enthusiasts and local residents seeking a comfortable spot to unwind, The Brew Room aims to be more than just a café – it's a hub for connection and creativity. With a vision of becoming the go-to destination for exceptional coffee experiences, The Brew Room is dedicated to fostering a sense of belonging and inspiring moments of joy with every cup served.",
    images: ["/work2.png"],
  },
  {
    industry: "Real Estate",
    service: ["Branding & Identity", "Social Media"],
    title: "The Brew Room",
    description:
      "The Brew Room is a cozy café that offers a unique blend of artisanal coffee and a warm, inviting atmosphere. Their mission is to create a community space where coffee lovers can gather, relax, and enjoy expertly crafted beverages made from the finest beans. Serving coffee enthusiasts and local residents seeking a comfortable spot to unwind, The Brew Room aims to be more than just a café – it's a hub for connection and creativity. With a vision of becoming the go-to destination for exceptional coffee experiences, The Brew Room is dedicated to fostering a sense of belonging and inspiring moments of joy with every cup served.",
    images: ["/work2.png"],
  },
  {
    industry: "Technology",
    service: ["Branding & Identity", "Social Media"],
    title: "The Brew Room",
    description:
      "The Brew Room is a cozy café that offers a unique blend of artisanal coffee and a warm, inviting atmosphere. Their mission is to create a community space where coffee lovers can gather, relax, and enjoy expertly crafted beverages made from the finest beans. Serving coffee enthusiasts and local residents seeking a comfortable spot to unwind, The Brew Room aims to be more than just a café – it's a hub for connection and creativity. With a vision of becoming the go-to destination for exceptional coffee experiences, The Brew Room is dedicated to fostering a sense of belonging and inspiring moments of joy with every cup served.",
    images: ["/work2.png"],
  },
  {
    industry: "Finance",
    service: ["Branding & Identity", "Social Media"],
    title: "The Brew Room",
    description:
      "The Brew Room is a cozy café that offers a unique blend of artisanal coffee and a warm, inviting atmosphere. Their mission is to create a community space where coffee lovers can gather, relax, and enjoy expertly crafted beverages made from the finest beans. Serving coffee enthusiasts and local residents seeking a comfortable spot to unwind, The Brew Room aims to be more than just a café – it's a hub for connection and creativity. With a vision of becoming the go-to destination for exceptional coffee experiences, The Brew Room is dedicated to fostering a sense of belonging and inspiring moments of joy with every cup served.",
    images: ["/work2.png"],
  },
  {
    industry: "Home & Wellness",
    service: ["Branding & Identity", "Social Media"],
    title: "The Brew Room",
    description:
      "The Brew Room is a cozy café that offers a unique blend of artisanal coffee and a warm, inviting atmosphere. Their mission is to create a community space where coffee lovers can gather, relax, and enjoy expertly crafted beverages made from the finest beans. Serving coffee enthusiasts and local residents seeking a comfortable spot to unwind, The Brew Room aims to be more than just a café – it's a hub for connection and creativity. With a vision of becoming the go-to destination for exceptional coffee experiences, The Brew Room is dedicated to fostering a sense of belonging and inspiring moments of joy with every cup served.",
    images: ["/work2.png"],
  },
  {
    industry: "Others",
    service: ["Branding & Identity", "Social Media"],
    title: "The Brew Room",
    description:
      "The Brew Room is a cozy café that offers a unique blend of artisanal coffee and a warm, inviting atmosphere. Their mission is to create a community space where coffee lovers can gather, relax, and enjoy expertly crafted beverages made from the finest beans. Serving coffee enthusiasts and local residents seeking a comfortable spot to unwind, The Brew Room aims to be more than just a café – it's a hub for connection and creativity. With a vision of becoming the go-to destination for exceptional coffee experiences, The Brew Room is dedicated to fostering a sense of belonging and inspiring moments of joy with every cup served.",
    images: ["/work2.png"],
  },
  // (keep remaining items unchanged)
];

const services = [
  {
    service: "Event Management",
    images: [
      "/work/w/event/1.jpeg",
      "/work/w/event/2.jpeg",
      "/work/w/event/3.jpeg",
      "/work/w/event/4.jpeg",
      "/work/w/event/5.jpeg",
      "/work/w/event/6.jpeg",
      "/work/w/event/7.jpeg",
      "/work/w/event/8.jpeg",
    ],
    className: "bg-green-50 border-green-200",
  },
  {
    service: "Product Styling & Photoshoots",
    images: [
      "/work/w/Photoshoot/1.png",
      "/work/w/Photoshoot/2.png",
      "/work/w/Photoshoot/3.png",
      "/work/w/Photoshoot/4.png",
      "/work/w/Photoshoot/5.png",
      "/work/w/Photoshoot/6.png",
      "/work/w/Photoshoot/7.png",
      "/work/w/Photoshoot/8.png",
      "/work/w/Photoshoot/9.png",
      "/work/w/Photoshoot/10.png",
      "/work/w/Photoshoot/11.png",
      "/work/w/Photoshoot/12.png",
    ],
    className: "bg-orange-50 border-orange-200",
  },
  {
    service: "Social Media Management & Performance Marketing",
    images: [
      "/work/w/social/1.png", "/work/w/social/2.png", "/work/w/social/3.png",
      "/work/w/social/4.png", "/work/w/social/5.png", "/work/w/social/6.png",
      "/work/w/social/7.png", "/work/w/social/8.png", "/work/w/social/9.png",
      "/work/w/social/10.png", "/work/w/social/11.png", "/work/w/social/12.png",  
      "/work/w/social/13.png", "/work/w/social/14.png"
    ],
    className: "bg-blue-100 border-blue-300",

  },
  {
    service: "Animation",
    images: [""],
    className: "bg-indigo-50 border-indigo-200",
  },
  {
    service: "Video Production (TVCs, DVCs, Corporate Films)",
    images: [""],
    className: "bg-red-50 border-red-200",
  },
];

type FilterType = {
  filterBy: "By Service" | "By Industry";
  filterValue: ServiceKey | IndustryKey | null;
};

const filterByOptions = [
  { label: "By Service", className: "bg-white text-black" },
  {
    label: "By Industry",
    className: "bg-white text-gray-700 ",
  },
] as const;

export default function WorkInfo() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<FilterType>({
    filterBy: "By Service",
    filterValue: searchParams.get("filter") as ServiceKey | IndustryKey | null,
  });

  const [selectedService, setSelectedServices] = useState(
    searchParams.get("filter") || services[0].service,
  );

  console.log("seelcted service", selectedService);

  function handleFilterByChange(filterBy: "By Service" | "By Industry") {
    setFilters((prev) => {
      return {
        filterBy: filterBy,
        filterValue: null,
      };
    });
  }

  function handleFilterValueChange(
    filterValue: ServiceKey | IndustryKey | null,
  ) {
    setFilters((prev) => {
      return {
        ...prev,
        filterValue: filterValue,
      };
    });
  }

  const filteredWorkItems = services.filter((item) => {
    return item.service == selectedService;
  });

  console.log("filterdWorkItems", filteredWorkItems, filters);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-12">
        {/* <div className="inline-flex border border-gray-300 rounded-md overflow-hidden mb-6">
            {filterByOptions.map((option, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    handleFilterByChange(option.label);
                  }}
                  className={`${
                    option.className
                  } px-8 py-2 text-sm font-medium ${
                    filters.filterBy === option.label ? "bg-yellow-500" : ""
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div> */}
        <div className="w-full max-w-4xl">
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((item, idx) => {
              return (
                <p
                  onClick={() => {
                    setSelectedServices(item.service);
                  }}
                  key={idx}
                  className={`${
                    item.className
                  } px-4 py-1.5 rounded-full text-xs font-medium border border-gray-300 transition-all duration-150 cursor-pointer
                        ${
                          item.service == selectedService
                            ? "ring-2 ring-black"
                            : ""
                        }
                        `}
                >
                  {item.service}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredWorkItems[0].images.map((item, idx) => {
            return (
              <a
                key={idx}
                href={"#"}
                className="block group sm:hover:transform sm:hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative flex items-center justify-center w-full h-auto aspect-square overflow-hidden bg-white rounded-lg p-0">
                  {/* Image as background (cover) so all cards have equal heights */}
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{
                      backgroundImage: `url(${item})`,
                    }}
                    aria-hidden
                  />

                  {/* Gradient overlay that fades in on hover */}
                  {/* <div
                    className="absolute inset-0 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)",
                    }}
                    aria-hidden
                  /> */}

                  {/* Content overlay (title, services, industry) */}
                  {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <h3 className="text-xl font-semibold mb-4 text-center">
                      {item.title}
                    </h3>

                    <div className="text-md text-center">
                      <p className="font-medium mb-1">Services</p>
                      {item.service.map((service, sidx) => {
                        return (
                          <p key={sidx} className="mb-0">
                            {service}
                          </p>
                        );
                      })}
                      <p className="font-medium mt-12 align-bottom">Industry</p>
                      <p className="font-semibold">{item.industry}</p>
                    </div>
                  </div> */}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
