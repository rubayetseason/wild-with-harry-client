import { Card } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Rating from "./Rating";

const Detail = () => {
  useTitle("Details");
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const [ratings, setRatings] = useState([]);
  const { name, img, details, price, _id } = service;

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?id=${service._id}`)
      .then((res) => res.json())
      .then((data) => setRatings(data))
      .catch((error) => console.log(error));
  }, [service?._id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const customer = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const message = form.message.value || "excellent";

    const review = {
      service: _id,
      serviceName: name,
      customer,
      email,
      photoURL,
      message,
    };
    console.log(review);

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          toast.success("Review Added");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1 className="my-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          Details Section
        </span>
      </h1>
      <div className="w-3/4 md:w-2/4 lg:w-2/4 mx-auto">
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
          <h1 className="my-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
              Ratings Section
            </span>
          </h1>
        </div>
      </div>
      <div className="grid my-10 px-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ratings.map((rating) => (
          <Rating key={rating._id} rating={rating}></Rating>
        ))}
      </div>

      <div>
        {user?.email ? (
          <>
            <div>
              <h1 className="text-3xl font-bold mt-16 mb-4">Add Review</h1>
              <section className="p-6 text-gray-800">
                <form
                  onSubmit={handleSubmit}
                  novalidate=""
                  className="container w-full max-w-xl mx-auto space-y-6 rounded-md shadow bg-gray-50 ng-untouched ng-pristine ng-valid"
                >
                  <div>
                    <label for="name" className="block mb-1 ml-1">
                      Name
                    </label>
                    <input
                      defaultValue={user?.displayName}
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
                    />
                  </div>
                  <div>
                    <label for="name" className="block mb-1 ml-1">
                      Photo URL
                    </label>
                    <input
                      name="photoURL"
                      defaultValue={user?.photoURL}
                      type="text"
                      placeholder="Your name"
                      required
                      className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
                    />
                  </div>
                  <div>
                    <label for="email" className="block mb-1 ml-1">
                      Email
                    </label>
                    <input
                      readOnly
                      name="email"
                      type="email"
                      defaultValue={user?.email}
                      placeholder="Your email"
                      required
                      className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
                    />
                  </div>
                  <div>
                    <label for="message" className="block mb-1 ml-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      type="text"
                      placeholder="Message..."
                      className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-600 focus:ring-violet-600 hover:ring-violet-600 text-gray-50"
                    >
                      Add Review
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </>
        ) : (
          <>
            <Link to="login">
              <h1 className="text-3xl text-white p-1 w-2/4 mx-auto bg-red-600 font-bold my-16">
                <span className="underline">Login</span> to add reviews !!
              </h1>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Detail;
