import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Reviews = () => {

  const {user} = useContext(AuthContext);


  return <div>this is reviews</div>;
};

export default Reviews;
