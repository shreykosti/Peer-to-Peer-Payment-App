import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {
  Logoutbutton,
  Signinbutton,
  Signupbutton,
  TransationHistory,
} from "./Navigationbutton";
import { Profileupdater } from "./Profileupdater";
import Modal from "./Modal";
import { Dropdownbutton1, Togglebutton2 } from "./Button";
export function Navbar({ name, usern, display }) {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`fixed top-0 z-50 h-12 w-screen ${
        display || "flex"
      } items-center gap-1 justify-between bg-slate-700 dark:bg-slate-950 shadow-md `}
    >
      <button
        className="text-2xl relative left-5 font-medium  z-[1] data-[tooltip]:after:content-[attr(data-tooltip)] data-[tooltip]:after:mt-[-3px] data-[tooltip]:after:text-sm data-[tooltip]:after:invisible data-[tooltip]:after:scale-50 data-[tooltip]:after:origin-top data-[tooltip]:after:opacity-0 hover:data-[tooltip]:after:visible hover:data-[tooltip]:after:opacity-100 hover:data-[tooltip]:after:scale-100 data-[tooltip]:after:transition-all data-[tooltip]:after:absolute data-[tooltip]:after:bg-white data-[tooltip]:after:top-[calc(100%+4px)] data-[tooltip]:after:left-3/4 data-[tooltip]:after:-translate-x-1/2 data-[tooltip]:after:-z-[1] data-[tooltip]:after:px-5 data-[tooltip]:after:py-1 data-[tooltip]:after:min-h-fit data-[tooltip]:after:min-w-fit data-[tooltip]:after:rounded-md data-[tooltip]:after:drop-shadow data-[tooltip]:before:mt-[-3px] data-[tooltip]:before:drop-shadow data-[tooltip]:after:text-center data-[tooltip]:after:text-zinc-800 data-[tooltip]:after:whitespace-nowrap data-[tooltip]:after:text-[16px] data-[tooltip]:before:invisible data-[tooltip]:before:opacity-0 hover:data-[tooltip]:before:visible hover:data-[tooltip]:before:opacity-100 data-[tooltip]:before:transition-all data-[tooltip]:before:bg-white data-[tooltip]:before:[clip-path:polygon(50%_0,0_100%,100%_100%)] data-[tooltip]:before:absolute data-[tooltip]:before:top-full data-[tooltip]:before:left-1/2 data-[tooltip]:before:-translate-x-1/2 data-[tooltip]:before:z-0 data-[tooltip]:before:w-3 data-[tooltip]:before:h-[4px]"
        data-tooltip="Click to go to dashboard"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Payment App
      </button>

      <span className="flex sm:hidden ">
        <Dropdownbutton1
          name={usern}
          button1={<Logoutb />}
          button2={<Signinb />}
          button3={<Signupb />}
          button4={<Historyb />}
          button5={
            <div className="">
              <Modal border="rounded-b-lg" size="text-[1.1rem]" />
            </div>
          }
          button6={<Dashboardb />}
        />
      </span>
      <div className="fixed right-24 z-50 md:right-44 top-1 sm:top-14 lg:top-1">
        <Togglebutton2
          onClick={() => {
            document.body.classList.toggle("dark");
          }}
        />
      </div>
      <div className=" hidden sm:flex gap-4 sm:gap-5 md:gap-5 lg:gap-20 relative right-0 sm:right-3">
        <Logoutbutton
          onClick={() => {
            axios
              .post(
                "http://localhost:3000/api/v1/user/logout",
                {},
                {
                  withCredentials: true,
                }
              )
              .then((res) => {
                console.log(res);
                navigate("/");
              })
              .catch((err) => {
                navigate("/");
              });
          }}
        />
        <Signinbutton />
        <Signupbutton />
        <TransationHistory />
        <span className="flex md:hidden">
          <Modal border="rounded-lg " size="text-[0.7rem] sm:text-xs" />
        </span>
      </div>
      <span className="hidden md:flex">
        <Profileupdater name={name} outerdiv="relative right-10" />
      </span>
    </div>
  );
}

function Logoutb() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        axios
          .post(
            "http://localhost:3000/api/v1/user/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            navigate("/");
          });
      }}
      className="border-t py-3 text-left px-3 relative isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full  before:-right-full before:hover:right-0 before:rounded-full before:bg-black dark:before:bg-slate-700 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center
      text-[1.2rem] font-semibold text-white border-gray-200 shadow-sm gap-x-2  disabled:opacity-50 disabled:pointer-events-none"
    >
      Logout
    </button>
  );
}

function Signinb() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/signin");
      }}
      className="border-t py-3 text-left px-3 relative isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full  before:-right-full before:hover:right-0 before:rounded-full before:bg-black dark:before:bg-slate-700 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center  text-[1.1rem] font-semibold text-white border-gray-200 shadow-sm gap-x-2  disabled:opacity-50 disabled:pointer-events-none"
    >
      Sign In
    </button>
  );
}

function Signupb() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/signup");
      }}
      className="border-t opacity-100 py-3 text-left px-3 relative isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full dark:before:bg-slate-700  before:-right-full before:hover:right-0 before:rounded-full before:bg-black before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center 
      text-[1.1rem] font-semibold text-white border-gray-200 shadow-sm gap-x-2  disabled:opacity-100 disabled:pointer-events-none"
    >
      Sign Up
    </button>
  );
}

function Dashboardb() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/dashboard");
      }}
      className="border-t py-3 text-left px-3 relative isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full  before:-right-full before:hover:right-0 before:rounded-full before:bg-black dark:before:bg-slate-700 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center 
      text-[1.1rem] font-semibold text-white border-gray-200 shadow-sm gap-x-2  disabled:opacity-50 disabled:pointer-events-none"
    >
      Dashboard
    </button>
  );
}

function Historyb() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/transactionhistory");
      }}
      className="border-t py-3 text-left px-3 relative isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full dark:before:bg-slate-700 before:-right-full before:hover:right-0 before:rounded-full before:bg-black before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center font-semibold text-white border-gray-200 shadow-sm gap-x-2  disabled:opacity-50 disabled:pointer-events-none text-[1.1rem]"
    >
      Transction History
    </button>
  );
}

export function LandingpageNavbar() {
  return (
    <nav className="z-50 flex items-center justify-between w-full h-12 shadow-md shadow-slate-950 bg-slate-700 fixed">
      <span className="text-3xl  font-medium text-[#5de2a3] -mt-2 p-2 ml-4">
        PaymentApp
      </span>
      <div className="hidden sm:flex gap-1 sm:gap-5 md:gap-10 h-3/4 mr-2 sm:mr-10">
        <Link
          to="/signin"
          target="_blank"
          className="relative dark:before:bg-slate-700 isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full  before:-right-full before:hover:right-0 before:rounded-full before:bg-black before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-5 -mt-1 text-sm font-semibold text-white  border border-gray-200 rounded-lg shadow-sm gap-x-2  disabled:opacity-50 disabled:pointer-events-none"
        >
          <button>SignIn</button>
        </Link>
        <Link
          to="/signup"
          target="_blank"
          className="relative dark:before:bg-slate-700 isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full  before:-right-full before:hover:right-0 before:rounded-full before:bg-black before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-5 -mt-1 text-sm font-semibold text-white  border border-gray-200 rounded-lg shadow-sm gap-x-2  disabled:opacity-50 disabled:pointer-events-none"
        >
          <button>SignUp</button>
        </Link>
      </div>
      <div className="flex sm:hidden">
        <Dropdownbutton1 button1={<Signupb />} button2={<Signinb />} />
      </div>
    </nav>
  );
}
