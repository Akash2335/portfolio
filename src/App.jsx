import { createContext, useCallback, useEffect, useRef, useState } from "react";
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
import ExperienceDetails from "./component/ExperienceDetails";
import ConfettiBlast from "./component/Celibration";
import IndustrialProject from "./sections/IndustrialProject";
import ScrollReveal from "./component/ScrollReal";
import ScrollProgressBar from "./component/ScrollingProgressBar";

export default function App() {
  const [siteOpen, SetSiteOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHireMe, setIsHireMe] = useState(false);
  const ControleRef = useRef(null);
  const [closeToster, setToster] = useState({
    Message: "",
    close: false,
    variant: "success",
  });
  const [hrDetail, setHrDetails] = useState({
    email: "",
    mobile: "",
  });
  useEffect(() => {
    ControleRef.current.scrollIntoView({ behavior: "smooth" });
    let isChecked = false;
    const channel = new BroadcastChannel("myAppChannel");

    // Listen for messages from other tabs
    channel.onmessage = (msg) => {
      if (msg.data === "tab-opened") {
        if (!isChecked) {
          isChecked = true;
          SetSiteOpen(true);
        }
      }
    };

    // Notify other tabs that this tab is open
    channel.postMessage("tab-opened");

    // Clean up on unmount
    return () => {
      channel.close();
    };
  }, []);
  if (siteOpen)
    return (
      <div className="h-screen w-screen flex justify-center items-center text-center bg-gray-800">
        <div className="flex justify-center items-center w-80 h-80 bg-yellow-200 rounded-md  shadow-lg shadow-gray-700 font-semibold text-2xl hover:text-4xl hover:scale-110">
          This site is already open in another tab.
        </div>
      </div>
    );

  return (
    <div
      className="bg-gray-900 min-h-screen overflow-x-clip antialiased text-white"
      ref={ControleRef}
    >
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
        {/* <AsideVerticle/> */}
        <Toaster />
        <Header menuOpen={ menuOpen } setMenuOpen={ setMenuOpen } />
        <ScrollProgressBar/>
        <ScrollReveal animation="fad-up">
          <Hero menuOpen={menuOpen} />
        </ScrollReveal>
        {/* This throws during render → automatically caught */}
        <BuggyComponent />
        <ScrollReveal animation="fad-up" delay={0.3}>
          <Tape />
        </ScrollReveal>
        <ScrollReveal animation="fad-up" delay={0.6}>
          <Project />
        </ScrollReveal>
        <ScrollReveal animation="fad-up" delay={0.9}>
          <ExperienceDetails />
        </ScrollReveal>
        <ScrollReveal animation="fad-up" delay={0.12}>
          <IndustrialProject />
        </ScrollReveal>
        <ScrollReveal animation="fad-up" delay={0.15}>
          <About />
        </ScrollReveal>

        <ScrollReveal animation="fad-up" delay={0.18}>
          <Services />
        </ScrollReveal>
        <ConfettiBlast />
        <ScrollReveal animation="fad-up" delay={0.21}>
          <Contact />
        </ScrollReveal>

        <ScrollReveal animation="fad-up" delay={0.24}>
          <Footer />
        </ScrollReveal>
      </CommonContext.Provider>
    </div>
  );
}
