'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"



function Login() {
  return (
    <div className="bg-[#d94949] h-screen flex flex-col items-center justify-center text-center">
        <Image
        src="https://i.ibb.co/5xsF8V4/JARVIS.png"
        width={300}
        height={300}
        alt="logo"
        />
        <button onClick={() => signIn('google')}
         className="text-white font-bold text-3xl animate-pulse">Sign in to use JARVIS</button>
    </div>
  )
}

export default Login
