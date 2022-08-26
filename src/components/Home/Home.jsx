import "./home.scss";
import titleImg from "../../assets/title.svg";
import rocket from "../../assets/rocket.svg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-side">
        <img src={titleImg} className="title-home" />
        <p className="subtitle-home">
          Stop wasting time and money in IT recruitment.
        </p>
        <div className="hire-button">Hire Now</div>
      </div>
      <div className="rocket-container">
        <img src={rocket} className="rocket" />
      </div>
    </div>
  );
};

export default Home;
