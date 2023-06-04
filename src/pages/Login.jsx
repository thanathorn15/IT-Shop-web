import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80")]'>
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
  <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
    <h1 className="text-3xl font-semibold text-center text-gray-700">
      Login
    </h1>
    <form className="space-y-4">
      <div>
        <label className="label">
          <span className="text-base label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="Email Address"
          className="w-full input input-bordered"
        />
      </div>
      <div>
        <label className="label">
          <span className="text-base label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full input input-bordered"
        />
      </div>
      <Link
        to = "/register"
        className="flex justify-start  text-xs  hover:underline text-blue-500 hover:text-blue-600 "
      >
        Register now?
      </Link>
      <div>
        <button className="btn btn-block bg-sky-400 text-white hover:bg-blue-600">Sign in</button>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}
