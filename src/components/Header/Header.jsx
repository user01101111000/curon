import "./Header.css";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="header">
      <motion.h1
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="logo_text"
        onClick={() => window.location.reload()}
      >
        CURON
      </motion.h1>
    </header>
  );
};

export default Header;
