import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Register = () => {

  useTitle('Register');

  const handleSubmit = (event) => {
event.preventDefault();
const form = event.target;
const name = form.name.value;
const photoURL = form.photoURL.value;
const email = form.email.value;
const password = form.password.value;

console.log(name, email, password, photoURL);
  }

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 mx-auto">
    <h1 className="mb-14 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            Register
          </span>
        </h1>
    <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
      <div className="space-y-1 text-sm">
        <label for="username" className="block text-gray-600">Your Name</label>
        <input type="text" name="name" placeholder="Your name here" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
      </div>
      <div className="space-y-1 text-sm">
        <label for="username" className="block text-gray-600">Photo URL</label>
        <input type="text" name="photoURL" placeholder="Your Photo URL here" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
      </div>
      <div className="space-y-1 text-sm">
        <label for="username" className="block text-gray-600">Email Address</label>
        <input type="text" name="email" placeholder="Your email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
      </div>
      <div className="space-y-1 text-sm">
        <label for="password" className="block text-gray-600">Password</label>
        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
      </div>
      <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">Sign in</button>
    </form>
    <div className="">
      <div className=""></div>
      <p className="px-3 my-5 text-sm text-gray-600">Already have an account? <Link to='/login' className="text-blue-600">Login now</Link></p>
      <p className="px-3 my-5 text-sm text-gray-600">Login with social accounts</p>
      <div className="">
      <button type="button" className="my-3 px-8 py-2 font-semibold border rounded border-gray-800 text-gray-800">Login with Google</button>
      </div>
    </div>
  </div>
  );
};

export default Register;
