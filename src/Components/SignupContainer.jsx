import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const SignupContainer = () => {
    const { signup } = useAuth();

    const [newuser, setNewuser] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

  return (
    <section className="container flex flex-col bg-white h-[24rem] w-[20rem] mt-[12rem] mx-auto rounded">
      <div className="text-center m-3 text-2xl">Sign up</div>
      <form action="" className="flex flex-col">
        <label htmlFor="" className="px-4">
          First Name
        </label>
        <input
          type="text"
          className="border-2  mx-4 outline-none pl-2"
          onChange={(e) => {
            setNewuser({ ...newuser, firstName: e.target.value });
          }}
        />

        <label htmlFor="" className="px-4">
          Last Name
        </label>
        <input
          type="text"
          className="border-2  mx-4 outline-none pl-2"
          onChange={(e) => {
            setNewuser({ ...newuser, lastName: e.target.value });
          }}
        />

        <label htmlFor="" className="px-4">
          Email
        </label>
        <input
          type="email"
          className="border-2  mx-4 outline-none pl-2"
          onChange={(e) => {
            setNewuser({ ...newuser, email: e.target.value });
          }}
        />

        <label htmlFor="" className="px-4 mt-4">
          Password
        </label>
        <input
          type="password"
          className="border-2 mx-4 outline-none pl-2 "
          onChange={(e) => {
            setNewuser({ ...newuser, password: e.target.value });
          }}
        />

        <button
          onClick={(e) => signup(e, newuser)}
          className="bg-[#334756] w-[4rem] py-2 mt-4 self-center rounded-md hover:bg-slate-500 active:bg-slate-400 text-white"
        >
          {" "}
          Sign up{" "}
        </button>
      </form>
      <div className="text-center mt-2">
        Already a user?{" "}
        <Link className="underline" to="/login">
          login
        </Link>{" "}
      </div>
    </section>
  );
};

export { SignupContainer };
