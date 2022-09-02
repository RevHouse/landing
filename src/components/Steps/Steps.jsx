import "./steps.scss";
import steps from "../../assets/stepss.svg";

const Steps = () => {
  return (
    <div>
      <div className="steps-container">
        <div className="image-container">
          <img src={steps} className="steps-image" />
        </div>
        <a href="#form-box-container">
          <button className="button-ign">¡IGNITION!</button>
        </a>
      </div>
    </div>
  );
};

export default Steps;
