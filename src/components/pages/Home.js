import React, { useEffect, useState } from "react";
import harry from "../../Assets/harry.png";
import Lottie from "lottie-react";
import elephant from "../../Assets/Elephant.json";
import africa from "../../Assets/Africa.json";
import monkey from "../../Assets/Monkey.json";
import Service from "./Service";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [limService, setLimService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/limited")
      .then((res) => res.json())
      .then((data) => setLimService(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="my-16 px-12 flex flex-col md:flex-col lg:flex-row justify-evenly">
        <img
          src={harry}
          className="w-40 md:w-60 lg:w-60 mx-auto mb-5 border-4 border-blue-500 rounded-full"
          alt=""
        />
        <div>
          <h1 class="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
              <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                Welcome to{" "}
                <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  Wild with Harry
                </span>
              </h1>
            </span>
          </h1>

          <p class="text-lg my-5 font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Explore the beauty of our mother earth with me, Harry Harrington, a
            self-taught wildlife photographer. <br />
            Explore various services provided by me while diving deep into the
            wilderness of the ecosystem. <br />
            <br />
            <span className="font-semibold bg-blue-600 text-white p-2 rounded-sm">
              LET'S EXPLORE THE WORLD TOGETHER
            </span>
          </p>
        </div>
      </div>
      <div className="my-20 px-10">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Explore the wilderness{" "}
          <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            with Harry
          </span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row px-16">
        <div className="px-5 mb-4 w-full md:w-3/4 lg:w-3/4 mx-auto">
          <Lottie animationData={elephant} loop={true} />
        </div>
        <div className="px-5 mb-4 w-full md:w-3/4 lg:w-3/4 mx-auto">
          <Lottie animationData={africa} loop={true} />
        </div>
        <div className="px-5 mb-4 w-full md:w-3/4 lg:w-3/4 mx-auto">
          <Lottie animationData={monkey} loop={true} />
        </div>
      </div>

      <div className="my-10">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            Services
          </span>
        </h1>
      </div>
      <div className="px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {limService.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
      <div>
      <Link to='/services'>
      <Button className="mx-auto my-10" gradientMonochrome="info">
      See More
    </Button></Link>
      </div>
    </div>
  );
};

export default Home;
