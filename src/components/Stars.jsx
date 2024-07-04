const Stars = ({ rating }) => {
  const coloredStarsArr = [...Array(parseInt(rating)).keys()];
  const greyStarsArr = [...Array(5 - coloredStarsArr.length).keys()];

  return (
    <section className="stars">
      {coloredStarsArr.map(r => <i className="fa-solid fa-star stars__icon stars__rating-up" key={r}></i>)}
      {greyStarsArr.map(r => <i className="fa-solid fa-star stars__icon stars__rating-down" key={r}></i>)}
    </section>
  );
};

export default Stars;