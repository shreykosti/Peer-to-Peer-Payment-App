"use client";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, lazy, Suspense, useEffect } from "react";
import { Togglebutton2 } from "./components/Button.jsx";
const Signup = lazy(() => import("./pages/SignUp.jsx"));
const Signin = lazy(() => import("./pages/SignIn.jsx"));
const Sendmoney = lazy(() => import("./pages/Sendmoney.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const Aftermoney = lazy(() => import("./pages/Aftermoney.jsx"));
const TransationHistory = lazy(() => import("./pages/TransationHistory.jsx"));
const Pinpage = lazy(() => import("./pages/Pinpage.jsx"));
const Landingpage = lazy(() => import("./pages/Landingpage.jsx"));
const ForgetPassword = lazy(() => import("./pages/ForgetPassword.jsx"));
import { Loader1, Loader2, Loader3, Loader4 } from "./loader/loader1.jsx";
import Delayed from "./loader/Delay.jsx";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLandingPage(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-slate-700 dark:bg-slate-950 h-full w-full font-medium flex items-center justify-center text-neutral-300 dark:text-green-500 ">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader1 />}>
                {showLandingPage ? <Landingpage /> : <Loader1 />}
              </Suspense>
            }
          />
          {/* <Route
            path="/loader"
            element={
              <Suspense fallback={"..loading"}>
                <Loader4 />
              </Suspense>
            }
          /> */}
          <Route
            path="/signin"
            element={
              <Suspense fallback={<Loader3 />}>
                <Delayed waitBeforeShow={2000} fallback={<Loader3 />}>
                  <Signin />
                </Delayed>
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<Loader3 />}>
                <Delayed waitBeforeShow={2000} fallback={<Loader3 />}>
                  <Signup />
                </Delayed>
              </Suspense>
            }
          />
          <Route
            path="/sendmoney"
            element={
              <Suspense fallback={<Loader4 />}>
                <Sendmoney />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<Loader4 />}>
                <Delayed waitBeforeShow={1000} fallback={<Loader4 />}>
                  <Dashboard />
                </Delayed>
              </Suspense>
            }
          />
          <Route
            path="/transfer/complete"
            element={
              <Suspense fallback={<Loader2 />}>
                <Delayed waitBeforeShow={2000} fallback={<Loader2 />}>
                  <Aftermoney />
                </Delayed>
              </Suspense>
            }
          />
          <Route
            path="/transactionhistory"
            element={
              <Suspense fallback={<Loader2 />}>
                <Delayed waitBeforeShow={1000} fallback={<Loader2 />}>
                  <TransationHistory />
                </Delayed>
              </Suspense>
            }
          />
          <Route
            path="/pinpage"
            element={
              <Suspense fallback={<Loader2 />}>
                <Delayed waitBeforeShow={1500} fallback={<Loader2 />}>
                  <Pinpage />
                </Delayed>
              </Suspense>
            }
          />
          <Route
            path="/forgetpassword"
            element={
              <Suspense fallback={<Loader2 />}>
                <ForgetPassword />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
