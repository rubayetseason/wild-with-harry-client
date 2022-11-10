import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
import Review from "./Review";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`http://localhost:5000/reviews/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            const remaining = reviews.filter(rev => rev._id !== id);
            setReviews(remaining);
          }
        })
      }
    });
  };

  return (
    <div>
      {" "}
      <h1 className="my-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
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
