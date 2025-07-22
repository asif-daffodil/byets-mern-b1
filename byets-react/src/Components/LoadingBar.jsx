import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const LoadingBar = () => {
  const controls = useAnimation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      controls.start({
        width: "100%",
        transition: { duration: 1, ease: "linear" },
      });
    } else {
      controls.start({
        width: "100%",
        opacity: 0,
        transition: { duration: 0.3, ease: "linear" },
      });
    }
  }, [loading, controls]);

  // Simulate loading finish after 2 seconds for demo
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ width: 0, opacity: 1 }}
      animate={controls}
      style={{
        height: "4px",
        backgroundColor: "#29d",
        position: "relative",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    />
  );
};

export default LoadingBar;
