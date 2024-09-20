import "./page.css";
import HomeContainer from "../../containers/home/HomeContainer";
import useGetCurrenciesQuery from "../../hooks/api/useGetCurrenciesQuery";
import HomeLoading from "../../containers/home/HomeLoading";
import HomeError from "../../containers/home/HomeError";
const Home = () => {
  const { data, isLoading, isError } = useGetCurrenciesQuery();

  if (isLoading) return <HomeLoading />;

  if (isError) return <HomeError />;

  const currencies = data.supported_codes;

  return <HomeContainer currencies={currencies} />;
};

export default Home;
