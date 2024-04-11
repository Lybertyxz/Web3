import { motion } from "framer-motion";
import { FiSettings } from "react-icons/fi";
import Link from "next/link";

const SettingsIcon = () => {
  const rotateAnimation = {
    rest: { rotate: 0 },
    hover: { rotate: 90 },
  };

  return (
    <Link href="/account/settings">
      <motion.div
        variants={rotateAnimation}
        initial="rest"
        whileHover="hover"
        animate="rest"
        transition={{ duration: 0.5 }}
        className="cursor-pointer self-center"
      >
        <FiSettings className="text-xl" />
      </motion.div>
    </Link>
  );
};

export default SettingsIcon;
