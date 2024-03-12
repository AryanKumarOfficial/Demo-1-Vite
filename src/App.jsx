import { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.title = "React Counter";
  }, []);
  return (
    <>
      <section>
        <h1>React Counter</h1>
      </section>
    </>
  );
};

export default App;
