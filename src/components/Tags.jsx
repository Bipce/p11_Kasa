const Tags = ({ data }) => {
  return (
    <ul className="tags">
      {data.map(tag => <li key={tag} className="tags__item">{tag}</li>)}
    </ul>
  );
};

export default Tags;