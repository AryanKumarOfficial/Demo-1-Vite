import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setProgress(40);
    };

    const handleRouteChangeComplete = () => {
      setProgress(100);
    };

    // Subscribe to route changes
    const unlisten = () => {
      handleRouteChangeStart();
      setTimeout(handleRouteChangeComplete, 500); // Simulating loading time
    };

    // Simulate initial loading
    unlisten();

    // Cleanup function
    return () => {
      setProgress(0); // Reset progress on unmount
    };
  }, [location]); // Re-run effect when location changes

  return (
    <>
      <LoadingBar
        color={"#f11946"}
        progress={progress} // Set progress to 100 when loading, 0 otherwise
        onLoaderFinished={() => setProgress(0)} // Reset progress to 0 when finished
        height={3}
        shadow={true}
      />
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
