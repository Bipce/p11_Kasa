import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Carousel = ({ data, title }) => {
  const [currentIndexImg, setCurrentIndexImg] = useState(0);

  const updateImg = (delta) => {
    setCurrentIndexImg(prev => {
      const value = prev + delta;

      if (value < 0) {
        return data.length - 1;
      }

      if (value === data.length) {
        return 0;
      }
      return value;
    });
  };

  return (
    <section className="carousel">
      <figure>
        <img src={data[currentIndexImg]} alt={title} className="carousel__img" />
        {data.length > 1 && (
          <>
            <FontAwesomeIcon icon={faChevronLeft} onClick={() => updateImg(-1)}
                             className="carousel__content carousel__arrow carousel__arrow--left" />
            <FontAwesomeIcon icon={faChevronRight} onClick={() => updateImg(1)}
                             className="carousel__content carousel__arrow carousel__arrow--right" />
            <p className="carousel__content carousel__nbr">{currentIndexImg + 1} / {data.length}</p>
          </>
        )}
      </figure>

    </section>
  );
};

export default Carousel;