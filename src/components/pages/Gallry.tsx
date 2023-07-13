import React from "react";
import { galary } from "../../models/model";

const Gallry = () => {
  let allImages: galary[] = [
    {
      img: "https://popmenucloud.com/cdn-cgi/image/width%3D720%2Cheight%3D720%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/urvetgoh/9cb330dd-91bb-4396-ae24-00808440c0de.jpg",
    },
    {
      img: "https://popmenucloud.com/cdn-cgi/image/width%3D720%2Cheight%3D720%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/urvetgoh/064e087f-dc29-4381-8b0c-ff529009fe22.jpg",
    },
    {
      img: "https://popmenucloud.com/cdn-cgi/image/width%3D720%2Cheight%3D720%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/urvetgoh/9ed3d280-4ed4-48dc-87a8-8c2ed280bf4e.jpg",
    },
    {
      img: "https://popmenucloud.com/cdn-cgi/image/width%3D720%2Cheight%3D720%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/urvetgoh/4438d43e-2c99-4a61-971b-0ab58dbf5428.jpg",
    },
  ];
  return (
    
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        {allImages.map((x) => {
          return <div className="p-1 galry-img col">
            <img src={x.img} alt="" />
          </div>;
        })}
      </div>
    
  );
};

export default Gallry;
