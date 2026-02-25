const icons = [
  { src: "/clients/1.png", alt: "Client 1" },
  { src: "/clients/2.png", alt: "Client 2" },
  { src: "/clients/3.png", alt: "Client 3" },
  { src: "/clients/4.png", alt: "Client 4" },
  { src: "/clients/5.png", alt: "Client 5" },
  { src: "/clients/6.png", alt: "Client 6" },
  { src: "/clients/7.png", alt: "Client 7" },
  { src: "/clients/8.png", alt: "Client 8" },
  { src: "/clients/9.png", alt: "Client 9" },
  { src: "/clients/10.png", alt: "Client 10" },
  { src: "/clients/11.png", alt: "Client 11" },
  { src: "/clients/12.png", alt: "Client 12" },
  { src: "/clients/13.png", alt: "Client 13" },
  { src: "/clients/14.png", alt: "Client 14" },
  { src: "/clients/15.png", alt: "Client 15" },
  { src: "/clients/16.png", alt: "Client 16" },
  { src: "/clients/17.png", alt: "Client 17" },
  { src: "/clients/18.png", alt: "Client 18" },
  { src: "/clients/19.png", alt: "Client 19" },
  { src: "/clients/20.png", alt: "Client 20" },
  { src: "/clients/21.png", alt: "Client 21" },
  { src: "/clients/22.png", alt: "Client 22" },
  { src: "/clients/23.png", alt: "Client 23" },
  { src: "/clients/24.png", alt: "Client 24" },
  { src: "/clients/25.png", alt: "Client 25" },
  { src: "/clients/26.png", alt: "Client 26" },
  { src: "/clients/27.png", alt: "Client 27" },
  { src: "/clients/28.png", alt: "Client 28" },
  { src: "/clients/29.png", alt: "Client 29" },
  { src: "/clients/30.png", alt: "Client 30" },
  { src: "/clients/31.png", alt: "Client 31" },
  { src: "/clients/32.png", alt: "Client 32" },
  { src: "/clients/33.png", alt: "Client 33" },
  { src: "/clients/34.png", alt: "Client 34" },
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
            animation: "40s linear 0s infinite normal none running carousel",
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
  );
}
