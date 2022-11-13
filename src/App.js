import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  //hover
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    //hover
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  //hover effect
  const textEnter = () => {
    setCursorVariant("text");
  };
  const textLeave = () => {
    setCursorVariant("default");
  };

  return (
    <div className="App">
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="title">
        Hello world
      </h1>
      <motion.div variants={variants} animate={cursorVariant} className="cursor" />
    </div>
  );
}

export default App;
