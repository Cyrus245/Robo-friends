import React from "react";
import Card from "./Card";

function CardList({ robots }) {
  return (
    <div>
      {robots.map((user, idx) => {
        return (
          <Card key={idx} id={user.id} name={user.name} email={user.email} />
        );
      })}
    </div>
  );
}

export default CardList;
