import { createContext, useCallback, useState } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import BuggyComponent from "./util/BuggyComponent";
import Project from "./sections/Project";
import Tape from "./component/Tape";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { CommonContext } from "./contens";
import Toaster from "./component/Toaster";


export default function App() {
  const [ menuOpen, setMenuOpen ] = useState( false );
  const [ isHireMe, setIsHireMe ] = useState( false );
  const [closeToster, setToster] = useState({
    Message: "",
    close: false,
    variant:'success',
  });
  const [hrDetail, setHrDetails] = useState({
    email: "",
    mobile: "",
  });
  
  return (
    <div className="bg-gray-900 min-h-screen overflow-x-clip antialiased text-white">
      <CommonContext.Provider
        value={{
          hrDetail,
          setHrDetails,
          menuOpen,
          setMenuOpen,
          isHireMe,
          setIsHireMe,
          closeToster,
          setToster,
        }}
      >
         <Toaster />
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Hero menuOpen={menuOpen} />
        {/* This throws during render → automatically caught */}
        <BuggyComponent />
        <Tape />
        <Project />
        <About />
        <Services />
        <Contact />
        <Footer />
      </CommonContext.Provider>
    </div>
  );
}
