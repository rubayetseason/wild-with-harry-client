import { Button, Card } from "flowbite-react";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Service = ({ service }) => {
  const { name, img, details, price, _id } = service;
  return (
    <div className="max-w-sm">
      <Card>
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {details.slice(0, 100)} ...
        </p>
        <p className="font-semibold">Price : $ {price}</p>
        <div>
          <Button className="mx-auto" gradientDuoTone="purpleToPink">
            View Details
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Service;
