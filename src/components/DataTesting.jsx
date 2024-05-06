import React, { useState , useEffect } from "react";

const DataTesting = () => {
  const [abc, drf] = useState([]);

  useEffect(() => {
    fetch("http://localhost/apidata.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        drf(data.data);
      });
  }, []);
    
  return (
    <section className="api-data py-20">
      <div className="container mx-auto flex gap-3 flex-wrap ">
        {abc.map((dataObj, index) => {
          return (
              <div className="card w-64 bg-white rounded-lg shadow-lg border-solid border-gray-200 border-2" key={index}>
              <div className="card-inner p-3">
                <div className="card-img text-center flex justify-center">
                  <img
                    src={dataObj.profile_pic}
                    alt={dataObj.title}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <div className="card-content">
                  <p className="text-black font-bold uppercase text-center px-2 mt-3">
                    {dataObj.title ?? 'TITLE'}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DataTesting;