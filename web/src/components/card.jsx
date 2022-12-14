// import './index.css';

function Card({fajr,sunrise,dhuhr,asr,maghrib,isha}) {
  return (
    <div className="Card">
        <h1>
            result
        </h1>
      <ul>
        <li>{fajr}</li>
        <li>{sunrise}</li>
        <li>{dhuhr}</li>
        <li>{asr}</li>
        <li>{maghrib}</li>
        <li>{isha}</li>
      </ul>
    </div>
  );
}

export default Card;
