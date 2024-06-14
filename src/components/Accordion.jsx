import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const reverseIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ul className="accordion">
      <li>
        <h2 className="accordion__title">
          {title}
          <FontAwesomeIcon icon={faChevronUp} size="lg" onClick={reverseIsOpen}
                           className={isOpen
                             ? "accordion__title__icon accordion__title__icon--open"
                             : "accordion__title__icon accordion__title__icon--close"} />
        </h2>
        {isOpen && (<p className={isOpen ? "accordion__text--open" : "accordion__text--close"}>{text}</p>
        )}
      </li>
    </ul>
  );
};

export default Accordion;