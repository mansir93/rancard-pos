"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {  useRouter } from "next/navigation";
import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/slices/authSlice";

const Login = () => {
  const router = useRouter();
  const initial = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initial);
  const dispatch = useDispatch();
  const { error, isAuthenticated } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  useEffect(() => {
    isAuthenticated && router.push("/home") ;
  }, [isAuthenticated]);
  return (
    <div className="">
      <h1 className="w-full text-4xl font-bold mb-16">Log in to Syst</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-8 text-gray-500 ">
          <div>
            <label htmlFor="email">Username</label>
            <input
              className="mt-2 w-full py-2 px-4 border-b-2 border-gray-500 outline-none"
              name="username"
              id="username"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">password</label>
            <input
              type="password"
              className="mt-2 w-full py-2 px-4 border-b-2 border-gray-500 outline-none"
              name="password"
              id="password"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <Button
              color="green"
              // disabled={}
              type="submit"
              className="w-full p-4 rounded-full"
            >
              Log in
            </Button>
          </div>
          <div>{error && <p className="error">{error}</p>}</div>
        </div>
      </form>
    </div>
  );
};

export default Login;
