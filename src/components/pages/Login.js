import React from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <form className="flex flex-col gap-4 w-11/12 mx-auto mb-24">
         <h1 className="my-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            Login
          </span>
        </h1>
      <div>
        <div className="mb-2 block">
          <h1 className="text-left font-semibold">Enter Email Address</h1>
        </div>
        <TextInput
          type="email"
          placeholder="Your Email Here"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
        <h1 className="text-left font-semibold">Enter Password</h1>
        </div>
        <TextInput
          type="password"
          placeholder="Your Password"
          required
        />
      </div>
      <div>
          <p className="text-start"><small>Don't have an account? <Link to='/register' className="text-blue-700">Register now</Link></small></p>
        </div>
      <Button
        className="w-1/3 py-1 my-3 mx-auto"
        gradientDuoTone="purpleToBlue"
      >
        Login
      </Button>

      <div>
    <Button
      outline={true}
      gradientDuoTone="purpleToBlue" className="mx-auto"
    >
          <FcGoogle className="mr-2"/>  Sign in with Google
    </Button>
  </div>
    </form>
  );
};

export default Login;
