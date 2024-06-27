import { useEffect, useState } from "react";
import { getAboutInfos } from "../services/getAboutInfos";
import Accordion from "../components/Accordion";

const About = () => {
  const [infos, setInfos] = useState(undefined);

  useEffect(() => {
    (async () => {
      setInfos(await getAboutInfos());
    })();
  }, []);

  if (!infos) return null;

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