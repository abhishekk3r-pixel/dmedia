const icons = [
  { src: "/home/icons/1.png", alt: "Hundred Hands Logo" },
  { src: "/home/icons/2.png", alt: "Abiliti Logo" },
  { src: "/home/icons/3.png", alt: "Icon 3" },
  { src: "/home/icons/4.png", alt: "Icon 4" },
  { src: "/home/icons/5.png", alt: "Icon 5" },
  { src: "/home/icons/6.png", alt: "Icon 6" },
  { src: "/home/icons/7.png", alt: "Icon 7" },
  { src: "/home/icons/8.png", alt: "Icon 8" },
  { src: "/home/icons/9.png", alt: "Icon 9" },
  { src: "/home/icons/10.png", alt: "Icon 10" },
];

export default function LogoCarausol() {
    const triplicatedLogos = [...icons, ...icons, ...icons];

    return (
                <div className="w-full flex items-center justify-center z-30 mt-8 md:-mt-28 lg:-mt-32">
          <div
            className="transition-transform duration-300 ease-in-out overflow-hidden"
            style={{
              height: "175px",
              backgroundColor: "rgb(237, 144, 118)",
              width: "150%",
              transform: "rotate(7deg) translateX(-10%)",
              position: "relative",
              marginLeft: "-25%",
              marginRight: "-25%",
            }}
          >
            <div
              className="flex absolute top-0 left-0 h-full"
              style={{
                animation:
                  "40s linear 0s infinite normal none running carousel",
                width: "max-content",
                willChange: "transform",
              }}
            >
              {triplicatedLogos.map((icon, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center w-18.75 md:w-31.25 p-2"
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-full h-auto grayscale transition-all duration-300 hover:grayscale-0"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    )

}