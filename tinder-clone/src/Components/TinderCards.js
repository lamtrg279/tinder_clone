import React from "react";
import "./TinderCards.css";
import { useState } from "react";
import { SwipeDown } from "@mui/icons-material";
import TinderCard from "react-tinder-card";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Michael Scott",
      url: "https://phasrmedia.com/wp-content/uploads/2021/01/Funniest-Michael-Scott-Quotes-1-1.png",
    },
    {
      name: "Ron Swanson",
      url: "https://uploads-ssl.webflow.com/5fa452663d18a6699f11aa07/62717982fd85850f5976dc1e_Ron%20swanson.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {};

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            // onCardLeftScreen{() => outOfFrame(character.name)}>
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
