import React from "react";

const LeavePlanning = () => {
  return (
    <section className="leave-planning bg-lime-200 px-4">
      <div className="container mx-auto">
        <div className="content_cont flex flex-col lg:flex-row gap-3 items-center">
          <div className="image-cont basis-full lg:basis-2/4">
            <div
              className="image bg-no-repeat  parallax-bg"
              style={{ backgroundImage: "url(/images/h1-img-22.jpg)",backgroundSize:"cover" }}
            >
              <img
                src={window.location.origin + "/images/h1-mask-img-01c (2).png"}
                alt=""
              />
            </div>
          </div>
          <div className="text basis-full lg:basis-2/4 lg:pl-20 py-6">
            <h2 className="text-black font-bold text-5xl md:text-8xl uppercase mb-4">
              leave the
              <br /> planning
              <br /> to us
            </h2>
            <p className="my-4 text-2xl lg:pr-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              imperdiet magna at ex semper, at efficitur erat ullamcorper.
            </p>
            <button
              type="button"
              className="uppercase bg-black text-white py-2 px-6"
            >
              read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeavePlanning;
