import { Navbar } from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { Toast } from "../components/Toast";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRef } from "react";
import Confetti from "@/components/magicui/confetti";
import { Loader1 } from "../loader/loader1";
export default function Aftermoney() {
  const confettiRef = useRef(null);
  const [balanceafter, setBalance] = useState(0);
  const [name, setName] = useState("Not Authrised");
  const [userlastname, setLastName] = useState("Not Authrised");
  const [userName, setuserName] = useState("Not Authrised");
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/account/getBallance", {
        withCredentials: true,
      })
      .then((res) => {
        const notify = () => toast.success("transaction suceesfull");
        notify();
        const balance = res.data.Balance;
        const firstname = res.data.firstname;
        const username = res.data.username;
        setLastName(res.data.lastname);
        setBalance(balance);
        setName(firstname);
        setuserName(username);
      })
      .catch((err) => {
        const notify = () => toast.error("Not Authrised to be on this page");
        notify();
      });
  }, []);
  const location = useLocation();
  //console.log(location.state);
  const { amount, tosendname, firstname, lastname, balance } =
    location.state || {
      amountsend: "Not Authrised",
      firstname: "Not Authrised",
      lastname: "Not Authrised",
      usernameSendTo: "Not Authrised",
      balance: "Not Authrised",
    };

  return (
    // <div className="h-screen w-screen">
    <div className="flex flex-col items-center h-screen w-screen relative">
      <Toast />
      <Navbar name={name} />
      <div className="flex flex-col items-center w-full gap-3  relative vsm:top-28 text-[0.8rem] sm:text-sm text-white">
        <div className="w-11/12 sm:w-3/4 xl:w-1/2  border dark:border-2 rounded-lg p-3 flex flex-col gap-3 ">
          <span className="p-2 sm:p-3 border dark:border-2 border-slate-500 hover:bg-slate-950 flex justify-between">
            <span>Your Previous Balance :</span>
            <span className="mr-40">{balance}</span>
          </span>
          <span className="p-2 sm:p-3 border border-slate-500 hover:bg-slate-950 flex justify-between dark:border-2">
            <span>Your Updated Balance :</span>
            <span className="mr-40">{balanceafter}</span>
          </span>
          <span className="p-2 sm:p-3 border border-slate-500 hover:bg-slate-950 flex justify-between dark:border-2">
            <span>Your Username :</span>
            <span className="mr-40">{userName}</span>
          </span>
        </div>
        <div className="w-11/12 sm:w-3/4 xl:w-1/2 flex flex-col gap-3 border p-3 rounded-lg dark:border-2">
          <span className="p-2 sm:p-3 border border-slate-500 dark:border-2 hover:bg-slate-950 flex justify-between">
            <span>Amount Send:</span> <span className="mr-40">{amount}</span>
          </span>
          <span className=" text-center text-xl  ">Reciver info</span>
          <span className="p-2 sm:p-3 border border-slate-500 dark:border-2 hover:bg-slate-950 flex justify-between">
            <span>Username :</span>
            <span className="mr-40">{tosendname}</span>
          </span>
          <span className="p-2 sm:p-3 border border-slate-500 dark:border-2 hover:bg-slate-950 flex justify-between">
            <span>First Name :</span>
            <span className="mr-40">{firstname}</span>
          </span>
          <span className="p-2 sm:p-3 border border-slate-500 dark:border-2 hover:bg-slate-950 flex justify-between">
            <span>Last Name :</span>
            <span className="mr-40">{lastname}</span>
          </span>
        </div>
      </div>
      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 h-full w-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </div>
    // </div>
  );
}
