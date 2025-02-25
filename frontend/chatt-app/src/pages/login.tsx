
import { useState } from "react";
import backgroundImage from "../assets/background.jpg";

const Login=()=>{
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const handleSubmit=(e: React.FormEvent)=>{
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password", password);
    };

    return(
        <div className="flex  h-screen ">
            
            <form  className=" w-1/5 flex flex-col justify-center items-center bg-gradient-to-r from-pink-500 to-violet-500 px-12 shadow-lg "onSubmit={handleSubmit}>
            <h1 className="mb-8 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text tracking-wide"> Welcome To The Chat-App</h1>
            <label className="mb-1 text-gray-700 font-semibold">Email</label>
            <input className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  required />
            <label className="mb-1 text-gray-700 font-semibold"> Password</label>
            <input  className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" type= "password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <button className="w-50 p-2 bg-blue-500 text-white  rounded hover:bg-blue-700 transition" type="submit">Login</button>
            <label className="mt-4 ml-5 mr-5 text-gray-600">
            Don't have an account? 
            <span className="text-blue-800 font-semibold hover:underline cursor-pointer"> Sign Up</span>
            </label>
            </form>
            <div className="w-4/5 h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${backgroundImage})`}}></div>
        </div>
       

    )
};
export default Login; 
