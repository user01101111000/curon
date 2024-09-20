import "./page.css";
import HomeContainer from "../../containers/home/HomeContainer";
import useGetCurrenciesQuery from "../../hooks/api/useGetCurrenciesQuery";

const Home = () => {
  const { data, isLoading, error } = useGetCurrenciesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const currencies = data.supported_codes;

  return <HomeContainer currencies={currencies} />;
};

export default Home;
