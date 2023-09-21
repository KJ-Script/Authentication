"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

type Props = {}

const Login = (props: Props) => {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    pass: ""
  });

  const login = async () => {
    try {
        const response = await axios.post('/api/users/login', user)
        console.log("login success")
        router.push('/')
        
    } catch (error: any) {
      console.log("Login Failed:", error.message)
    }
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-40% space-y-2 space-x-2">
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

        <button onClick={login}>login</button>
      </div>
    </div>
  )
}


export default Login