"use client";
import React, { useState } from "react";
import axios from 'axios'
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


type Props = {};

export default function SignUp({}: Props) {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    pass: "",
    username: "",
  });
  const signup = async () => {
    try {
      const response = await axios.post("/api/users/signup", user)
      console.log("Sign up complete: ", response.data)
      router.push('/login')
    } catch (error: any) {
      console.log("failed signup: ", error.message)
    }
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-40% space-y-2 space-x-2">
        <label htmlFor="username">username</label>
        <input
          className="border p-1"
          id="username"
          type="text"
          placeholder="username"
          onChange={(e) => setUser({...user, username: e.target.value})}
        />
        <br />

        <label htmlFor="email">email</label>
        <input
          className="border p-1"
          id="email"
          type="text"
          placeholder="email"
          onChange={(e) => setUser({...user, email: e.target.value})}
        />
        <br />

        <label htmlFor="password">password</label>
        <input
          className="border p-1"
          id="password"
          type="password"
          placeholder="password"
          onChange={(e) => setUser({...user, pass: e.target.value})}
        /><br/>

        <button onClick={signup}>Signup</button>
      </div>
    </div>
  );
}
