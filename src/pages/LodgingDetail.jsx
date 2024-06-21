import Tags from "../components/Tags";
import Stars from "../components/Stars";
import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";
import Error from "./Error";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLodging } from "../services/api-call";

const LodgingDetail = () => {
  const { id } = useParams();
  const [lodging, setLodging] = useState(undefined);

  useEffect(() => {
    (async () => {
      setLodging(await getLodging(id));
    })();
  }, [id]);

  if (!lodging) {
    return <Error />;
  }

  return (
    <>
      {lodging && (
        <>
          <Carousel data={lodging.pictures} title={lodging.title} />

          <section className="large-width">
            <div className="large-width__left">
              <h2 className="detail__title">{lodging.title}</h2>
              <p className="detail__location">{lodging.location}</p>
              <Tags data={lodging.tags} />
            </div>

            <section className="detail__profil">
              <Stars rating={lodging.rating} />
              <div className="detail__profil__user">
                <h3 className="detail__profil__user__name">{lodging.host.name}</h3>
                <figure>
                  <img src={lodging.host.picture} alt={lodging.host.name} className="detail__profil__user__img" />
                </figure>
              </div>
            </section>
          </section>

          <section className="detail__accordion">
            <Accordion title="Description" text={lodging.description} />
            <Accordion title="Equipement" data={lodging.equipments} />
          </section>
        </>
      )}
    </>
  );
};

export default LodgingDetail;