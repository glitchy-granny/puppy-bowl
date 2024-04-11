export default function PlayerCard({ name, imageUrl }) {
  return (
    <div className="player-container">
      <p className="player-name">{name}</p>
      <img className="player-img" src={imageUrl}></img>
      <button>DETAILS</button>
      <button>DELETE</button>
    </div>
  );
}
