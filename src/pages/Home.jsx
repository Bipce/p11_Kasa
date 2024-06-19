import { useEffect, useState } from "react";
import { getLodgings } from "../services/api-call";
import Lodgings from "../components/Lodgings";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Home = () => {
  const [lodgings, setLodgings] = useState([]);

  useEffect(() => {
    (async () => {
      setLodgings(await getLodgings());
    })();
  }, []);

  return (
    <>
      <section className="top-section">
        <figure className="top-section__img"></figure>
        <p className="top-section__text">Chez vous, partout et ailleurs</p>
      </section>

      <Lodgings lodgings={lodgings} />
    </>
  );
};

export default Home;