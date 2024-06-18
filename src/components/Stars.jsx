import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Stars = ({ rating }) => {
  const coloredStarsArr = [...Array(parseInt(rating)).keys()];
  const greyStarsArr = [...Array(5 - coloredStarsArr.length).keys()];

  return (
    <div className="stars">
      {coloredStarsArr.map(r => <FontAwesomeIcon key={r} icon={faStar} className="stars__rating-up" />)}
      {greyStarsArr.map(r => <FontAwesomeIcon key={r} icon={faStar} className="stars__rating-down" />)}
    </div>
  );
};

export default Stars;