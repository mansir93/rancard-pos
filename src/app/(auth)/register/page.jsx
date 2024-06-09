"use client"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GoogleLogo from "../Assets/Google-logo.png";
import registerImg from "../Assets/register-img.png";
import Layout from "../Components/Layout";

const Register = ({ NextStep }) => {
  const initial = {
    name: "",
    email: "",
    password: "",
  };
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(initial);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(userData);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setFormData(initial);
    alert("register sucessfully procceed to log in");
  };
  return (
    <Layout image={registerImg}>
      <div className="w-full p-4">
        <div className="flex flex-row-reverse justify-between items-center bg-white ">
          <button
            onClick={() => (window.location = "/")}
            type="submit"
            className="text-gray-600 font-semibold px-4 py-2 rounded-lg mr-2"
          >
            Exit
          </button>
          <h2 className="text-lg">
            <span className="font-semibold"> Step 1</span> of 4
          </h2>
        </div>
      </div>
      <div className="w-96 h-full f lex flex-col justify-center">
        <div>
          <h1 className="w-full text-left text-4xl font-bold">
            Create Account
          </h1>
          <br />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 text-gray-500 text-xl">
            <div>
              <label htmlFor="name">Name</label>
              <br />
              <input
                value={formData.name}
                type="text"
                className="mt-1 w-full border-2 py-2 px-4 rounded-lg"
                name="name"
                id="name"
                required
                placeholder="Mansir"
                onChange={handleChange}
              />
              <br />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <br />
              <input
                value={formData.email}
                type="email"
                className="mt-1 w-full border-2 py-2 px-4 rounded-lg"
                name="email"
                id="email"
                required
                placeholder="😛mansir@example.com"
                onChange={handleChange}
              />
              <br />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <br />
              <input
                value={formData.password}
                type="password"
                className="mt-1 w-full border-2 py-2 px-4 rounded-lg"
                name="password"
                id="password"
                required
                placeholder="************"
                onChange={handleChange}
              />
              <br />
            </div>
            <div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 py-2 px-4 rounded-lg"
              >
                Create Account
              </button>
            </div>
            <div>
              <button className="w-full px-4 py-2 border rounded-lg flex items-center justify-center gap-4">
                <img src={GoogleLogo} alt="google" className="w-8" />
                <span>Sign up with Google</span>
              </button>
            </div>
            <div>
              <p>
                Already have an Account?{" "}
                <Link to="/login" className="text-blue-600">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;