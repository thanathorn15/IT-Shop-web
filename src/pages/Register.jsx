// import {useForm} from 'react-hook-form'
import React from "react";
import { useState } from "react";
import { register } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { getMe } from "../api/authApi";

export default function Register() {
  // const { register, handleSubmit,formState: {errors} } = useForm();
  // const onSubmit = data => console.log(data);

  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  console.log("register");

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const hdlSubmit = (e) => {
    const { firstName, lastName, email, password, confirmPassword } = input;
    e.preventDefault();
    if (password !== confirmPassword) return alert("plase recheck password");
    register({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    })
      .then((rs) => {
        localStorage.setItem("token", rs.data.token);
        return getMe(rs.data.token);
      })
      .then((rs) => {
        console.log(rs.data);
        setUser(rs.data);
        navigate("/");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div>
      <div className='bg-[url("https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80")] '>
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-center text-gray-700 pb-8">
              Register
            </h1>
            {/* <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}> */}
            <form className="space-y-4" onSubmit={hdlSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Firstname"
                  className="w-full input input-bordered"
                  // {...register("firstName", { required: true })}
                  name="firstName"
                  onChange={hdlChangeInput}
                  value={input.firstName}
                />
                {/* {errors.firstName?.type === 'required' && <p className='text-red-500' role="alert">First name is required</p>} */}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Lastname"
                  className="w-full input input-bordered"
                  // {...register("lastName", { required: true })}
                  name="lastName"
                  onChange={hdlChangeInput}
                  value={input.lastName}
                />
                {/* {errors.lastName?.type === 'required' && <p className='text-red-500' role="alert">Last name is required</p>} */}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full input input-bordered"
                  // {...register("email", { required: true })}
                  name="email"
                  onChange={hdlChangeInput}
                  value={input.email}
                />
                {/* {errors.email?.type === 'required' && <p className='text-red-500' role="alert">Email is required</p>} */}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full input input-bordered"
                  // {...register("password", { required: true, min:6  })}
                  name="password"
                  onChange={hdlChangeInput}
                  value={input.password}
                />
                {/* {errors.password?.type === 'required' && <p className='text-red-500' role="alert">Password is required</p>} */}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full input input-bordered"
                  // {...register("confirmPassword", { required: true })}
                  name="confirmPassword"
                  onChange={hdlChangeInput}
                  value={input.confirmPassword}
                />
                {/* {errors.confirmPassword?.type === 'required' && <p className='text-red-500' role="alert">Confirm Password is required</p>} */}
              </div>

              <div className="pt-6">
                <button className="btn btn-block bg-sky-400 text-white hover:bg-blue-600">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
