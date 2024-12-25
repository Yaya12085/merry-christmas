import { motion } from "motion/react";
import { useState } from "react";
import ScratchToReveal from "./components/ScratchToReveal";
import Snowfall from "./components/Snowfall";
import StarBackground from "./components/StarBackground";

function App() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showWish, setShowWish] = useState(false);

  const handleComplete = () => {
    setIsRevealed(true);
    setShowWish(true);
  };

  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-center min-h-[100dvh] bg-black">
      <Snowfall />
      <StarBackground />

      {!isRevealed && (
        <div className="flex flex-col gap-3 items-center">
          <p className="mt-4 text-lg text-white">
            Scratch to reveal your special wish 🎁
          </p>

          <ScratchToReveal
            width={350}
            height={250}
            minScratchPercentage={70}
            onComplete={handleComplete}
            className="flex overflow-hidden justify-center items-center rounded-md"
            gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
          >
            <p
              className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Merry Christmas!
            </p>
          </ScratchToReveal>
        </div>
      )}

      {showWish && (
        <motion.div
          className="absolute px-4 text-center text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p
            className="text-3xl font-semibold md:text-4xl"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Wishing you a season filled with warmth, joy, and all the magic that
            Christmas brings!
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default App;
