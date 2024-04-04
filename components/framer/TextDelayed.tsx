import { motion } from "framer-motion";

interface TextDelayedProps {
  content: string[];
  style?: string;
  duration?: number;
  delay?: number;
}

const TextDelayed: React.FC<TextDelayedProps> = ({
  content,
  style = "",
  duration = 1,
  delay = 0,
}) => {
  return (
    <motion.div className={style}>
      {content.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: duration,
            delay: delay + i / 2,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextDelayed;
