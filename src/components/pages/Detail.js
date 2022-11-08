import { Card } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Detail = () => {
const service = useLoaderData();
const {name, img, details, price} = service;

  return <div>
     <h1 class="my-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            Details
          </span>
        </h1>
    <div className="w-2/4 mx-auto">
  <Card imgSrc={img}>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {name}
    </h5>
    <p className="font-semibold">Price: {price}</p>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     {details}
    </p>
  </Card>

  <div>
  <h1 class="my-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            Ratings
          </span>
        </h1>
  </div>
</div>

  </div>;
};

export default Detail;
