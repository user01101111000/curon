const HomeError = () => {
  return (
    <div className="home_error">
      <h1>Something went wrong.</h1>
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );
};

export default HomeError;
