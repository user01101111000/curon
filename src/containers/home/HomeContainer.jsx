import Converter from "../../components/Converter/Converter";
import HomeTitle from "../../components/HomeTitle/HomeTitle";

const HomeContainer = ({ currencies }) => {
  return (
    <section className="home">
      <HomeTitle />
      <Converter currencies={currencies} />
      <a
        className="byText"
        href="https://github.com/user01101111000"
        target="_blank"
      >
        by user01101111000.
      </a>
    </section>
  );
};

export default HomeContainer;
