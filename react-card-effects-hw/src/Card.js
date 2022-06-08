import React, {useState} from "react";
import './Card.css';

function Card({ img, code }) {
  const [{angle, xPos, yPos}] = useState({
    angle: Math.random() * 90 - 45,
    xPos: Math.random() * 40 - 20,
    yPos: Math.random() * 40 - 20
  });

  const transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  return (
    <div className="card">
      <img src={img} alt={code} style={{transform}}></img>
    </div>
  );
}

export default Card;
