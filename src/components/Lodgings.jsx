import { Link } from "react-router-dom";

const Lodgings = ({ lodgings }) => {
  return (
    <section className="lodging">
      {lodgings.map(lodging => {
        return (
          <article key={lodging.id} className="lodging__article">
            <Link to={`lodging/${lodging.id}`}>
              <figure>
                <img src={lodging.cover} alt={lodging.title} className="lodging__article__img" />
              </figure>
              <figcaption className="lodging__article__text">{lodging.title}</figcaption>
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default Lodgings;