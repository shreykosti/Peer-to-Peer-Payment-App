import { Inputbox, PinInputbox } from "../components/Inputbox";
import { useState } from "react";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Toast } from "../components/Toast";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function ForgetPassword() {
  const [username, setUsername] = useState(" ");
  const [pin, setPin] = useState(0);
  const [vissible1, setVissible1] = useState(false);
  const [password, setPassword] = useState(" ");
  const [vissible, setVissible] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen overflow-auto bg-transparent flex flex-col items-center justify-center">
      <Navbar />
      <Toast />
      <div className="w-[90%] smv:w-max flex flex-col justify-center items-center p-4 rounded-lg shadow-2xl dark:shadow-md dark:shadow-slate-400 border bg-transparent h-max">
        <Heading input="Forget Password" />
        <Inputbox
          vissibl={true}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholdername="johnoe@example.com"
          labelname="Email"
          message="Enter email "
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8 text-black dark:text-white "
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          }
        />
        <div className="w-full -mb-10">
          <PinInputbox
            type={vissible1 ? "text" : "password"}
            onChange={(e) => {
              const pin = Number(e.target.value);
              setPin(pin);
            }}
          />
          <button
            onClick={() => {
              setVissible1(!vissible1);
            }}
            className="relative z-10 top-[-43px] right-[-250px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </button>
        </div>
        <Inputbox
          vissibl={false}
          icon2={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          }
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          labelname="New Password"
          message="Enter New password"
          type={vissible ? "text" : "password"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8 text-black dark:text-white "
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                clipRule="evenodd"
              />
            </svg>
          }
        />
        <div className="flex -mt-2 flex-col w-full">
          <Button
            onClick={() => {
              axios
                .put(
                  "http://localhost:3000/api/v1/user/frogetpassword",
                  {
                    username: username,
                    pin: Number(pin),
                    password: password,
                  },
                  { withCredentials: true }
                )
                .then((res) => {
                  navigate("/signin");
                })
                .catch((err) => {
                  const notify = () =>
                    toast.error(err.response.data || "invalid pin or username");
                  notify();
                });
            }}
            input="Change"
          />
          <div className="-mt-8">
            <Button
              onClick={() => {
                navigate("/signin");
              }}
              input="Cancel"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
