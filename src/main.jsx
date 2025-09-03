import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ErrorBoundary } from "react-error-boundary";
import App from './App.jsx'

// eslint-disable-next-line react-refresh/only-export-components
function FallBackComponent({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="p-6 text-center text-white bg-red-600">
      <p className="text-lg font-semibold">Something went wrong:</p>
      <pre className="text-sm">{error.message}</pre>
      <button
        className="mt-4 bg-white text-red-600 px-4 py-2 rounded-md"
        onClick={resetErrorBoundary}
      >
        Try Again
      </button>
    </div>
  );
}


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={FallBackComponent}
      onReset={() => {
        // Nothing to reset unless you toggle state to re-mount
        console.log("Reset triggered");
      }}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>
);
