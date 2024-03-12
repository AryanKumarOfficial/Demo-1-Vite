import { useEffect } from "react";
import "../src/App.css";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
