import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import Chip from "./components/Chip";
import Footer from "./components/Footer";
import Splash from "./components/Splash";
import { useEffect, useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  });

  return (
    <>
      {isLoading ? (
        <Splash />
      ) : (
        <main className="bg-black">
          <Navbar />
          <Hero />
          <Highlights />
          <Model />
          <Features />
          <Chip />
          <Footer />
        </main>
      )}
    </>
  );
};

export default App;
