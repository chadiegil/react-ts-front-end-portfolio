import { useAppDispatch } from "@hooks/useAppDispatch"
import React, { useState } from "react"
import { login } from "@redux/slices/auth-slice"

export const LoginForm = () => {
  const appDispatch = useAppDispatch()

  const [formData, setFormData] = useState({ email: "", password: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await appDispatch(login(formData))
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        className="bg-indigo-500 w-full p-5 m-4 sm:w-[500px] h-auto sm:h-[350px] rounded"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="title"
          className="flex items-center justify-center font-semibold text-xl text-white"
        >
          Login
        </label>
        <div className="flex flex-col py-3">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="focus:outline-none p-2 rounded"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col py-3">
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="focus:outline-none p-2 rounded"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="flex justify-center items-center p-3 text-white w-full bg-indigo-800 rounded mt-7"
        >
          Login
        </button>
      </form>
    </div>
  )
}
