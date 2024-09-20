import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Intro from "./sections/Intro";
import Resume from "./sections/Resume";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import Social from "./components/Social";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Home />
      <Intro />
      <div className="relative px-6 lg:px-20 pt-10 md:pt-32 xl:px-44 md:px-10">
        <Portfolio />
        <Skills />
        <Resume />
        <Contact />
      </div>
      <Social />
      <Footer />
    </>
  );
}

export default App;
