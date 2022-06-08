import React, {useState, useRef, useEffect} from 'react';
import axios from "axios";
import Card from "./Card";
import './Deck.css';

const DeckNew = () => {

  const [deckId, setDeckId] = useState(null);
  const[cards, setCards] = useState([]);
  const[auto, setAuto] = useState(false);
  const timerRef = useRef();

  
  useEffect(() => {
    async function getDeck(){
      const res = await  axios.get(`http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
      console.log("res is " + res.data.deck_id);
      setDeckId(res.data.deck_id);
    }
    getDeck();
  }, [setDeckId]);

  async function getCard(){
    try {
      const res = await  axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
      console.log("cards remaining " + res.data.remaining)
      
      if ( res.data.remaining === 0){
        //setCard({img: res.data.cards[0].image, code:res.data.cards[0].code, remaining: res.data.remaining});
        setAuto(false);
         //stopTimer();
        throw new Error("no cards remaining!");
      } 
     
      setCards(cards => [...cards, 
        {img: res.data.cards[0].image, code:res.data.cards[0].code, remaining: res.data.remaining}])
      
    } catch (err){
      alert(err);
    }
  }

  useEffect(() => {
    if ( auto && !timerRef.current) {
      timerRef.current = setInterval( async() => {
        await getCard();
       }, 1000)
    }
    return () => { stopTimer();}
  }, [auto, deckId, setAuto]);
    

  const toggle = () => {
    setAuto(auto => !auto)
  }

  const stopTimer = () => {
    clearInterval(timerRef.current); 
    timerRef.current = null;
  }
 

  let deck = cards.map(c => (
    <Card 
      key={c.code}
      img={c.img}
      code={c.code}
    />
  ));

  return (
    <div className="deck">
     {auto ?
       <button className="btn1" onClick={toggle}>Stop</button>
       : <button className="btn2" onClick={toggle}>Start</button>
     }
     {deck}
     
    </div>
  )
}

export default DeckNew;