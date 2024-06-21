const LODGINGS_URL = "/data/logements.json";

export const getLodgings = async () => {
  const res = await fetch(LODGINGS_URL);
  return res.json();
};

export const getLodging = async (id) => {
  const data = await getLodgings();
  const item = data.find(x => x.id === id);
  if (!item) {
    throw new Error();
  }
  return item;
};