export default function Subtitle() {
  return (
    <div className="seat-subtitle">
      <div className="subtitle">
        <div className="seat selected"></div>
        Choisi
      </div>

      <div className="subtitle">
        <div className="seat"></div>
        Disponible
      </div>

      <div className="subtitle">
        <div className="seat unavailable"></div>
        Indisponible
      </div>
    </div>
  );
}
