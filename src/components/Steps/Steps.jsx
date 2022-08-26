import "./steps.scss";
import steps from "../../assets/steps.svg";

const Steps = () => {
  return (
    <div>
      <div className="steps-container">
        <div className="image-container">
          <img src={steps} className="steps-image" />
        </div>
      </div>
    </div>
  );
};

export default Steps;
