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
import { motion } from "framer-motion";

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
  // Modern site open detection component
  if (siteOpen) {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900 overflow-hidden relative">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}

          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Main Content */}
        <motion.div
          className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border-2 border-white/20 p-12 shadow-2xl text-center max-w-md mx-4"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Warning Icon */}
          <motion.div
            className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-3xl">⚠️</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Session Already Active
          </motion.h2>

          {/* Message */}
          <motion.p
            className="text-white/80 leading-relaxed mb-6 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            This portfolio is already open in another browser tab. Please close
            the other tab or continue using the existing session.
          </motion.p>

          {/* Action Button */}
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl text-white font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.reload()}
          >
            <span className="flex items-center gap-2">
              <span>🔄</span>
              Refresh Page
            </span>
          </motion.button>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl"
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-orange-400/50 rounded-br-2xl"
            animate={{
              opacity: [0.8, 0.3, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1,
            }}
          />
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/40 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Akash Bharati - Portfolio
        </motion.div>
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
