import React, { useEffect, useState } from "react";
import Accordion from "../components/Accordion";
import { getAboutInfos } from "../services/getAboutInfos";

const About = () => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    (async () => {
      setInfos(await getAboutInfos());
    })();
  }, []);

  return (
    <>
      <section className="about-top">
        <figure className="about-top__img"></figure>
      </section>

      <section className="about__accordion">
        {infos.map(info => <Accordion title={info.title} text={info.text} key={info.title} />)}
      </section>
    </>
  );
};

export default About;