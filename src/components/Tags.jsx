const Tags = ({ data }) => {
  return (
    <ul>
      {data.map(tag => <li key={tag}>{tag}</li>)}
    </ul>
  );
};

export default Tags;