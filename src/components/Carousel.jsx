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
            <i className="fa-solid fa-chevron-left carousel__content carousel__arrow carousel__arrow--left"
               onClick={() => updateImg(-1)}></i>
            <i className="fa-solid fa-chevron-right carousel__content carousel__arrow carousel__arrow--right"
               onClick={() => updateImg(1)}></i>
            <p className="carousel__content carousel__nbr">{currentIndexImg + 1} / {data.length}</p>
          </>
        )}
      </figure>

    </section>
  );
};

export default Carousel;