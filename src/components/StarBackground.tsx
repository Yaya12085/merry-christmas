import { Star } from "lucide-react";
import { motion } from "motion/react";

const StarBackground = () => {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        >
          <Star className="w-4 h-4 text-yellow-200" />
        </motion.div>
      ))}
    </>
  );
};

export default StarBackground;
