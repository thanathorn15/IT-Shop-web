import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'

export default function Login() {
  const { register, handleSubmit,formState: {errors} } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80")]'>
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
  <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
    <h1 className="text-3xl font-semibold text-center text-gray-700">
      Login
    </h1>
    <form className="space-y-4 pt-8" onSubmit={handleSubmit(onSubmit)}>
      <div>
       
        <input
          type="text"
          placeholder="Email Address"
          className="w-full input input-bordered"
          {...register("email", { required: true })}
        />
        {errors.email?.type === 'required' && <p className='text-red-500' role="alert">Email is required</p>}
      </div>
      <div>
       
        <input
          type="password"
          placeholder="Password"
          className="w-full input input-bordered"
          {...register("password", { required: true, min:6  })}
        />
         {errors.password?.type === 'required' && <p className='text-red-500' role="alert">Password is required</p>}
      </div>
      <Link
        to = "/register"
        className="flex justify-start  text-xs  hover:underline text-blue-500 hover:text-blue-600 "
      >
        Register now?
      </Link>
      <div className='pt-6'>
        <button className="btn btn-block bg-sky-400 text-white hover:bg-blue-600">Sign in</button>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}
