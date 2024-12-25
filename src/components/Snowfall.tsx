import { motion } from "motion/react";
import { useEffect, useState } from "react";

const generateSnowflakes = (count: number, width: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * width,
    fontSize: Math.random() * 10 + 10,
  }));

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<
    Array<{ id: number; x: number; fontSize: number }>
  >([]);

  useEffect(() => {
    const width = window.innerWidth;
    setSnowflakes(generateSnowflakes(50, width));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setSnowflakes((prev) => generateSnowflakes(prev.length, width));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute text-white text-opacity-80"
          initial={{ y: -20, x: flake.x }}
          animate={{
            y: window.innerHeight,
            x: flake.x + Math.random() * 50 - 25,
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ fontSize: flake.fontSize }}
        >
          ❄
        </motion.div>
      ))}
    </div>
  );
};

export default Snowfall;
