const testimonialImages = [
    {
        src:"/testimonial1.png",
        alt: "Testimonial 1"
    },
     {
        src:"/testimonial1.png",
        alt: "Testimonial 1"
    },
     {
        src:"/testimonial1.png",
        alt: "Testimonial 1"
    },
     {
        src:"/testimonial1.png",
        alt: "Testimonial 1"
    }
    ,
     {
        src:"/testimonial1.png",
        alt: "Testimonial 1"
    }, {
        src:"/testimonial1.png",
        alt: "Testimonial 1"
    }
]

export default function FromOurClients() {
  return (
    <div className="max-w-full mx-auto pt-0 pb-24 overflow-hidden 2xl:pt-32 2xl:pb-48">
      <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-semibold mb-8 sm:mb-0">
        <span className="text-[#D75835]">From our</span>{" "}
        <span className="text-[#4B84BE]">Clients</span>
      </h2>

      <div className="w-full overflow-hidden relative xs:mt-8">
        <div className="scroll-wrapper flex space-x-4 ">
          {testimonialImages.map((_, index) => {
            return (
              <img
                key={index}
                src="/testimonial1.png"
                alt="Testimonial 1"
                className="testimonial-img w-[100vw] sm:w-[75vw] md:w-[60vw] lg:w-[52vw] xl:w-[38vw] 2xl:w-[30vw] 
                        h-65 sm:h-[340px] md:h-[440px] lg:h-[500px] xl:h-[560px] 2xl:h-[420px] 
                        object-contain flex-shrink-0 transition-all duration-200 ease-in-out"
              />
            );
          })}
        </div>
      </div>

      <div className="text-center pb-4 md:px-0">
        <h1 className="text-[22px] sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold mt-8">
          <span className="text-[#FF81AE] block">
            Now we are ready to roll out
          </span>
          <span className="text-gray-800 mt-2 md:mt-4">
            the happy carpet for you too!
          </span>
        </h1>
      </div>

      <style></style>
    </div>
  );
}
