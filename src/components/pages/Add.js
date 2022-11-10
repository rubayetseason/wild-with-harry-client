import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const Add = () => {
  useTitle("Add");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value || "new service";
    const photoURL =
      form.photoURL.value ||
      "https://i.ibb.co/b6PckrC/file-20180327-188619-hgwow8.jpg";
    const price = form.price.value || 4000;
    const details = form.details.value || "please look out my service";

    const service = {
      name,
      service_id: "01",
      img: photoURL,
      price,
      details,
    };
    console.log(service);

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          toast.success("Service Added");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1 className="mt-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          Add Services
        </span>
      </h1>
      <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
        <form onSubmit={handleSubmit}>
          <h1 className="mt-5">Service Name</h1>
          <input
            type="text"
            name="name"
            placeholder="Service name here"
            className="mt-1"
            required
          />

          <h1 className="mt-5">Service Photo</h1>
          <input
            type="text"
            name="photoURL"
            placeholder="Service photo URL here"
            className="mt-1"
            required
          />

          <h1 className="mt-5">Service Price</h1>
          <input
            type="text"
            name="price"
            placeholder="Service Price"
            className="mt-1"
            required
          />

          <h1 className="mt-5">Service Details</h1>
          <textarea name="details" cols="30" rows="5"></textarea>
          <h1></h1>
          <button className="bg-red-700 text-white p-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
