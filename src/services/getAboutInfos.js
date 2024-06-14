export const getAboutInfos = async () => {
  try {
    const res = await fetch("data/about.json");
    return res.json();
  } catch (err) {
    console.log(err);
  }
};