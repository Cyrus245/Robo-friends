import React from "react";

function Card({ id, name, username, email }) {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5    ">
      <div>
        <img src={`https://robohash.org/${id}?200x200`}></img>
      </div>

      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;

// bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5
