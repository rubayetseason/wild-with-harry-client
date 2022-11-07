import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <form className="flex flex-col gap-4 w-11/12 mx-auto mb-20">
<h1 class="my-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            Register
          </span>
        </h1>

      <div>
        <div className="mb-2 block">
          <Label value="Your Name" />
        </div>
        <TextInput
          type="text"
          placeholder="Your Name Here"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label value="Your Photo URL" />
        </div>
        <TextInput
          type="text"
          placeholder="Photo URL Here"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label value="Your email" />
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
          <Label value="Your password" />
        </div>
        <TextInput id="password1" type="password" placeholder="Your Password" required />
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
