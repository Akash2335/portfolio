import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.jsx";

// Enhanced Fallback Component with real-time error info
function FallBackComponent({ error, resetErrorBoundary, componentStack }) {
  // Get current timestamp
  const errorTime = new Date().toLocaleString();

  // Extract detailed component information
  const getErrorDetails = () => {
    const errorMsg = error.message.toLowerCase();
    let componentName = "Unknown Component";
    let errorType = "Runtime Error";
    let suggestions = [];

    // Component detection
    if (errorMsg.includes("project")) {
      componentName = "Project Component";
      suggestions = [
        "Check if the projects data is properly imported",
        "Verify the projects array structure",
        "Ensure all required props are passed",
      ];
    } else if (errorMsg.includes("hero")) {
      componentName = "Hero Component";
      suggestions = [
        "Check image imports and paths",
        "Verify animation dependencies",
        "Ensure all assets are properly loaded",
      ];
    } else if (errorMsg.includes("header")) {
      componentName = "Header Component";
      suggestions = [
        "Check menuItems data structure",
        "Verify navigation logic",
        "Ensure responsive breakpoints work correctly",
      ];
    } else if (errorMsg.includes("hook")) {
      componentName = "Hook Usage Error";
      errorType = "React Hook Violation";
      suggestions = [
        "Check if hooks are called at the top level",
        "Verify dependencies in useEffect/useMemo",
        "Ensure hooks are not called conditionally",
      ];
    } else if (errorMsg.includes("undefined") || errorMsg.includes("null")) {
      errorType = "Reference Error";
      suggestions = [
        "Check if variables/imports are properly defined",
        "Verify object property access",
        "Ensure data is loaded before rendering",
      ];
    }

    // Fallback to component stack parsing
    if (componentName === "Unknown Component" && componentStack) {
      const stackLines = componentStack.split("\n");
      for (const line of stackLines) {
        const match = line.match(/at\s+(\w+)/);
        if (
          match &&
          !["ErrorBoundary", "FallBackComponent"].includes(match[1])
        ) {
          componentName = `${match[1]} Component`;
          break;
        }
      }
    }

    return { componentName, errorType, suggestions };
  };

  const { componentName, errorType, suggestions } = getErrorDetails();

  // Get browser and environment info
  const browserInfo = {
    userAgent: navigator.userAgent,
    viewport: `${window.innerWidth} x ${window.innerHeight}`,
    online: navigator.onLine,
    url: window.location.href,
  };

  return (
    <div
      role="alert"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4"
    >
      <div className="bg-gray-800/95 backdrop-blur-xl rounded-2xl border border-red-500/30 p-6 max-w-2xl w-full text-white shadow-2xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🚨</span>
          </div>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Application Error
          </h1>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="bg-red-500/20 px-3 py-1 rounded-full border border-red-500/30">
              {errorType}
            </span>
            <span className="bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30">
              {componentName}
            </span>
            <span className="bg-green-500/20 px-3 py-1 rounded-full border border-green-500/30">
              {errorTime}
            </span>
          </div>
        </div>

        {/* Error Details */}
        <div className="space-y-4 mb-6">
          {/* Error Message */}
          <div className="bg-black/40 rounded-xl p-4 border border-red-500/20">
            <h3 className="font-semibold text-red-300 mb-2 flex items-center gap-2">
              <span>📝</span> Error Message
            </h3>
            <code className="text-sm text-red-200 font-mono break-words bg-black/30 p-3 rounded-lg block">
              {error.message}
            </code>
          </div>

          {/* Quick Fix Suggestions */}
          {suggestions.length > 0 && (
            <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20">
              <h3 className="font-semibold text-yellow-300 mb-2 flex items-center gap-2">
                <span>💡</span> Suggested Fixes
              </h3>
              <ul className="text-sm text-yellow-200 space-y-1">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span>•</span>
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Environment Info */}
          <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
            <h3 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
              <span>🌐</span> Environment
            </h3>
            <div className="text-sm text-blue-200 space-y-1">
              <div className="flex justify-between">
                <span>Browser:</span>
                <span className="font-mono text-xs">
                  {browserInfo.userAgent.split(" ")[0]}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Viewport:</span>
                <span className="font-mono text-xs">
                  {browserInfo.viewport}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span
                  className={`font-mono text-xs ${
                    browserInfo.online ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {browserInfo.online ? "Online" : "Offline"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
            onClick={resetErrorBoundary}
          >
            <span>🔄</span>
            Try Again
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
            onClick={() => window.location.reload()}
          >
            <span>📄</span>
            Reload Page
          </button>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(
                  `Error: ${error.message}\nComponent: ${componentName}\nStack: ${error.stack}`
                );
                alert("Error details copied to clipboard!");
              }
            }}
          >
            <span>📋</span>
            Copy Details
          </button>
        </div>

        {/* Development Info */}
        {process.env.NODE_ENV === "development" && (
          <div className="border-t border-gray-600 pt-4">
            <details className="group">
              <summary className="cursor-pointer text-sm text-gray-300 hover:text-white font-semibold flex items-center gap-2">
                <span>🐛</span>
                Development Details (Click to expand)
              </summary>

              {/* Error Stack */}
              <div className="mt-3 bg-black/40 rounded-lg p-3">
                <h4 className="text-xs font-semibold text-gray-400 mb-2">
                  Error Stack:
                </h4>
                <pre className="text-xs text-red-300 overflow-auto max-h-32 font-mono">
                  {error.stack}
                </pre>
              </div>

              {/* Component Stack */}
              {componentStack && (
                <div className="mt-3 bg-black/40 rounded-lg p-3">
                  <h4 className="text-xs font-semibold text-gray-400 mb-2">
                    Component Stack:
                  </h4>
                  <pre className="text-xs text-blue-300 overflow-auto max-h-32 font-mono">
                    {componentStack}
                  </pre>
                </div>
              )}

              {/* Quick Debug Actions */}
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded border border-gray-600 transition-colors"
                  onClick={() =>
                    console.error("Full error details:", {
                      error,
                      componentStack,
                    })
                  }
                >
                  Log to Console
                </button>
                <button
                  className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded border border-gray-600 transition-colors"
                  onClick={() => {
                    const debugInfo = {
                      error: error.message,
                      component: componentName,
                      timestamp: errorTime,
                      url: browserInfo.url,
                      userAgent: browserInfo.userAgent,
                    };
                    console.table(debugInfo);
                  }}
                >
                  Show Debug Table
                </button>
              </div>
            </details>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-4 pt-4 border-t border-gray-700">
          <p className="text-xs text-gray-400">
            Need help? Check the browser console for detailed logs
            {process.env.NODE_ENV === "development" &&
              " or contact the development team"}
          </p>
        </div>
      </div>
    </div>
  );
}

// Enhanced error logger with more context
const logError = (error, info) => {
  const errorContext = {
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    componentStack: info.componentStack,
    error: {
      message: error.message,
      stack: error.stack,
      name: error.name,
    },
  };

  console.group("🚨 CRITICAL ERROR BOUNDARY TRIGGERED");
  console.error("Error Details:", error);
  console.error("Component Stack:", info.componentStack);
  console.error("Full Context:", errorContext);
  console.groupEnd();

  // Send to error reporting service (uncomment to use)
  // sendErrorToService(error, errorContext);
};

// Error boundary reset handler with recovery logic
const handleReset = () => {
  console.log("🔄 Error boundary reset initiated");

  // Clear any problematic state from localStorage/sessionStorage if needed
  const keysToClear = ["problematic_state_key"];
  keysToClear.forEach((key) => {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
      console.log(`Cleared localStorage key: ${key}`);
    }
  });

  // Force a small delay to ensure clean state
  setTimeout(() => {
    console.log("✅ Error boundary reset complete");
  }, 100);
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={FallBackComponent}
      onError={logError}
      onReset={handleReset}
      onRetry={(attempt) => console.log(`Retry attempt: ${attempt}`)}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>
);
