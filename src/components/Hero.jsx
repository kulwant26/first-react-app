import React from "react";

const Hero = () => {
  return (
      <section className="hero-sec bg-gradient-to-r from-cyan-500 to-blue-500 h-1/2">
        <div className="container mx-auto">
          <div className="content py-32 lg:py-72 text-center">
                    <h1 className="uppercase text-white font-bold text-center text-4xl sm:text-6xl lg:text-8xl">adventure < br /> begins here</h1>
                    <button type="button" className="bg-white py-4 px-10 mt-10 capitalize font-bold">read more</button>
          </div>
        </div>
      </section>
    );
}

export default Hero;