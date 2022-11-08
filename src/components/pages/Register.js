import { Button, TextInput } from "flowbite-react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <form className="flex flex-col gap-4 w-11/12 mx-auto mb-20">
<h1 className="my-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            Register
          </span>
        </h1>

      <div>
        <div className="mb-2 block">
        <h1 className="text-left font-semibold">Your Name</h1>
        </div>
        <TextInput
          type="text"
          placeholder="Your Name Here"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
        <h1 className="text-left font-semibold">Your Photo URL</h1>
        </div>
        <TextInput
          type="text"
          placeholder="Photo URL Here"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
        <h1 className="text-left font-semibold">Your Email Address</h1>
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="Your Email Here"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
        <h1 className="text-left font-semibold">Your Password</h1>
        </div>
        <TextInput id="password1" type="password" placeholder="Your Password" required />
      </div>
      <div>
          <p className="text-start"><small>Already have an account? <Link to='/login' className="text-blue-700">Sign in</Link></small></p>
        </div>
      <Button className="w-1/3 py-1 my-3 mx-auto" gradientDuoTone="pinkToOrange">
      Register
    </Button>
    <Button
      outline={true}
      gradientDuoTone="pinkToOrange" className="mx-auto"
    >
      <FcGoogle className="mr-2"/> Sign in with Google
    </Button>
    </form>
  );
};

export default Register;
