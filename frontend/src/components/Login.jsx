import React, { useState } from 'react'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    const resetInput = document.querySelector('input');
    console.log(resetInput.value);
  };


  return (
    <div className="mt-12 max-h-screen flex justify-center items-center md:mt-24">
      <div className="container w-3/4 max-w-[500px] h-3/4 mx-auto p-6 flex flex-col justify-center items-center space-y-6 bg-white rounded-2xl shadow-lg shadow-white">
        <h1 className="mt-4 text-neutral-800 text-4xl font-bold text-center cursor-default md:mt-10">Login</h1>
        <form action="#" className='w-full flex flex-col gap-4 justify-center items-center md:gap-6' onSubmit={handleSubmit}>
          <label htmlFor="#" className="w-full text-neutral-800 bg-white font-semibold text-xl">Username
          </label>
          <input type="text" placeholder="Username" className="w-full self-center rounded-2xl px-3 py-2 outline-none border-2 focus:border-3 focus:border-neutral-800 transition" value={username} onChange={(e) => { setUsername(e.target.value) }} />
          <label htmlFor="#" className="w-full text-neutral-800 bg-white font-semibold text-xl">Password
          </label>
          <input type="password" placeholder="Password" className="w-full self-center rounded-2xl px-3 py-2 outline-none border-2 focus:border-3 focus:border-neutral-800 transition" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          <button className="mt-2 w-3/4 bg-neutral-800 text-white rounded-2xl px-3 py-2 font-bold text-md transition active:bg-white active:text-neutral-800 active:border-2 active:border-neutral-800">Login</button>
        </form>
        <p className="mb-4 text-sm text-neutral-800 md:mb-10">Don't have an account?<a href="#" className="text-neutral-800 font-semibold ml-0.5">Register Now.</a></p>
      </div>
    </div>
  )
}

export default Login