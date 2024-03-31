import Link from "next/link";
import { motion } from "framer-motion";

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-col justify-between bg-[#191919] text-white">
      <div className="flex flex-col items-center p-7">
        <motion.div
          whileHover={{ scale: 1.05 }} // Zoom in slightly on hover
          transition={{ duration: 0.2 }}
          className="m-5 cursor-pointer border-b border-gray-700 hover:text-gray-300"
        >
          <Link href="/">Home</Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }} // Zoom in slightly on hover
          transition={{ duration: 0.2 }}
          className="m-5 cursor-pointer border-b border-gray-700 hover:text-gray-300"
        >
          <Link href="/create-post">Create Post</Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }} // Zoom in slightly on hover
          transition={{ duration: 0.2 }}
          className="m-5 cursor-pointer border-b border-gray-700 hover:text-gray-300"
        >
          <Link href="/posts">View Posts</Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;
