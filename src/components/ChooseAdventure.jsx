import React from "react";
import { NavLink } from "react-router-dom";

const ChooseAdventure = () => {
  return (
    <section className="choose-adventure my-20 px-4">
          <div className="container mx-auto">
              <div className="content">
                  <div className="title"><h2 className="font-medium text-5xl pb-10">Choose your adventure</h2></div>
                  <div className="adventures">
                      <div className="item flex flex-col gap-3 md:gap-0 md:flex-row py-10 border-t-2 border-gray-300">
                          <div className="info-left basis-2/6 md:pr-8"><NavLink to="#" className={"overflow-hidden block"}><img src={ window.location.origin + "/images/event-1.jpg" } alt="" className="transition duration-500 ease-in-out hover:scale-110"/></NavLink></div>
                          <div className="info-right basis-4/6 flex flex-col gap-3 items-start md:flex-row  justify-between md:items-center">
                              <div className="middle-info flex flex-col gap-8">
                                  <div className="event-type"><NavLink to="" className={"bg-black text-white px-2 uppercase text-sm font-medium"}>trekking</NavLink></div>
                                  <div className="middle-info-bottom">
                                      <ul className="pl-4"><li className="uppercase text-sm mb-2 text-gray-500 list-disc ">scafell pike in england</li></ul>
                                      <h3 className="entry-title text-2xl font-semibold">Think about power tranning before< br /> you start running</h3>
                                      <p className="price font-bold mt-3">$ 212</p>
                                  </div>

                              </div>
                              <div className="button-arrow bg-gray-300 basis-12 text-center py-7 px-7 text-2xl font-bold cursor-pointer hover:bg-black hover:text-white"><NavLink>+</NavLink></div>
                          </div>
                      </div>

                        <div className="item flex flex-col gap-3 md:gap-0 md:flex-row py-10 border-t-2 border-gray-300">
                          <div className="info-left basis-2/6 md:pr-8"><NavLink to="#" className={"overflow-hidden block"}><img src={ window.location.origin + "/images/event-2.jpg" } alt="" className="transition duration-500 ease-in-out hover:scale-110"/></NavLink></div>
                          <div className="info-right basis-4/6 gap-3 md:flex-row flex-col items-start flex justify-between md:items-center">
                              <div className="middle-info flex flex-col gap-8">
                                  <div className="event-type"><NavLink to="" className={"bg-black text-white px-2 uppercase text-sm font-medium"}>cycling</NavLink></div>
                                  <div className="middle-info-bottom">
                                      <ul className="pl-4"><li className="uppercase text-sm mb-2 text-gray-500 list-disc ">scafell pike in england</li></ul>
                                      <h3 className="entry-title text-2xl font-semibold">Bringing the extreme skiing< br /> closer to everyone</h3>
                                      <p className="price font-bold mt-3">$ 165</p>
                                  </div>

                              </div>
                              <div className="button-arrow bg-gray-300 basis-12 text-center py-7 px-7 text-2xl font-bold cursor-pointer hover:bg-black hover:text-white"><NavLink>+</NavLink></div>
                          </div>
                      </div>

                        <div className="item flex flex-col gap-3 md:gap-0 md:flex-row py-10 border-t-2 border-gray-300">
                          <div className="info-left basis-2/6 md:pr-8"><NavLink to="#" className={"overflow-hidden block"}><img src={ window.location.origin + "/images/event-3.jpg" } alt="" className="transition duration-500 ease-in-out hover:scale-110"/></NavLink></div>
                          <div className="info-right basis-4/6 gap-3 md:flex-row flex-col items-start flex justify-between md:items-center">
                              <div className="middle-info flex flex-col gap-8">
                                  <div className="event-type"><NavLink to="" className={"bg-black text-white px-2 uppercase text-sm font-medium"}>hiking</NavLink></div>
                                  <div className="middle-info-bottom">
                                      <ul className="pl-4"><li className="uppercase text-sm mb-2 text-gray-500 list-disc ">scafell pike in england</li></ul>
                                      <h3 className="entry-title text-2xl font-semibold">Grear list for the most< br /> amazing hiking ever</h3>
                                      <p className="price font-bold mt-3">$ 120</p>
                                  </div>

                              </div>
                              <div className="button-arrow bg-gray-300 basis-12 text-center py-7 px-7 text-2xl font-bold cursor-pointer hover:bg-black hover:text-white"><NavLink>+</NavLink></div>
                          </div>
                      </div>

                          <div className="item flex flex-col gap-3 md:gap-0 md:flex-row py-10 border-t-2 border-gray-300">
                          <div className="info-left basis-2/6 md:pr-8"><NavLink to="#" className={"overflow-hidden block"}><img src={ window.location.origin + "/images/event-4.jpg" } alt="" className="transition duration-500 ease-in-out hover:scale-110"/></NavLink></div>
                          <div className="info-right basis-4/6 gap-3 md:flex-row flex-col items-start flex justify-between md:items-center">
                              <div className="middle-info flex flex-col gap-8">
                                  <div className="event-type"><NavLink to="" className={"bg-black text-white px-2 uppercase text-sm font-medium"}>cycling</NavLink></div>
                                  <div className="middle-info-bottom">
                                      <ul className="pl-4"><li className="uppercase text-sm mb-2 text-gray-500 list-disc ">scafell pike in england</li></ul>
                                      <h3 className="entry-title text-2xl font-semibold">Dynamic dirt jump bike< br /> handling skills</h3>
                                      <p className="price font-bold mt-3">$ 154</p>
                                  </div>

                              </div>
                              <div className="button-arrow bg-gray-300 basis-12 text-center py-7 px-7 text-2xl font-bold cursor-pointer hover:bg-black hover:text-white"><NavLink>+</NavLink></div>
                          </div>
                      </div>
                  </div>
              </div>
      </div>

    </section>
  );
};

export default ChooseAdventure;