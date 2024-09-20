import "./page.css";
import notfound from "../../assets/icons/notfound.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="notfound">
      <figure className="notfound_img">
        <img src={notfound} alt="" />
      </figure>

      <h1>Page Not Found</h1>
      <button onClick={() => navigate("/")}>Go Home</button>
    </section>
  );
};

export default NotFound;
