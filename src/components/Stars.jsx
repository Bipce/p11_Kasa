import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Stars = ({ rating }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faStar} />
    </div>
  );
};

export default Stars;