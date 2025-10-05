import React from "react";
import { motion } from "framer-motion";

const FeaturesBar = () => {
  const features = [
    "Budget friendly",
    "No. 1 in Europe",
    "On your first order",
    "For all products buy now get the offer",
    "User Friendly",
    "24/7 Service",
  ];

  return (
    <div className="w-full bg-[#110C15] to-black py-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-4 text-white text-sm md:text-base font-medium"
      >
        {features.map((item, index) => (
          <React.Fragment key={index}>
            {item === "On your first order" ? (
              <span className="flex items-center gap-2">
                {item}
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full font-semibold text-xs md:text-sm"
                >
                  30% OFF
                </motion.span>
              </span>
            ) : (
              <span>{item}</span>
            )}
            {index !== features.length - 1 && (
              <span className="text-gray-400">•</span>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturesBar;
