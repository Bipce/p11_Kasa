import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Carousel = ({ data, title }) => {
  const [currentIndexImg, setCurrentIndexImg] = useState(0);

  const previousImg = () => {
    setCurrentIndexImg(prev => prev - 1);
    if (currentIndexImg === 0) {
      setCurrentIndexImg(data.length - 1);
    }
  };

  const nextImg = () => {
    setCurrentIndexImg(prev => prev + 1);
    if (currentIndexImg === data.length - 1) {
      setCurrentIndexImg(0);
    }
  };

  return (
    <section className="carousel">
      <figure>
        <img src={data[currentIndexImg]} alt={title} className="carousel__img" />
        {data.length > 1 && (
          <>
            <FontAwesomeIcon icon={faChevronLeft} onClick={previousImg}
                             className="carousel__content carousel__arrow carousel__arrow--left" />
            <FontAwesomeIcon icon={faChevronRight} onClick={nextImg}
                             className="carousel__content carousel__arrow carousel__arrow--right" />
            <p className="carousel__content carousel__nbr">{currentIndexImg + 1} / {data.length}</p>
          </>
        )}
      </figure>

    </section>
  );
};

export default Carousel;