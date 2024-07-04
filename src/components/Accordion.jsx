import { useState } from "react";

const Accordion = ({ title, text, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const reverseIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ul className="accordion">
      <li>
        <h2 className="accordion__title accordion__title--fontSize">
          {title}
          <i className={`fa-solid fa-chevron-up ${isOpen
            ? "accordion__title__icon accordion__title__icon--open"
            : "accordion__title__icon accordion__title__icon--close"}`}
             onClick={reverseIsOpen}></i>
        </h2>
        <div className={isOpen ? "accordion__text--open" : "accordion__text--close"}>
          {text && <p>{text}</p>}
          {data && data.map(equipment => {
            return (
              <ul key={equipment}>
                <li>{equipment}</li>
              </ul>
            );
          })}
        </div>
      </li>
    </ul>
  );
};

export default Accordion;