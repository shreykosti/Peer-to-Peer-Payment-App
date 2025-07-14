// export function Button({ input, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       type="button"
//       classNameName="z-30 py-2 mt-10 bg-gray-800 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl h-full w-full"
//     >
//       {input}
//     </button>
//   );
// }
import React, { useState } from "react";
import "./Amoney.css";
export function Button({ input, onClick, data }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full dark:border-2 justify-center mt-10 text-xl flex gap-3 cursor-pointer  bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-lg dark:border-green-500 hover:scale-105 duration-200 hover:text-gray-500 dark:hover:text-red-500 hover:border-gray-800 dark:hover:border-red-500 hover:from-black hover:to-gray-900 font-medium relative z-[1] data-[tooltip]:after:content-[attr(data-tooltip)] data-[tooltip]:after:mt-[-3px] data-[tooltip]:after:text-sm data-[tooltip]:after:invisible data-[tooltip]:after:scale-50 data-[tooltip]:after:origin-top data-[tooltip]:after:opacity-0 hover:data-[tooltip]:after:visible hover:data-[tooltip]:after:opacity-100 hover:data-[tooltip]:after:scale-100 data-[tooltip]:after:transition-all data-[tooltip]:after:absolute data-[tooltip]:after:bg-white data-[tooltip]:after:top-[calc(100%+4px)] data-[tooltip]:after:left-1/2 data-[tooltip]:after:-translate-x-1/2 data-[tooltip]:after:-z-[1] data-[tooltip]:after:px-5 data-[tooltip]:after:py-1 data-[tooltip]:after:min-h-fit data-[tooltip]:after:min-w-fit data-[tooltip]:after:rounded-md data-[tooltip]:after:drop-shadow data-[tooltip]:before:mt-[-3px] data-[tooltip]:before:drop-shadow data-[tooltip]:after:text-center data-[tooltip]:after:text-zinc-800 data-[tooltip]:after:whitespace-nowrap data-[tooltip]:after:text-[10px] data-[tooltip]:before:invisible data-[tooltip]:before:opacity-0 hover:data-[tooltip]:before:visible hover:data-[tooltip]:before:opacity-100 data-[tooltip]:before:transition-all data-[tooltip]:before:bg-white data-[tooltip]:before:[clip-path:polygon(50%_0,0_100%,100%_100%)] data-[tooltip]:before:absolute data-[tooltip]:before:top-full data-[tooltip]:before:left-1/2 data-[tooltip]:before:-translate-x-1/2 data-[tooltip]:before:z-0 data-[tooltip]:before:w-3 data-[tooltip]:before:h-[4px]"
      data-tooltip={data}
    >
      {input}
    </button>
  );
}
export function Button1({ input, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="relative isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full  before:-right-full before:hover:right-0 before:rounded-full before:bg-slate-700 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white  border border-gray-200 rounded-lg shadow-sm gap-x-2  disabled:opacity-50 disabled:pointer-events-none dark:border-2 bg-transparent dark:before:bg-slate-950"
    >
      {input}
    </button>
  );
}

export function Dropdownbutton1({
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  name,
}) {
  const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="w-full flex flex-col">
        <button
          id="dropdown-hover-event"
          type="button"
          onClick={toggleDropdown}
          className=" bg-slate-950 dark:bg-slate-700 text-white rounded-lg p-2 fixed top-1 right-5 z-50 transition-transform duration-200 hover:scale-105 hover:shadow-md hover:bg-slate-800 hover:text-white hover:border-gray-800"
        >
          <svg
            className={`size-6 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        {isOpen && (
          <div
            className="w-min z-100  transition-[opacity,margin] duration  shadow-md  text-white border bg-slate-800 dark:bg-slate-900  rounded-lg fixed flex top-14 right-4 flex-col "
            aria-labelledby="dropdown-hover-event"
          >
            <span className="w-64"></span>
            <span className=" py-3 text-left text-sm px-3">{name}</span>
            {button4}
            {button6}
            {button2}
            {button3}
            {button1}
            {button5}
          </div>
        )}
      </div>
    );
  };

  return <Dropdown />;
}

export function Togglebutton1({ onClick }) {
  return (
    <label onClick={onClick} className="theme-switch border ">
      <input type="checkbox" className="theme-switch__checkbox" />
      <div className="theme-switch__container bg-black border">
        <div className="theme-switch__clouds"></div>
        <button className="theme-switch__stars-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 144 55"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <div className="theme-switch__circle-container">
          <div className="theme-switch__sun-moon-container">
            <div className="theme-switch__moon">
              <div className="theme-switch__spot"></div>
              <div className="theme-switch__spot"></div>
              <div className="theme-switch__spot"></div>
            </div>
          </div>
        </div>
      </div>
    </label>
  );
}
export function Togglebutton2({ onClick }) {
  return (
    <button onClick={onClick}>
      <input type="checkbox" class="theme-checkbox"></input>
    </button>
  );
}
export function Moneybutton({ onClick }) {
  return (
    <button onClick={onClick}>
      <div className="container">
        <div className="left-side ">
          <div className="card">
            <div className="card-line"></div>
            <div className="buttons "></div>
          </div>
          <div className="post ">
            <div className="post-line"></div>
            <div className="screen">
              <div className="dollar">$</div>
            </div>
            <div className="numbers"></div>
            <div className="numbers-line2"></div>
          </div>
        </div>
        <div className="right-side -ml-2">
          <div className="new text-black text-sm">Send Money</div>

          <svg
            viewBox="0 0 451.846 451.847"
            height="512"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow"
          >
            <path
              fill="#cfcfcf"
              data-old_color="#000000"
              class="active-path"
              data-original="#000000"
              d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
            ></path>
          </svg>
        </div>
      </div>
    </button>
  );
}
