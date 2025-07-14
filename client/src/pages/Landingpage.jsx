import TypingAnimation from "../components/magicui/typing-animation.jsx";
import ShineBorder from "../components/magicui/shine-border.jsx";
import WordRotate from "../components/magicui/word-rotate.jsx";
import BlurIn from "../components/magicui/blur.jsx";
import { LandingpageNavbar } from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
export default function Landingpage() {
  const svg1 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-14 mt-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  );
  return (
    <div className="w-full h-screen">
      <LandingpageNavbar />
      <div className="w-full h-screen overflow-auto flex flex-col  items-center">
        <div className="w-full h-12  bg-black"></div>
        <div className="flex flex-col items-center justify-center gap-3 mt-10">
          <span className="text-5xl sm:text-4xl font-serif">Peer to Peer</span>
          <span className="text-5xl sm:text-6xl font-serif">Payment app</span>
        </div>

        <div className="w-full mt-10">
          <div className="w-full mt-10 flex flex-col md:flex-row items-center justify-around gap-10 md:gap-0">
            <ShineBorder
              className="text-center text-3xl font-bold"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              children={
                <Link to="/signup" target="_blank">
                  <button className="w-full h-full">Sign Up</button>
                </Link>
              }
            />
            <ShineBorder
              className="text-center text-3xl font-bold "
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              children={
                <Link to="/signin" target="_blank">
                  <button className="w-full h-full">Sign In</button>
                </Link>
              }
            />
            <ShineBorder
              className="text-center text-3xl font-bold"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              children={
                <Link to="/dashboard" target="_blank">
                  <button className="w-full h-full">Dashboard</button>
                </Link>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="w-full mt-10 flex justify-end">
            <span>go to Dashboard </span>
            <ShineBorder
              className="text-center text-3xl font-bold  mr-20"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              children={
                <Link to="/dashboard" target="_blank">
                  <button className="  w-full h-full">Dashboard</button>
                </Link>
              }
            />
          </div>
          
           */
}
