import {
  createContext,
  useEffect,
  useRef,
  useState,
  lazy,
  Suspense,
  useMemo,
} from "react";
import Header from "./sections/Header";
import { CommonContext } from "./contens";
import Toaster from "./component/Toaster";
import ScrollProgressBar from "./component/ScrollingProgressBar";

// Error Boundary Component
const ErrorBoundary = ({ children, fallback }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error("Component error:", error);
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);
    return () => window.removeEventListener("error", errorHandler);
  }, []);

  if (hasError) {
    return fallback;
  }

  return children;
};

// Lazy load components with error handling
const createLazyComponent = (importFunc, componentName) => {
  return lazy(() =>
    importFunc().catch((error) => {
      console.error(`Failed to load ${componentName}:`, error);
      return {
        default: () => (
          <div className="p-8 bg-red-900/20 border border-red-500 rounded-lg">
            <p className="text-red-400">Failed to load {componentName}</p>
            <p className="text-red-300 text-sm">{error.message}</p>
          </div>
        ),
      };
    })
  );
};

const Hero = createLazyComponent(() => import("./sections/Hero"), "Hero");
const Project = createLazyComponent(
  () => import("./sections/Project"),
  "Project"
);
const Tape = createLazyComponent(() => import("./component/Tape"), "Tape");
const About = createLazyComponent(() => import("./sections/About"), "About");
const Services = createLazyComponent(
  () => import("./sections/Services"),
  "Services"
);
const Contact = createLazyComponent(
  () => import("./sections/Contact"),
  "Contact"
);
const Footer = createLazyComponent(() => import("./sections/Footer"), "Footer");
const ExperienceDetails = createLazyComponent(
  () => import("./component/ExperienceDetails"),
  "ExperienceDetails"
);
const ConfettiBlast = createLazyComponent(
  () => import("./component/Celibration"),
  "ConfettiBlast"
);
const IndustrialProject = createLazyComponent(
  () => import("./sections/IndustrialProject"),
  "IndustrialProject"
);
const ScrollToTopButton = createLazyComponent(
  () => import("./component/ScrolleTop"),
  "ScrollToTopButton"
);

// Loading component
const LoadingFallback = ({ height = "h-64", componentName = "Component" }) => (
  <div
    className={`flex flex-col justify-center items-center ${height} bg-gray-900/50 border border-gray-700 rounded-lg m-4`}
  >
    <div className="flex items-center space-x-2 mb-2">
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
      <div
        className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"
        style={{ animationDelay: "0.1s" }}
      ></div>
      <div
        className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"
        style={{ animationDelay: "0.2s" }}
      ></div>
    </div>
    <p className="text-gray-400 text-sm">Loading {componentName}...</p>
  </div>
);

// Optimized ScrollReveal
const OptimizedScrollReveal = ({ children, delay = 0, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default function App() {
  const [siteOpen, setSiteOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHireMe, setIsHireMe] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedComponents, setLoadedComponents] = useState(new Set());
  const controleRef = useRef(null);

  const [closeToster, setToster] = useState({
    Message: "",
    close: false,
    variant: "success",
  });

  const [hrDetail, setHrDetails] = useState({
    email: "",
    mobile: "",
  });

  // Memoize context value
  const contextValue = useMemo(
    () => ({
      hrDetail,
      setHrDetails,
      menuOpen,
      setMenuOpen,
      isHireMe,
      setIsHireMe,
      closeToster,
      setToster,
    }),
    [hrDetail, menuOpen, isHireMe, closeToster]
  );

  // Initial load effect - REMOVE automatic scroll
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Tab management
  useEffect(() => {
    let isChecked = false;
    let timeoutId;

    const channel = new BroadcastChannel("myAppChannel");

    const handleMessage = (msg) => {
      if (msg.data === "tab-opened" && !isChecked) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          isChecked = true;
          setSiteOpen(true);
        }, 100);
      }
    };

    channel.addEventListener("message", handleMessage);
    channel.postMessage("tab-opened");

    return () => {
      channel.removeEventListener("message", handleMessage);
      channel.close();
      clearTimeout(timeoutId);
    };
  }, []);

  // Early return for site open
  if (siteOpen) {
    return (
      <div className="h-screen w-screen flex justify-center items-center text-center bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="flex justify-center items-center w-80 h-80 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-2xl shadow-gray-900 font-bold text-2xl text-gray-900 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
          This site is already open in another tab.
        </div>
      </div>
    );
  }

  // Show initial loader
  if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 overflow-hidden">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg font-semibold">
            Loading Portfolio...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
      ref={controleRef}
    >
      <ScrollProgressBar />
      <CommonContext.Provider value={contextValue}>
        <Toaster />
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <main className="w-full">
          {/* Test component to verify rendering */}
          {/* <div className="fixed top-20 left-4 z-50 bg-green-500 text-black p-2 rounded text-sm font-bold">
            Components Loading...
          </div> */}

          {/* Hero */}
          <ErrorBoundary
            fallback={
              <div className="p-8 bg-red-500/20">Hero Failed to Load</div>
            }
          >
            <OptimizedScrollReveal delay={0}>
              <Suspense fallback={<LoadingFallback componentName="Hero" />}>
                <Hero menuOpen={menuOpen} />
              </Suspense>
            </OptimizedScrollReveal>
          </ErrorBoundary>

          {/* Tape */}
          <ErrorBoundary
            fallback={
              <div className="p-4 bg-red-500/20">Tape Failed to Load</div>
            }
          >
            <OptimizedScrollReveal delay={100}>
              <Suspense
                fallback={
                  <LoadingFallback height="h-32" componentName="Tape" />
                }
              >
                <Tape />
              </Suspense>
            </OptimizedScrollReveal>
          </ErrorBoundary>

          {/* Project */}
          <ErrorBoundary
            fallback={
              <div className="p-8 bg-red-500/20">Project Failed to Load</div>
            }
          >
            <OptimizedScrollReveal delay={200}>
              <Suspense fallback={<LoadingFallback componentName="Projects" />}>
                <Project />
              </Suspense>
            </OptimizedScrollReveal>
          </ErrorBoundary>

          {/* Experience */}
          <ErrorBoundary
            fallback={
              <div className="p-8 bg-red-500/20">Experience Failed to Load</div>
            }
          >
            <OptimizedScrollReveal delay={150}>
              <Suspense
                fallback={<LoadingFallback componentName="Experience" />}
              >
                <ExperienceDetails />
              </Suspense>
            </OptimizedScrollReveal>
          </ErrorBoundary>

          {/* Industrial Project */}
          <ErrorBoundary
            fallback={
              <div className="p-8 bg-red-500/20">
                Industrial Project Failed to Load
              </div>
            }
          >
            <OptimizedScrollReveal delay={250}>
              <Suspense
                fallback={
                  <LoadingFallback componentName="Industrial Projects" />
                }
              >
                <IndustrialProject />
              </Suspense>
            </OptimizedScrollReveal>
          </ErrorBoundary>

          {/* About */}
          <ErrorBoundary
            fallback={
              <div className="p-8 bg-red-500/20">About Failed to Load</div>
            }
          >
            <OptimizedScrollReveal delay={300}>
              <Suspense fallback={<LoadingFallback componentName="About" />}>
                <About />
              </Suspense>
            </OptimizedScrollReveal>
          </ErrorBoundary>

          {/* Services */}
          <ErrorBoundary
            fallback={
              <div className="p-8 bg-red-500/20">Services Failed to Load</div>
            }
          >
            <OptimizedScrollReveal delay={350}>
              <Suspense fallback={<LoadingFallback componentName="Services" />}>
                <Services />
              </Suspense>
            </OptimizedScrollReveal>
          </ErrorBoundary>

          {/* Confetti */}
          <ErrorBoundary
            fallback={
              <div className="p-4 bg-red-500/20">Confetti Failed to Load</div>
            }
          >
            <Suspense
              fallback={
                <LoadingFallback height="h-32" componentName="Confetti" />
              }
            >
              <ConfettiBlast />
            </Suspense>
          </ErrorBoundary>

          {/* Contact */}
          <ErrorBoundary
            fallback={
              <div className="p-8 bg-red-500/20">Contact Failed to Load</div>
            }
          >
            <OptimizedScrollReveal delay={400}>
              <Suspense fallback={<LoadingFallback componentName="Contact" />}>
                <Contact />
              </Suspense>
            </OptimizedScrollReveal>
          </ErrorBoundary>

          {/* Footer */}
          <ErrorBoundary
            fallback={
              <div className="p-8 bg-red-500/20">Footer Failed to Load</div>
            }
          >
            <OptimizedScrollReveal delay={450}>
              <Suspense fallback={<LoadingFallback componentName="Footer" />}>
                <Footer />
              </Suspense>
            </OptimizedScrollReveal>
          </ErrorBoundary>

          {/* Scroll to Top */}
          <ErrorBoundary fallback={null}>
            <Suspense fallback={null}>
              <ScrollToTopButton />
            </Suspense>
          </ErrorBoundary>
        </main>
      </CommonContext.Provider>
    </div>
  );
}
