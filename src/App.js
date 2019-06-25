import React from "react";
import cards from "./components/cards";
import Card from "./components/Card";
import { useState } from "react";
import "./App.css";

let tableCards = [];
let gameNumber = 0;
const cardsLength = cards.length;
const randomCards = () => {
  for (let i = 0; i < cardsLength; i++) {
    let index = Math.floor(Math.random() * cards.length);

    tableCards = [...tableCards, cards[index]];
    cards.splice(index, 1);
  }
};

randomCards();

function App() {
  const [cardCheck, setcardCheck] = useState([]);
  const [uncoveredCards, setuncoveredCards] = useState([]);

  const flipCard = item => {
    item.active = true;
    setcardCheck(cardCheck => [...cardCheck, item]);
  };

  const newGame = () => {
    tableCards.forEach(card => (card.active = false));
    setuncoveredCards([]);
    ++gameNumber;
  };

  const checkCard = () => {
    if (cardCheck.length === 2 && cardCheck[0].name === cardCheck[1].name) {
      setuncoveredCards([...uncoveredCards, cardCheck[0], cardCheck[1]]);
      setcardCheck([]);
    }

    if (cardCheck.length === 2 && cardCheck[0].name !== cardCheck[1].name) {
      setTimeout(() => {
        cardCheck[0].active = false;
        cardCheck[1].active = false;

        setcardCheck([]);
      }, 1000);
    }
    if (uncoveredCards.length === cardsLength) {
      setTimeout(newGame, 2000);
    }
  };

  checkCard();
  return (
    <div className="App">
      <h1 className="game-title">Memory Card</h1>
      <h2 className="game-number">Game: {gameNumber}</h2>
      <div className="game">
        {tableCards.map(card => (
          <Card
            key={card.id}
            card={card}
            flipCard={flipCard}
            cardCheck={cardCheck}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
