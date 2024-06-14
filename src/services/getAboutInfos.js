export const getAboutInfos = async () => {
  const res = await fetch("/data/about.json");
  return res.json();
};