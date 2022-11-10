import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Service from './Service';

const Services = () => {
  useTitle('Services');

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))
    .catch(error => console.log(error))
  } , []);

    return (
       <div className='px-8'>
         <h1 className="my-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            Services
          </span>
        </h1>
        <div className='my-14'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
          {
            services.map(service => <Service key={service._id} service={service}></Service>)
          }
        </div>
        </div>
       </div>
    );
};

export default Services;