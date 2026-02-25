"use client";

const founderPic = "/work/w/Founders/founder.jpeg";
const founderName = "Anshu Rana";
const info = {
  desc1: "Not just a graphic designer but the visionary force behind Your Regular Company.",
  desc2: `colorful personality and
            out-of-the-box thinking became the bedrock of our ideology, adding magic and color
            to our work.`,
  desc3: `Our unique selling proposition? Creating the extraordinary out of the regular,
            because, well, why settle for the mundane?`,
}

export default function Founder() {
  return (
    <div className="flex flex-col xl:flex-row justify-between items-center w-full gap-12 md:gap-8">
      <div className="flex flex-col space-y-6 md:space-y-8 w-full md:max-w-2xl order-2 xl:order-1">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-center lg:text-left"
          style={{ color: "rgb(67, 142, 136)" }}
        >
          Meet Our Founder
        </h1>

        <h2
          className="text-2xl md:text-3xl mb-6 md:mb-12 font-normal"
          style={{ color: "rgb(215, 88, 53)", textAlign: "left" }}
        >
          {info.desc1}
        </h2>

        <div className="space-y-6 md:space-y-8">
          <p className="text-xl md:text-2xl font-light leading-relaxed md:pr-8 lg:pr-28 text-center lg:text-left">
            <span className="font-semibold">Soha Parvez's</span> {info.desc2}
          </p>

          <p className="text-xl md:text-2xl font-light leading-relaxed md:pr-8 lg:pr-40 text-center lg:text-left">
            {info.desc3}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center order-1 xl:order-2">
        <div className="w-64 h-80 md:w-80 md:h-96 bg-gray-200 rounded-lg mb-4 md:mb-6 flex items-center justify-center overflow-hidden">
          <img
            src={founderPic}
            alt="Soha Parvez"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold">{founderName}</h3>
      </div>
    </div>
  );
}