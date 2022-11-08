import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    console.log(email, password);
      }

  return (
    <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
<h1 className="mb-14 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            Login
          </span>
        </h1>
        	<form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label for="username" className="block text-gray-600">Your Email</label>
			<input type="text" name="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="password" className="block text-gray-600">Your Password</label>
			<input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
		</div>
		<button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">Sign in</button>
	</form>
  <div className="">
      <div className=""></div>
      <p className="px-3 my-5 text-sm text-gray-600">Don't have an account? <Link to='/register' className="text-blue-600">Register now</Link></p>
      <p className="px-3 my-5 text-sm text-gray-600">Login with social accounts</p>
      <div className="">
      <button type="button" className="my-3 px-8 py-2 font-semibold border rounded border-gray-800 text-gray-800">Login with Google</button>
      </div>
    </div>
</div>
  );
};

export default Login;
