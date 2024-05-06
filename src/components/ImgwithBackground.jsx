import React from "react";

const ImgwithBackground = () => {
    return (
        <section
            className="img_with_background py-10 my-20 sm:py-44 px-4"
            style={{ backgroundImage: "url(/images/h1-img-20.jpg)", backgroundAttachment : "fixed"}}
      >
        <div className="container mx-auto">
          <div className="image_logo flex items-center justify-center py-20">
            <img src={window.location.origin + "/images/Logo-1.png"} alt="" className="w-32"/>
          </div>
        </div>
      </section>
    );
};
export default ImgwithBackground;
