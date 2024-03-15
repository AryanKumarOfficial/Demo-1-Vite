import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <section className="container mx-auto flex justify-center items-center my-auto h-screen">
      <h1 className="text-black font-bold text-5xl">Home</h1>
    </section>
  );
};

export default Home;
