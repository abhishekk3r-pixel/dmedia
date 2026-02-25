"use client";

const imageAnimations = [
  {
    src: "/a4.png",
    alt: "Circle 1",
    dimension: "w-10 sm:w-16 md:w-24",
    style: {
      transitionDelay: "546.185ms",
      animation: "2s ease-in-out 393.108ms infinite normal none running float",
    },
    position:
      "left-2 bottom-40 sm:left-48 sm:top-0 md:left-[35%] md:top-10  lg:left-[30%] lg:top-10",
  },
  {
    src: "/work/w/Founders/1.png",
    alt: "Circle 10",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "995.083ms",
      animation: "2s ease-in-out 340.855ms infinite normal none running float",
    },
    position:
      "right-[20%] bottom-24 sm:right-40 sm:bottom-24 md:right-[10%] md:top-10  lg:right-[15%] lg:bottom-32",
  },
  {
    src: "/a3.png",
    alt: "Circle 2",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "682.99ms",
      animation:
        "2s ease-in-out 0.0692576ms infinite normal none running float",
    },
    position:
      "left-4 sm:left-12 md:left-2 top-64 md:top-2  lg:left-10 lg:top-24",
  },
  {
    src: "/work/w/Founders/2.png",
    alt: "Circle 4",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "948.463ms",
      animation: "2s ease-in-out 95.7885ms infinite normal none running float",
    },
    position:
      "left-1/4 sm:right-2/3 top-0 md:top-2 md:left-[15%] lg:left-[15%] lg:top-16",
  },
  {
    src: "/pink.png",
    alt: "Circle 5",
    dimension: "w-8 sm:w-24 md:w-24",
    style: {
      transitionDelay: "674.011ms",
      animation: "2s ease-in-out 250.514ms infinite normal none running float",
    },
    position:
      "right-20 top-52 sm:right-40 sm:top-3/4 md:right-24 md:top-96 lg:right-40 lg:top-80",
  },
  {
    src: "/a3.png",
    alt: "Circle 6",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "960.364ms",
      animation: "2s ease-in-out 486.561ms infinite normal none running float",
    },
    position:
      "left-96 top-0 sm:right-3/4 sm:top-[100%] md:top-[150%] lg:left-1/2 lg:top-10",
  },
  {
    src: "/a4.png",
    alt: "Circle 7",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "391.1ms",
      animation: "2s ease-in-out 875.265ms infinite normal none running float",
    },
    position:
      "right-8 sm:right-20 md:right-12 bottom-32 md:bottom-[20%] lg:right-24 lg:bottom-40",
  },
  {
    src: "/a3.png",
    alt: "Circle 8",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "315.172ms",
      animation: "2s ease-in-out 519.599ms infinite normal none running float",
    },
    position:
      "right-48 sm:right-20 md:right-12 bottom-40 md:top-[140%] lg:right-64 lg:top-72",
  },
  {
    src: "/work/w/Founders/vikram.jpeg",
    alt: "Circle 9",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "708.664ms",
      animation: "2s ease-in-out 245.348ms infinite normal none running float",
    },
    position:
      "left-40 sm:left-1/3 top-48 md:top-96 md:left-[15%] lg:left-[15%] lg:top-[110%]",
  },
  {
    src: "/pink.png",
    alt: "Circle 10",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "66.3679ms",
      animation: "2s ease-in-out 464.431ms infinite normal none running float",
    },
    position:
      "left-16 top-12 sm:right-3/4 sm:top-[100%] md:top-[90%] lg:left-1/4 lg:top-14",
  },
  {
    src: "/pink.png",
    alt: "Circle 11",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "439.489ms",
      animation: "2s ease-in-out 496.956ms infinite normal none running float",
    },
    position: "left-[55%] sm:right-2/3 top-48 md:top-0 lg:left-3/4 lg:top-40",
  },
  {
    src: "/a4.png",
    alt: "Circle 12",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "587.124ms",
      animation: "2s ease-in-out 162.528ms infinite normal none running float",
    },
    position:
      "left-48 top-[175%] md:top-[95%] md:left-2/4 lg:left-1/2 lg:top-[80%]",
  },
];

const imageAnimationsDesktop = [
  {
    src: "/a4.png",
    alt: "Circle 1",
    dimension: "w-10 sm:w-16 md:w-24",
    style: {
      transitionDelay: "267.179ms",
      animation: "2s ease-in-out 443.231ms infinite normal none running float",
    },
    position: "left-2 bottom-40 sm:left-48 sm:top-0 md:left-[35%]",
  },
  {
    src: "/work/w/Founders/2.png",
    alt: "Circle 10",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "94.5845ms",
      animation: "2s ease-in-out 177.425ms infinite normal none running float",
    },
    position: "right-[20%] bottom-24 sm:right-40 sm:bottom-24 md:right-[20%]",
  },
  {
    src: "/a3.png",
    alt: "Circle 2",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "713.848ms",
      animation: "2s ease-in-out 985.268ms infinite normal none running float",
    },
    position: "left-4 sm:left-12 md:left-6 top-64 md:top-2",
  },
  {
    src: "/work/w/Founders/vikram.jpeg",
    alt: "Circle 4",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "682.99ms",
      animation:
        "2s ease-in-out 0.0692576ms infinite normal none running float",
    },
    position: "left-1/4 sm:right-2/3 top-0 md:top-2 md:left-[15%]",
  },
  {
    src: "/pink.png",
    alt: "Circle 5",
    dimension: "w-8 sm:w-24 md:w-48",
    style: {
      transitionDelay: "322.068ms",
      animation: "2s ease-in-out 834.826ms infinite normal none running float",
    },
    position: "right-20 top-52 sm:right-40 sm:top-3/4 md:right-64 md:top-96",
  },
  {
    src: "/a3.png",
    alt: "Circle 6",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "593.323ms",
      animation: "2s ease-in-out 695.659ms infinite normal none running float",
    },
    position: "left-96 top-0 sm:right-3/4 sm:top-[100%] md:top-[150%]",
  },
  {
    src: "/a4.png",
    alt: "Circle 7",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "481.647ms",
      animation: "2s ease-in-out 971.887ms infinite normal none running float",
    },
    position: "right-8 sm:right-20 md:right-12 bottom-32 md:bottom-[20%]",
  },
  {
    src: "/a3.png",
    alt: "Circle 8",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "896.755ms",
      animation: "2s ease-in-out 948.276ms infinite normal none running float",
    },
    position: "right-48 sm:right-20 md:right-12 bottom-40 md:top-[140%]",
  },
  {
    src: "/work/w/Founders/1.png",
    alt: "Circle 9",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "756.934ms",
      animation: "2s ease-in-out 277.421ms infinite normal none running float",
    },
    position: "left-20 sm:left-1/3 top-48 md:top-96 ",
  },
  {
    src: "/pink.png",
    alt: "Circle 10",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "609.809ms",
      animation: "2s ease-in-out 816.057ms infinite normal none running float",
    },
    position: "left-16 top-12 sm:right-3/4 sm:top-[100%] md:top-[90%]",
  },
  {
    src: "/pink.png",
    alt: "Circle 11",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "824.103ms",
      animation: "2s ease-in-out 986.856ms infinite normal none running float",
    },
    position: "left-[55%] sm:right-2/3 top-48 md:top-0",
  },
  {
    src: "/a4.png",
    alt: "Circle 12",
    dimension: "w-10 sm:w-20 md:w-32",
    style: {
      transitionDelay: "753.003ms",
      animation: "2s ease-in-out 169.042ms infinite normal none running float",
    },
    position: "left-48 top-[175%] md:top-[95%] md:left-2/4",
  },
];

type AnimatedCirclesProps = {
    isLgUp: boolean
}; 

export default function AnimatedCircles(props: AnimatedCirclesProps) {

  const {isLgUp} = props;

  return (
    <div className="relative h-screen max-sm:h-auto max-sm:min-h-100 sm:h-auto sm:min-h-75 md:min-h-screen bg-white mt-16">
      <div className="relative pt-16 sm:pt-24 md:pt-32 px-4 h-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl md:text-[80px] font-bold mb-2 md:mb-4 opacity-0 transform translate-y-4 animate-fade-in-up font-sans">
            We are
          </h1>
          <h2
            className="text-4xl sm:text-6xl md:text-[80px] font-bold text-[#4B84BE] opacity-0 transform translate-y-4 animate-fade-in-up animation-delay-200 font-sans"
            id="blue"
          >
            The D-media Company
          </h2>
        </div>
        {(isLgUp ? imageAnimationsDesktop : imageAnimations).map(
          (image, index) => {
            return (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`
                                absolute rounded-full
                                ${image.dimension}
                                ${image.position} 
                                transition-all duration-1000 ease-in-out
                                translate-y-0 opacity-100
                            `}
                style={image.style}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
