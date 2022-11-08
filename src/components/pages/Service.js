import { Button, Card } from 'flowbite-react';
import React from 'react';

const Service = ({service}) => {
    const {name, img, details, price, _id} = service;
    return (
        <div className="max-w-sm">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={img}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {name}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     {details.slice(0, 100)} ...
    </p>
    <p className='font-semibold'>
        Price : $ {price}
    </p>
    <div>
    <Button className='mx-auto' gradientDuoTone="pinkToOrange">
      View Details
    </Button>
    </div>
  </Card>
</div>
    );
};

export default Service;