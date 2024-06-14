export const getAll = async () => {
  try {
    const res = await fetch("data/logements.json");
    return res.json();
  } catch (err) {
    return err;
  }
};