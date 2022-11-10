import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const review = useLoaderData();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.detail.value;
    console.log(message);
  };

  return (
    <div>
      <h1 className="my-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          Update Review
        </span>
      </h1>
      <h1 className="my-4">Update Review Comment</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={review.message} name="detail" />
        <div>
          <button className="my-5 px-2 bg-blue-600 text-white">Update</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
