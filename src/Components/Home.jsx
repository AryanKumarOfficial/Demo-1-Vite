import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <section className="container">
      <h1 className="text-black">Home</h1>
    </section>
  );
};

export default Home;
