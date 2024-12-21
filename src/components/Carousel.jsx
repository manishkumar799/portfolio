import React, { useRef } from "react";

const Carousel = ({ images }) => {
  const carouselRef = useRef(null);

  const scrollTo = (direction) => {
    console.log(carouselRef)
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = direction === "next" ? clientWidth : -clientWidth;
      carouselRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex items-center w-full sm:min-w-[400px] min-w-[240px] max-w-3xl mx-auto overflow-hidden">
      {/* Horizontal Scrolling Container */}
      <div
        ref={carouselRef}
        className="flex w-full overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full snap-center mx"
            style={{ scrollSnapAlign: "center" }}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-contain !max-w-[768px] !max-h-[300px]"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => scrollTo("prev")}
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-gray-300 text-black p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
      >
        &#8249;
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scrollTo("next")}
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-gray-300 text-black p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
