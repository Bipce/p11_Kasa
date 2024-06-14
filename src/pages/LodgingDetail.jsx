import { useRouteLoaderData } from "react-router-dom";
import Tags from "../components/Tags";
import Stars from "../components/Stars";
import Accordion from "../components/Accordion";

const LodgingDetail = () => {
  const data = useRouteLoaderData("lodging");

  return (
    <>
      <figure>
        <img src={data.cover} alt={data.title} />
      </figure>
      <h2>{data.title}</h2>
      <p>{data.location}</p>
      <Tags data={data.tags} />
      <Stars rating={data.rating} />
      <div>
        <h3>{data.host.name}</h3>
        <figure>
          <img src={data.host.picture} alt={data.host.name} />
        </figure>
      </div>
      <Accordion title="Description" text={data.description} />
      <Accordion title="Equipement" text={data.equipments} />
    </>
  );
};

export default LodgingDetail;