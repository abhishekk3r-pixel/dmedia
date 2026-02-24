type LgCardProps = {
  backgroundStyle: { backgroundColor: string; opacity: number };
  icon: string;
  color: string;
  title: string;
  description: string;
  list: string[];
};








type LgAboveCardProps = {
  backgroundStyle: { backgroundColor: string; opacity: number };
  icon: string;
  color: string;
  title: string;
  description: string;
  list: string[];
  bgImage: string;
};

export function LgAboveCard(props: LgAboveCardProps) {
  const { icon, color, title, description, list, bgImage } = props;
  return (
    <div
      className="relative w-full mx-auto flex flex-col md:flex-row rounded-lg sm:rounded-xl overflow-visible"
      style={{
        backgroundSize: "80% 420px",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        minHeight: "500px",
        position: "relative",
        overflow: "visible",
        marginBottom: "0rem",
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-opacity-0 sm:bg-opacity-0"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center p-5 sm:p-6 w-full overflow-visible">
        <div className="w-full md:w-1/3 flex items-center justify-center mb-5 ml-36 md:mb-0 overflow-visible">
          <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-56 md:h-56 px-2 flex items-center justify-center">
            <img
              src={icon}
              alt={icon}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-center items-start text-left text-black px-0 sm:px-5 md:pr-6 lg:pr-16">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-2"
            style={{ color }}
          >
            {title}
          </h2>
          <p className="text-lg sm:text-xl mb-4 font-medium">{description}</p>
          <ul className="w-full mb-6 space-y-2">
            {list.map((item, idx) => {
              return (
                <li
                  className="flex items-start gap-2 text-base sm:text-lg"
                  key={idx}
                >
                  <span
                    className="w-2 h-2 mt-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: color }}
                  ></span>
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-row gap-3 w-[270px]">
            <button
              className="px-4 py-2 text-white hover:opacity-90 transition w-1/2 "
              style={{ backgroundColor: color }}
            >
              Contact Us
            </button>
            <button
              className="px-4 py-2 text-white hover:opacity-90 transition w-1/2 "
              style={{ backgroundColor: color }}
            >
              Our Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



export function LgCard(props: LgCardProps) {
  const { backgroundStyle, icon, color, title, description, list } =
    props;
  return (
    <div className="relative h-full w-auto mx-auto mb-6 pt-6 pr-6 pl-6 pb-12 overflow-visible">
      {/* Background overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: backgroundStyle.backgroundColor,
          opacity: backgroundStyle.opacity,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-left">
        {/* Icon */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center mb-4">
          <img src={icon} alt={icon} className="w-full h-full object-contain" />
        </div>

        <div className="w-full flex flex-col text-left">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-2"
            style={{ color: color }}
          >
            {title}
          </h2>

          <p className="text-lg sm:text-xl mb-4 font-medium">{description}</p>

          <ul className="w-full mb-6 space-y-2">
            {list.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-base sm:text-lg"
              >
                <span
                  className="w-2 h-2 mt-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: color }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-3 w-full">
            <button
              className="px-4 py-2 text-white hover:opacity-90 transition w-1/2"
              style={{ backgroundColor: color }}
            >
              Contact Us
            </button>

            <button
              className="px-4 py-2 text-white hover:opacity-90 transition w-1/2"
              style={{ backgroundColor: color }}
            >
              Our Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}