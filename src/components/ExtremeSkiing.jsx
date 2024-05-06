import React from "react";

const ExtremeSkiing = () => {
    return (
      <section className="extreme-skiing py-20 px-4">
        <div className="container mx-auto">
          <div className="content-cont flex flex-col lg:flex-row gap-8">
            <div className="title basis-4/12">
              <h2 className="text-black text-5xl font-bold">
                Extreme skiing <br />
                and adrenaline
                <br /> rush tour
              </h2>
            </div>
            <div className="content-cont-inner grid sm:grid-cols-2 gap-5 gap-y-7 basis-3/4">
              <div className="item">
                <img
                  src={window.location.origin + "/images/home-3-iwt-1.png"}
                  alt=""
                  className="w-10 mb-6"
                />
                <h3 className="text-black font-bold text-2xl mb-2">
                  Equipment
                </h3>
                <p className="pr-10">
                  Lorem ipsum dolor sit amet, consetetur adi pisc ing elit. Nunc
                  bibendum maximus orci, vitae male suada est pulvinar eu.
                </p>
              </div>
              <div className="item">
                <img
                  src={window.location.origin + "/images/home-3-iwt-2.png"}
                  alt=""
                  className="w-10 mb-6"
                />
                <h3 className="text-black font-bold text-2xl mb-2">
                  Trail difficulty variety
                </h3>
                <p className="pr-10">
                  Lorem ipsum dolor sit amet, consetetur adi pisc ing elit. Nunc
                  bibendum maximus orci, vitae male suada est pulvinar eu.
                </p>
              </div>
              <div className="item">
                <img
                  src={window.location.origin + "/images/home-3-iwt-3.png"}
                  alt=""
                  className="w-10 mb-6"
                />
                <h3 className="text-black font-bold text-2xl mb-2">
                  Pro instructions
                </h3>
                <p className="pr-10">
                  Lorem ipsum dolor sit amet, consetetur adi pisc ing elit. Nunc
                  bibendum maximus orci, vitae male suada est pulvinar eu.
                </p>
              </div>
              <div className="item">
                <img
                  src={window.location.origin + "/images/home-3-iwt-4.png"}
                  alt=""
                  className="w-10 mb-6"
                />
                <h3 className="text-black font-bold text-2xl mb-2">
                  Good locations
                </h3>
                <p className="pr-10">
                  Lorem ipsum dolor sit amet, consetetur adi pisc ing elit. Nunc
                  bibendum maximus orci, vitae male suada est pulvinar eu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};
export default ExtremeSkiing;