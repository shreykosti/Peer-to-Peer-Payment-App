import React, { useState } from "react";
import { Inputbox, PinInputbox } from "./Inputbox";
import { Button1 } from "./Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Modal = ({ border, size }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [firstname, setFirstname] = useState("user");
  const [lastname, setLastname] = useState("user");
  const [balance, setBalance] = useState(0);
  const [changeFirstname, setChangeFirstname] = useState("");
  const [changeLastname, setChangeLastname] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [pin, setPin] = useState(1340);
  const [vissibl1, setVissibl1] = useState("hidden");
  const [vissibl2, setVissibl2] = useState("flex");
  const [vissible, setVissible] = useState(false);
  const [vissible1, setVissible1] = useState(false);
  const [vissible2, setVissible2] = useState("hidden");
  return (
    <div>
      <div
        className={`w-full ${border} py-[1px] relative bg-transparent isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full  before:-right-full before:hover:right-0 before:rounded-full before:bg-black dark:hover:before:bg-slate-700 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center  text-sm font-semibold text-white  border border-gray-200  shadow-sm gap-x-2   disabled:opacity-50 disabled:pointer-events-none dark:border-2 `}
      >
        <button
          className={` px-4 py-[13px] font-sans   ${size} font-bold text-center text-white w-full bbg  h-full`}
          onClick={() => {
            axios
              .get("http://localhost:3000/api/v1/account/getBallance", {
                withCredentials: true,
              })
              .then((res) => {
                setFirstname(res.data.firstname);
                setLastname(res.data.lastname);
                setBalance(res.data.Balance);
              })
              .catch(() => {});
            handleOpen();
          }}
        >
          Update
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-slate-800 rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <div className="flex flexx-col gap-40">
                  <h3 className="text-xl font-semibold text-white">
                    Your profile
                  </h3>
                  <h3 className="text-xl font-semibold text-white">
                    {balance}
                  </h3>
                </div>
                <ToastContainer
                  theme="dark"
                  autoClose={3000}
                  closeOnClick
                  transition:Slide
                  pauseOnFocusLoss={false}
                  newestOnTop
                  draggable
                />
                <button
                  type="button"
                  onClick={() => {
                    handleClose();
                  }}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4 text-xl flex flex-col justify-center items-center">
                {/* input */}
                <button
                  onClick={() => {
                    setVissibl1("hidden");
                    setVissibl2("flex");
                    setVissible2("hidden");
                  }}
                  className={`fixed left-20 mt-4 ${vissible2}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="size-10 hover:size-12 hover:text-amber-200"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                </button>
                <div className={`flex flex-col w-full  ${vissibl2}`}>
                  <Inputbox
                    vissibl={true}
                    message={"Enter a name to update your first name"}
                    onChange={(e) => {
                      setChangeFirstname(e.target.value);
                    }}
                    labelname={`FirstName : ${firstname} `}
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-8 text-white "
                      >
                        <path
                          fillRule="evenodd"
                          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                  />
                  <Inputbox
                    vissibl={true}
                    message={"Enter a name to update your last name"}
                    onChange={(e) => {
                      setChangeLastname(e.target.value);
                    }}
                    labelname={`LastName : ${lastname}`}
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-8 text-white "
                      >
                        <path
                          fillRule="evenodd"
                          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                  />
                </div>
                <button
                  onClick={() => {
                    setVissibl1("flex");
                    setVissibl2("hidden");
                    setVissible2("flex");
                  }}
                  className={`border-2 py-2 bg-slate-700 justify-center dark:bg-slate-950 rounded-lg w-full ${vissibl2}`}
                >
                  Click Me Change Password
                </button>
              </div>
              <div
                className={`px-5 flex-col items-center justify-center ${vissibl1}`}
              >
                <Inputbox
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                  }}
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
                  labelname="Enter Old Password"
                  message="Enter Old Password"
                  type={vissible ? "text" : "password"}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-8 text-white "
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                />
                <Inputbox
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
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
                  labelname="Enter New Password"
                  message="Enter New Password"
                  type={vissible ? "text" : "password"}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-8 text-white "
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                />
                <div className="w-full">
                  <PinInputbox
                    onChange={(e) => {
                      setPin(e.target.value);
                    }}
                    type={vissible1 ? "text" : "password"}
                  />
                  <button
                    onClick={() => {
                      setVissible1(!vissible1);
                      // console.log(vissible1);
                    }}
                    className="absolute  -mt-11 z-10 right-10 "
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
                <button
                  onClick={() => {
                    axios
                      .put(
                        "http://localhost:3000/api/v1/user/passwordupdate",
                        {
                          oldPassword: oldPassword,
                          newPassword: newPassword,
                          pin: Number(pin),
                        },
                        {
                          withCredentials: true,
                        }
                      )
                      .then((res) => {
                        console.log(res.data);
                        setVissibl2("flex");
                        setVissibl1("hidden");
                        setVissible2("hidden");
                        const notify = () =>
                          toast.success("password updated successfully");
                        notify();
                      })
                      .catch((err) => {
                        console.log(err.response.data);
                        const notify = () =>
                          toast.error(err.response.data || "Not Authorized");
                        notify();
                      });
                  }}
                  className={`border-2 py-2 bg-slate-700 mt-5 mb-5 justify-center dark:bg-slate-950 rounded-lg w-full ${vissibl1}`}
                >
                  Click Me to Save My Password
                </button>
              </div>
              <div className="flex items-center justify-start gap-5 p-4  md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <div>
                  <Button1
                    input="save"
                    onClick={() => {
                      axios
                        .put(
                          "http://localhost:3000/api/v1/user/update",
                          {
                            firstname: changeFirstname,
                            lastname: changeLastname,
                          },
                          {
                            withCredentials: true,
                          }
                        )
                        .then((res) => {
                          window.location.reload();
                          // console.log(res.data);
                          handleClose();
                        })
                        .catch((err) => {
                          // console.log(err);
                          const notify = () =>
                            toast.error("To close without Updating use Cancel");
                          notify();
                        });
                    }}
                  />
                </div>
                <div>
                  <Button1
                    input="cancel"
                    onClick={() => {
                      handleClose();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
