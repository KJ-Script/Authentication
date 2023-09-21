"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

const ProfilePage = (props: Props) => {
  const [data, setData] = useState()
  useEffect( () => {
    const res = axios.get('/api/users/user').then((response) => {
      console.log(response.data)
      setData(response.data.data._id)
    })
  }, [])
  const router = useRouter()
  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout")
      console.log(response)
      router.push('/login')
    } catch (error: any) {
      console.log(error.message)
    }
  }

  console.log(data)
  return (
    <>
      <div>ProfilePage</div>
      <button onClick={logout}>Logout</button> <br></br>
      <div>{}</div>
      <Link href={`profile/${data}`}>data</Link>

    </>
  );
};

export default ProfilePage;
