import React from "react";
import { NavLink } from "react-router-dom";

const PricingPlan = () => { 

    return (
      <scetion class="pricing_plan">
        <div className="container mx-auto pb-20 px-4">
          <div className="sec_title">
            <h2 className="font-medium text-5xl pb-10">Pricing plan</h2>
          </div>
          <div className="w-full relative overflow-x-auto">
            <table className="w-full text-left">
              <thead className=" border-b-2 border-zinc-500">
                <th className="pl-0 py-8 pr-4">Explore our courses</th>
                <th className="text-2xl py-7 px-7 bg-gray-200">
                  Beginner course
                </th>
                <th className="text-2xl py-7 px-7">Medium course</th>
                <th className="text-2xl py-7 px-7">Advance course</th>
              </thead>
              <tbody>
                <tr className=" border-b-2 border-zinc-500">
                  <td className="pl-0 py-4 pr-9">Pricing</td>
                  <td className="py-4 px-9 text-4xl md:text-7xl font-bold bg-gray-200">
                    $270
                  </td>
                  <td className="py-4 px-9 text-4xl md:text-7xl font-bold">
                    $79
                  </td>
                  <td className="py-4 px-9 text-4xl md:text-7xl font-bold">
                    $125
                  </td>
                </tr>
                <tr className=" border-b-2 border-zinc-500">
                  <td className="pl-0 py-4 pr-9">Hski / Snowboard</td>
                  <td className="py-4 px-9 bg-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <circle cx="16" cy="16" r="16" fill="#000"></circle>
                      <g fill="#fff">
                        <path d="m12.818 19.535 8.48528137-8.48528137 1.41421357 1.41421356-8.48528138 8.48528137z"></path>
                        <path d="m14.232 20.949-4.94974747-4.94974747 1.41421356-1.41421356 4.94974747 4.94974747z"></path>
                      </g>
                    </svg>
                  </td>
                  <td className="py-4 px-9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <circle cx="16" cy="16" r="16" fill="#f7f7f7"></circle>
                      <g fill="#171717">
                        <path d="m12.818 19.535 8.48528137-8.48528137 1.41421357 1.41421356-8.48528138 8.48528137z"></path>
                        <path d="m14.232 20.949-4.94974747-4.94974747 1.41421356-1.41421356 4.94974747 4.94974747z"></path>
                      </g>
                    </svg>
                  </td>
                  <td className="py-4 px-9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <circle cx="16" cy="16" r="16" fill="#f7f7f7"></circle>
                      <g fill="#171717">
                        <path d="m12.818 19.535 8.48528137-8.48528137 1.41421357 1.41421356-8.48528138 8.48528137z"></path>
                        <path d="m14.232 20.949-4.94974747-4.94974747 1.41421356-1.41421356 4.94974747 4.94974747z"></path>
                      </g>
                    </svg>
                  </td>
                </tr>
                <tr className=" border-b-2 border-zinc-500">
                  <td className="pl-0 py-4 pr-9">Stiks and helmets</td>
                  <td className="py-4 px-9  bg-gray-200"></td>
                  <td className="py-4 px-9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <circle cx="16" cy="16" r="16" fill="#f7f7f7"></circle>
                      <g fill="#171717">
                        <path d="m12.818 19.535 8.48528137-8.48528137 1.41421357 1.41421356-8.48528138 8.48528137z"></path>
                        <path d="m14.232 20.949-4.94974747-4.94974747 1.41421356-1.41421356 4.94974747 4.94974747z"></path>
                      </g>
                    </svg>
                  </td>
                  <td className="py-4 px-9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <circle cx="16" cy="16" r="16" fill="#f7f7f7"></circle>
                      <g fill="#171717">
                        <path d="m12.818 19.535 8.48528137-8.48528137 1.41421357 1.41421356-8.48528138 8.48528137z"></path>
                        <path d="m14.232 20.949-4.94974747-4.94974747 1.41421356-1.41421356 4.94974747 4.94974747z"></path>
                      </g>
                    </svg>
                  </td>
                </tr>
                <tr className=" border-b-2 border-zinc-500">
                  <td className="pl-0 py-4 pr-9">Cross-country set</td>
                  <td className="py-4 px-9  bg-gray-200"></td>
                  <td className="py-4 px-9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <circle cx="16" cy="16" r="16" fill="#f7f7f7"></circle>
                      <g fill="#171717">
                        <path d="m12.818 19.535 8.48528137-8.48528137 1.41421357 1.41421356-8.48528138 8.48528137z"></path>
                        <path d="m14.232 20.949-4.94974747-4.94974747 1.41421356-1.41421356 4.94974747 4.94974747z"></path>
                      </g>
                    </svg>
                  </td>
                  <td className="py-4 px-9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <circle cx="16" cy="16" r="16" fill="#f7f7f7"></circle>
                      <g fill="#171717">
                        <path d="m12.818 19.535 8.48528137-8.48528137 1.41421357 1.41421356-8.48528138 8.48528137z"></path>
                        <path d="m14.232 20.949-4.94974747-4.94974747 1.41421356-1.41421356 4.94974747 4.94974747z"></path>
                      </g>
                    </svg>
                  </td>
                </tr>
                <tr className=" border-b-2 border-zinc-500">
                  <td className="pl-0 py-4 pr-9">Premium ski</td>
                  <td className="py-4 px-9  bg-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <circle cx="16" cy="16" r="16" fill="#f7f7f7"></circle>
                      <g fill="#171717">
                        <path d="m12.818 19.535 8.48528137-8.48528137 1.41421357 1.41421356-8.48528138 8.48528137z"></path>
                        <path d="m14.232 20.949-4.94974747-4.94974747 1.41421356-1.41421356 4.94974747 4.94974747z"></path>
                      </g>
                    </svg>
                  </td>
                  <td className="py-4 px-9"></td>
                  <td className="py-4 px-9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <circle cx="16" cy="16" r="16" fill="#f7f7f7"></circle>
                      <g fill="#171717">
                        <path d="m12.818 19.535 8.48528137-8.48528137 1.41421357 1.41421356-8.48528138 8.48528137z"></path>
                        <path d="m14.232 20.949-4.94974747-4.94974747 1.41421356-1.41421356 4.94974747 4.94974747z"></path>
                      </g>
                    </svg>
                  </td>
                </tr>
                <tr className=" border-b-2 border-zinc-500">
                  <td className="pl-0 py-4 pr-9">Instructor</td>
                  <td className="py-4 px-9  bg-gray-200"></td>
                  <td className="py-4 px-9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <circle cx="16" cy="16" r="16" fill="#f7f7f7"></circle>
                      <g fill="#171717">
                        <path d="m12.818 19.535 8.48528137-8.48528137 1.41421357 1.41421356-8.48528138 8.48528137z"></path>
                        <path d="m14.232 20.949-4.94974747-4.94974747 1.41421356-1.41421356 4.94974747 4.94974747z"></path>
                      </g>
                    </svg>
                  </td>
                  <td className="py-4 px-9"></td>
                </tr>
                <tr>
                  <td className="pl-0 py-4 pr-9"></td>
                  <td className="py-4 px-9  bg-gray-200 text-center">
                    <NavLink
                      to=""
                      className={
                        "py-4 px-4 uppercase bg-black text-white font-bold text-sm block w-fit m-auto"
                      }
                    >
                      purchase now
                    </NavLink>
                  </td>
                  <td className="py-4 px-9 text-center">
                    <NavLink
                      to=""
                      className={
                        "py-4 px-4 uppercase bg-black text-white font-bold text-sm text-sm block w-fit m-auto"
                      }
                    >
                      purchase now
                    </NavLink>
                  </td>
                  <td className="py-4 px-9 text-center">
                    <NavLink
                      to=""
                      className={
                        "py-4 px-4 uppercase bg-black text-white font-bold text-sm text-sm block w-fit m-auto"
                      }
                    >
                      purchase now
                    </NavLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </scetion>
    );
};
export default PricingPlan;