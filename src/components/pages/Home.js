import React, { useEffect, useState } from "react";
import harry from "../../Assets/harry.png";
import Lottie from "lottie-react";
import elephant from "../../Assets/Elephant.json";
import africa from "../../Assets/Africa.json";
import monkey from "../../Assets/Monkey.json";
import Service from "./Service";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import pic1 from "../../Assets/fet1.jpg";
import pic2 from "../../Assets/fet2.jpg";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  const [limService, setLimService] = useState([]);

  useEffect(() => {
    fetch("https://wild-with-harry-server.vercel.app/limited")
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
          <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
              <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                Welcome to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  Wild with Harry
                </span>
              </h1>
            </span>
          </h1>

          <p className="text-lg my-5 font-normal text-gray-500 lg:text-xl dark:text-gray-400">
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

      <div className="my-10">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
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
        <Link to="/services">
          <Button className="mx-auto my-10" gradientMonochrome="info">
            See More
          </Button>
        </Link>
      </div>
      <div className="px-10">
        <section className="bg-gray-100 text-gray-800">
          <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div>
              <h1 className="my-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                  Features
                </span>
              </h1>
            </div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">
                  Livliness of creation
                </h3>
                <p className="mt-3 text-lg text-gray-600">
                  Every frames taken will bring out the interior and exterior
                  beauty of the mother nature and its creation.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-gray-900">
                        Aesthetic Shots
                      </h4>
                      <p className="mt-2 text-gray-600">
                        Perfect level of saturation and luminence can be seen in
                        each frames
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-gray-900">
                        Magic with exposure and darkness
                      </h4>
                      <p className="mt-2 text-gray-600">
                        A perfect level of ISO and shutter speed will enhance
                        every aspect of the taken pictures
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-gray-900">
                        Graininess and Sharpness
                      </h4>
                      <p className="mt-2 text-gray-600">
                        The photos aspect ratio indulged with the noise
                        reduction and proper editing will make you relive the
                        taken frame
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="mt-10 lg:mt-0">
                <img
                  src={pic1}
                  alt=""
                  className="mx-auto w-3/4 rounded-lg shadow-lg bg-gray-500"
                />
              </div>
            </div>
            <div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">
                    Your friendly photographer
                  </h3>
                  <div className="mt-12 space-y-12">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 text-gray-900">
                          Supportive in all situation
                        </h4>
                        <p className="mt-2 text-gray-600">
                          As a photographer cum friend, my service will make our
                          client feel like working with a friend
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 text-gray-900">
                          Happy to budget
                        </h4>
                        <p className="mt-2 text-gray-600">
                          All services provided are all budget friendly keeping
                          our customers in head and to top it off we can provide
                          further discounts to previous customers.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 text-gray-900">
                          Cooperative and informative
                        </h4>
                        <p className="mt-2 text-gray-600">
                          As a photographer, our service is very cooperative
                          keeping the customer's need in mind, we assure of
                          great service with free of cost photo editing and
                          printing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                  <img
                    src={pic2}
                    alt=""
                    className="w-3/4 mx-auto rounded-lg shadow-lg bg-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <div className="my-20 px-10">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Explore the wilderness{" "}
            <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
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
      </div>
    </div>
  );
};

export default Home;
