import { useRouteLoaderData } from "react-router-dom";
import Tags from "../components/Tags";
import Stars from "../components/Stars";
import Accordion from "../components/Accordion";

const LodgingDetail = () => {
  const data = useRouteLoaderData("lodging");

  return (
    <>
      <figure>
        <img src={data.cover} alt={data.title} className="detail__img" />
        <figcaption>
          <h2 className="detail__img__title">{data.title}</h2>
        </figcaption>
      </figure>
      <p className="detail__location">{data.location}</p>
      <Tags data={data.tags} />

      <section className="detail__profil">
        <Stars rating={data.rating} />
        <div className="detail__profil__user">
          <h3 className="detail__profil__user__name">{data.host.name}</h3>
          <figure>
            <img src={data.host.picture} alt={data.host.name} className="detail__profil__user__img" />
          </figure>
        </div>
      </section>

      <Accordion title="Description" text={data.description} />
      <Accordion title="Equipement" data={data.equipments} />
    </>
  );
};

export default LodgingDetail;