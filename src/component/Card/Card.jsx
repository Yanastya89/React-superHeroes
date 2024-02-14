import React from "react";
import "../Card/card.css";

function Card(props) {
  return (
    <div className="card">
      <h3 className="card-title">{props.name}</h3>
      <p className="card-universe">
        <span>Вселенная:</span> {props.universe}
      </p>
      <p className="card-alterego">
        <span>Альтр эго:</span> {props.alterego}
      </p>
      <p className="card-occupation">
        <span>Род деятельности:</span> {props.occupation}
      </p>
      <p className="card-friends">
        <span>Друзья: </span>
        {props.friends}
      </p>
      <p className="card-superpowers">
        <span>Суперсила: </span>
        {props.superpowers}
      </p>
      <img src={props.url} className="card-photo" alt={props.name} />
    </div>
  );
}

export default Card;
