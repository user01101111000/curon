import Loader from "../../components/Loader/Loader";

const HomeLoading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 8rem)",
        width: "100%",
      }}
    >
      <Loader />
    </div>
  );
};

export default HomeLoading;
