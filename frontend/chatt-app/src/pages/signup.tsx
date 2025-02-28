import { useState } from "react";
import axios from "axios";
import backgroundImage from "../assets/background.jpg";
import WandCursor from "../customComponents/WandCursor";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  // Define state with proper types
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const[message, setMessage]= useState<string>("")
  const navigate = useNavigate();

  // Define handleSubmit with React.FormEvent<HTMLFormElement>
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try{
        const response= await axios.post("http://localhost:8080/api/signup", {
            name,
            email,
            password,
        } );
        setMessage(response.data.message);

        setTimeout(()=>{
            navigate("/");
        }, 1000);
    }catch(error: any){
        setMessage(error.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div
    className="w-screen h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <WandCursor/>
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col " onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold text-purple-50 mb-4 ">Sign Up</h1>
        <label className="font-semibold text-white mb-4">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border border-gray-300 text-white  rounded mb-2"
          required
        />
        <label className="font-semibold text-white mb-4">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 text-white  rounded mb-2"
          required
        />
        <label className="font-semibold text-white mb-4">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-4 text-white "
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition mt-4"
        >
          Register
        </button>
      </form>
      
    </div>
    </div>
  );
};

export default Signup;
