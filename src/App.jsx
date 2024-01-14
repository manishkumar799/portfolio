import "./App.css";
import "./index.css";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Social from "./components/Social";

function App() {
  return (
    <>
      <div className="">
        <Home />
        <Intro />
        <Resume />
        <Social />

        <div className=" h-[100px] text-white flex justify-center items-center bg-black flex-end">
          © Copyright. All Rights Reserved
        </div>
      </div>
    </>
  );
}

export default App;
