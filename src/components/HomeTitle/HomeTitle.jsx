import "./HomeTitle.css";
import { FaGithub } from "react-icons/fa";

const HomeTitle = () => {
  return (
    <article className="home_title">
      <h1 className="home_title_header">Make Better Life With CURON.</h1>
      <p className="home_title_about">
        Its principal aim is to convey 200 million new retail buyers to crypto
        through casting off all fiat limitations at the manner to crypto.
      </p>
      <a
        className="home_title_button"
        href="https://github.com/user01101111000"
        target="_blank"
      >
        <FaGithub />
        Github
      </a>
    </article>
  );
};

export default HomeTitle;
