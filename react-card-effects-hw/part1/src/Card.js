import React from "react";

function Card({ img, code }) {
  return (
    <div>
      <img src={img} alt="{code}"></img>
    </div>
  );
}

export default Card;
