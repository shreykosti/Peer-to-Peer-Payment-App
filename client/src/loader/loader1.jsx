import "./loader.css";
export function Loader1() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-950 ">
      <div className="card1 -mt-20 p-4">
        <div className="loader">
          <p className="text-white">Loading</p>
          <div className="words text-4xl">
            <span className="word"> </span>
            <span className="word">forms</span>
            <span className="word">switches</span>
            <span className="word">cards</span>
            <span className="word">buttons</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Loader2() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div class="hourglassBackground ">
          <div class="hourglassContainer">
            <div class="hourglassCurves"></div>
            <div class="hourglassCapTop"></div>
            <div class="hourglassGlassTop"></div>
            <div class="hourglassSand"></div>
            <div class="hourglassSandStream"></div>
            <div class="hourglassCapBottom"></div>
            <div class="hourglassGlass"></div>
          </div>
        </div>
        <span className="text-4xl ml-5">processing...</span>
      </div>
    </div>
  );
}
export function Loader3() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="loader1 opacity-75"></div>
    </div>
  );
}

export function Loader4() {
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div class="loader3"></div>
    </div>
  );
}
