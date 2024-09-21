// import React from 'react'
import { useParams } from "react-router-dom"

export default function User() {
    const {userId} = useParams()
  return (
    <div className="w-100 flex justify-center align-middle">
      <h1 className=" bg-gray-800 text-white text-center  text-3xl p-4 " >User: {userId} </h1>
    </div>
  )
}
