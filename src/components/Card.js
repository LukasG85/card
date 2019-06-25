import React from "react";

function Card(props) {
  const { card, flipCard, cardCheck } = props;
  return (
    <div
      className={card.active ? "card disable" : "card"}
      onClick={
        cardCheck.length <= 1 && card.active === false
          ? () => flipCard(card)
          : null
      }
    >
      <img className="image" src={card.image} alt="place" />
      <img className="back" src={card.imgBack} alt="back" />
    </div>
  );
}

export default Card;
