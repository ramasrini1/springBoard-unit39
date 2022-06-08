import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Card from "./Card";


const Deck = () => {
  const [deckId, setDeckId] = useState(null);
  const[card, setCard] = useState(null);
  //const deckId = useRef();


  useEffect(() => {
    async function getDeck(){
      const res = await  axios.get(`http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
      //console.log("res is " + res.data.deck_id);
      setDeckId(res.data.deck_id);
    }
    getDeck();
  }, []);

  const drawCard = () => {
    async function getCard(){
      const res = await  axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
      //console.log("card is " + res.data.cards[0].value);
      setCard({img: res.data.cards[0].image, code:res.data.cards[0].code, remaining: res.data.remaining});
    }
    getCard();
  }

  let jsx = "";
  if ( card ){
    //if all cards are drawn show err msg
    if ( card.remaining === 0 ){
      jsx = <h2>No more cards to draw</h2>
    } else {
      jsx = <Card 
        img={card.img}
        code={card.code}
        />
    }
  } 

  return (
    <div>
      <h1>Deck of Cards</h1>
      <div>{deckId}</div><br></br>
      <button onClick={drawCard}>Draw A Card</button><p></p>
      {jsx}
    </div>
  );
}

export default Deck;
