export const getAll = (setLodgings) => {
  fetch("/data/logements.json")
    .then(res => res.json())
    .then(res => setLodgings(res))
    .catch(err => console.log(err));
};