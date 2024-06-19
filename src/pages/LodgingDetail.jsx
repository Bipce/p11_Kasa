import { useRouteLoaderData } from "react-router-dom";
import Tags from "../components/Tags";
import Stars from "../components/Stars";
import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";

const LodgingDetail = () => {
  const data = useRouteLoaderData("lodging");

  return (
    <>
      <Carousel data={data.pictures} title={data.title} />

      <section className="large-width">
        <div className="large-width__left">
          <h2 className="detail__title">{data.title}</h2>
          <p className="detail__location">{data.location}</p>
          <Tags data={data.tags} />
        </div>

        <section className="detail__profil">
          <Stars rating={data.rating} />
          <div className="detail__profil__user">
            <h3 className="detail__profil__user__name">{data.host.name}</h3>
            <figure>
              <img src={data.host.picture} alt={data.host.name} className="detail__profil__user__img" />
            </figure>
          </div>
        </section>
      </section>

      <section className="detail__accordion">
        <Accordion title="Description" text={data.description} />
        <Accordion title="Equipement" data={data.equipments} />
      </section>
    </>
  );
};

export default LodgingDetail;