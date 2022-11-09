import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Reviews = () => {
const [item, setItem] = useState([]);
useEffect(() => {

  fetch('http://localhost:5000/reviews')
  .then(res => res.json())
  .then(data => setItem(data))
  .catch(error => console.log(error))
} , []);

  const {user} = useContext(AuthContext);


  return <div>this is reviews</div>;
};

export default Reviews;
