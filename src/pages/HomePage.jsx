import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../services/api-call";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const HomePage = () => {
  const [lodgings, setLodgings] = useState([]);

  useEffect(() => {
    (async () => {
      setLodgings(await getAll());
    })();
  }, []);

  return (
    <>
      <section className="top-section">
        <figure className="top-section__img"></figure>
        <p className="top-section__text">Chez vous, partout et ailleurs</p>
      </section>

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
    </>
  );
};

export default HomePage;