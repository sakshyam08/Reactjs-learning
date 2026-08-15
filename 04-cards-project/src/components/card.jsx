function Card(props) {
  

  return (
    <div className="card">
      <img
        className="logo"
        src={props.logo}
        alt={`${props.name} logo`}
      />

      <h2>{props.Name}</h2>

      <p>{props.des}</p>

      <button className="save-btn">🔖 Save</button>
    </div>
  );
}

export default Card;