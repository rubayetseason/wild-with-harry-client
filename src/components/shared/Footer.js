import React from "react";
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <h1 className="my-5 text-xl font-semibold">Socials</h1>
      <div className="flex justify-center">
        <BsFacebook className="mx-4" /> <BsInstagram className="mx-4" />{" "}
        <BsYoutube className="mx-4" /> <BsTwitter className="mx-4" />
      </div>
      <h1 className="my-14 text-xl font-semibold">Email for daily updates</h1>
      <div className=" mb-14 w-4/5 md:w-2/4 lg:w-2/4 mx-auto">
        <form>
          <label
            for="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Your Email
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Email"
            />
            <button
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Submit</button>
          </div>
        </form>
      </div>
      <p className="mb-10">All rights reserved by Harry Harrington 2022 ©</p>
    </div>
  );
};

export default Footer;
