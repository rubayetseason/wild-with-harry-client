import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
import Review from "./Review";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.log(error));
  }, [user?.email]);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure to delete this review?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted successfully");
            const remaining = reviews.filter((rev) => rev._id !== id);
            setReviews(remaining);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      {" "}
      <h1 class="my-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          Your Reviews
        </span>
      </h1>
      <div className="review-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-14 my-14 gap-4">
        {reviews.map((review) => (
          <Review
            key={review._id}
            review={review}
            handleDelete={handleDelete}
          ></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
