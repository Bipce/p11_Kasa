import { Link } from "react-router-dom";

const Lodgings = ({ lodgings }) => {
  return (
    <section>
      {lodgings.map(lodging => {
        return (
          <article key={lodging.id} className="lodging-article">
            <Link to={`lodging/${lodging.id}`}>
              <figure>
                <img src={lodging.cover} alt={lodging.title} className="lodging-article__img" />
              </figure>
              <figcaption className="lodging-article__text">{lodging.title}</figcaption>
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default Lodgings;