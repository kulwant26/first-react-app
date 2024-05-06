import React from "react";
import { Link, NavLink } from "react-router-dom";

const ExploreActivity = () => { 

    return (
      <section className="explore_activity py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="card-container grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="group card relative overflow-hidden">
              <div className="img-cont transtions transition-all group-hover:-translate-y-6">
                <img
                  src={window.location.origin + "/images/h1-img-01.jpg"}
                  alt="item-1"
                  className="w-full"
                />
              </div>
              <div className="card-content absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center ">
                <h3 className="font-bold text-white text-3xl">Snow Sports</h3>
              </div>
              <div className="exploer_activity_btn absolute bottom-0 right-0 left-0 transition-all translate-y-full group-hover:translate-y-0">
                <NavLink
                  to="#"
                  className={
                    "w-full bg-black block text-center font-bold text-white py-5"
                  }
                >
                  Explore Activity
                </NavLink>
              </div>
            </div>
            <div className="group card relative overflow-hidden">
              <div className="img-cont transtions transition-all group-hover:-translate-y-6">
                <img
                  src={window.location.origin + "/images/h1-img-02.jpg"}
                  alt="item-1"
                  className="w-full"
                />
              </div>
              <div className="card-content absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center ">
                <h3 className="font-bold text-white text-3xl">Running</h3>
              </div>
              <div className="exploer_activity_btn absolute bottom-0 right-0 left-0 transition-all translate-y-full group-hover:translate-y-0">
                <NavLink
                  to="#"
                  className={
                    "w-full bg-black block text-center font-bold text-white py-5"
                  }
                >
                  Explore Activity
                </NavLink>
              </div>
            </div>
            <div className="group card relative overflow-hidden">
              <div className="img-cont transtions transition-all group-hover:-translate-y-6">
                <img
                  src={window.location.origin + "/images/h1-img-03.jpg"}
                  alt="item-1"
                  className="w-full"
                />
              </div>
              <div className="card-content absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center ">
                <h3 className="font-bold text-white text-3xl">Hiking</h3>
              </div>
              <div className="exploer_activity_btn absolute bottom-0 right-0 left-0 transition-all translate-y-full group-hover:translate-y-0">
                <NavLink
                  to="#"
                  className={
                    "w-full bg-black block text-center font-bold text-white py-5"
                  }
                >
                  Explore Activity
                </NavLink>
              </div>
            </div>
            <div className="group card relative overflow-hidden">
              <div className="img-cont transtions transition-all group-hover:-translate-y-6">
                <img
                  src={window.location.origin + "/images/h1-img-04.jpg"}
                  alt="item-1"
                  className="w-full"
                />
              </div>
              <div className="card-content absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center ">
                <h3 className="font-bold text-white text-3xl">Climbing</h3>
              </div>
              <div className="exploer_activity_btn absolute bottom-0 right-0 left-0 transition-all translate-y-full group-hover:translate-y-0">
                <NavLink
                  to="#"
                  className={
                    "w-full bg-black block text-center font-bold text-white py-5"
                  }
                >
                  Explore Activity
                </NavLink>
              </div>
            </div>   
          </div>
        </div>
      </section>
    );
};

export default ExploreActivity;