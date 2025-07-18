import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


export function Signup(){
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();


  async function signup(){
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    axios.post(BACKEND_URL + "/api/v1/signup", {
        username,
        password
    })
    navigate("/signin")
    alert("You have signed up.")
  }


  return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
    <div className="bg-white rounded-xl border border-slate-300 min-w-48 p-8">
      <Input reference={usernameRef} placeholder="Username" />
      <Input reference={passwordRef} placeholder="Password" />
      <div className="flex justify-center pt-4">
        <Button onClick={signup} variant="primary" text="Signup" size="md" fullWidth={true} />
      </div>
    </div>

  </div>
}