import React from "react";
import Card from "../Card/Card";
import heroes from "../../data/heroes";

function CardList() {
  return (
    <>
      {heroes.map((hero) => (
        <Card
          key={hero.id}
          name={hero.name}
          universe={hero.universe}
          alterego={hero.alterego}
          occupation={hero.occupation}
          friends={hero.friends}
          superpowers={hero.superpowers}
          url={hero.url}
        />
      ))}
    </>
  );
}
export default CardList;
