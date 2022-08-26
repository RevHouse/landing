import "./intercards.scss";
import hireQuick from "../../assets/hire-quick.svg";
import lowCost from "../../assets/low-cost.svg";
import focus from "../../assets/focus.svg";

const InterCards = () => {
  return (
    <div className="intercards-container">
      <img src={lowCost} />
      <img src={hireQuick} />
      <img src={focus} />
    </div>
  );
};

export default InterCards;
