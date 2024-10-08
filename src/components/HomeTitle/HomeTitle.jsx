import "./HomeTitle.css";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const HomeTitle = () => {
  return (
    <motion.article
      className="home_title"
      initial={{ opacity: 0, x: "-50%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "backOut" }}
    >
      <h1 className="home_title_header">
        Make Better Life With <span className="brandName">CURON.</span>
      </h1>
      <p className="home_title_about">
        Its principal aim is to convey 200 million new retail buyers to crypto
        through casting off all fiat limitations at the manner to crypto.
      </p>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="home_title_button"
        href="https://github.com/user01101111000/curon"
        target="_blank"
      >
        <FaGithub />
        Github
      </motion.a>
    </motion.article>
  );
};

export default HomeTitle;
