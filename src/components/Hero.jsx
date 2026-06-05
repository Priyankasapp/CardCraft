import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleCardClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <section className="min-h-[85vh] flex items-center bg-[#faf7ff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content with animations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6"
            >
              <Sparkles size={16} />
              AI-Powered Design
            </motion.div> */}

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl lg:text-7xl font-bold "
            >
              Create Stunning
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
                Digital Business Cards
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 text-lg text-slate-600 dark:text-gray-600 max-w-xl leading-relaxed"
            >
              Design, customize, preview in 3D, generate QR codes,
              and download professional business cards in seconds.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-fuchsia-400 to-purple-800 text-white font-medium shadow-lg transition-all duration-300 cursor-pointer"
              >
                Start Designing
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 transition-all duration-300 cursor-pointer"
              >
                Explore Templates
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Card Preview with 3D effect and rotation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center perspective-1000"
            style={{ perspective: "1000px" }}
          >
            <div className="relative w-full max-w-md">
              {/* Glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-4 bg-purple-500/20 blur-3xl rounded-full"
              />


              {/* Floating animation wrapper - continuous up and down */}
              <motion.div
                animate={{
                  y: [0, -15, 0, 15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                 {/* 3D Card Container */}
              <motion.div
                animate={{
                  rotateY: isRotated ? 180 : 0,
                }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  cursor: "pointer",
                }}
                className="relative"
              >
             
                {/* Front Side */}
                <motion.div
                  whileHover={{
                    rotateX: 8,
                    rotateY: 12,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  onHoverStart={(e) => {
                    // Optional: add sound or other effects
                  }}
                  onClick={handleCardClick}
                  style={{
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                  }}
                  className="relative bg-gradient-to-br from-[#151336] to-[#2b1b5a] rounded-3xl p-8 h-[280px] shadow-2xl overflow-hidden cursor-pointer"
                >
                  {/* Animated gradient border */}
                  <motion.div
                    animate={{
                      background: [
                        "linear-gradient(0deg, rgba(139,92,246,0) 0%, rgba(139,92,246,0) 100%)",
                        "linear-gradient(180deg, rgba(139,92,246,0.3) 0%, rgba(236,72,153,0.3) 100%)",
                        "linear-gradient(0deg, rgba(139,92,246,0) 0%, rgba(139,92,246,0) 100%)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                  />

                  {/* Decorative Glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 0.8, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 blur-[80px] opacity-60"
                  />

                  {/* Floating particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -20 - i * 5, 0],
                        x: [0, (i % 2 === 0 ? 10 : -10), 0],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }}
                      className="absolute w-1 h-1 bg-purple-300 rounded-full"
                      style={{
                        top: `${20 + i * 10}%`,
                        left: `${80 - i * 8}%`,
                      }}
                    />
                  ))}

                  {/* QR Placeholder with animation */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex justify-center items-center h-full relative z-10"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(139, 92, 246, 0)",
                          "0 0 0 8px rgba(139, 92, 246, 0.3)",
                          "0 0 0 0 rgba(139, 92, 246, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-24 h-24 bg-white rounded-lg flex items-center justify-center"
                    >
                      <div className="grid grid-cols-8 gap-[2px]">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-[4px] h-[4px] ${
                              Math.random() > 0.5 ? "bg-black" : "bg-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Text */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute top-6 right-6 text-white/70 text-sm text-right"
                  >
                    <p className="font-semibold">CardCraft </p>
                    <p className="text-xs">Professional Design</p>
                  </motion.div>

                  {/* Hover instruction hint */}
                  <motion.div
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white/40 text-[10px] whitespace-nowrap"
                  >
                    Hover for 3D | Click to rotate
                  </motion.div>
                </motion.div>

                {/* Back Side (shown when rotated) */}
                <motion.div
                  onClick={handleCardClick}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    transformStyle: "preserve-3d",
                  }}
                  className="bg-gradient-to-br from-[#1a1840] to-[#3d2a7a] rounded-3xl p-8 shadow-2xl"
                >
                  <div className="flex flex-col items-center justify-center h-full gap-4">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Sparkles className="w-12 h-12 text-purple-400" />
                    </motion.div>
                    <p className="text-white text-center font-medium">
                      Premium Business Card
                    </p>
                    <div className="flex gap-2 mt-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full" />
                      <div className="w-8 h-8 bg-white/20 rounded-full" />
                      <div className="w-8 h-8 bg-white/20 rounded-full" />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-4 py-2 bg-purple-500 rounded-lg text-white text-sm font-medium"
                      onClick={handleCardClick}
                    >
                      Flip Back
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
              </motion.div>

              <motion.p
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-center mt-6 text-sm text-slate-500 dark:text-gray-400"
              >
                ✨ Hover for 3D effect | Click to flip card ✨
              </motion.p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;