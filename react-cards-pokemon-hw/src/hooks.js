import { useState } from "react";
import axios from "axios";
//import {formatCard, formatPokemon} from './helpers'
//import { v4 as uuid } from "uuid";

function useFlip(initialFlipState = true) {
  const [isFlipped, setFlipped] = useState(initialFlipState);

  const flip = () => {
    setFlipped(isUp => !isUp);
  };
  return [isFlipped, flip];
}
function useAxios( baseUrl) {
  
  const [responses, setResponses] = useState([]);

  const addResponseData = async (formatter, restOfUrl="") => {
    const response = await axios.get(`${baseUrl}${restOfUrl}`);
    //const response = await axios.get(`${baseUrl}`);
    setResponses(data => [...data, formatter(response.data)]);
  };

  const clearResponses = () => setResponses([]);

  return [responses, addResponseData, clearResponses];
}


// function useAxiosP( baseUrl) {
 
//   const [responses, setResponses] = useState([]);

//   const addResponseData = async (formatPokeCard, name) => {
//     console.log("name is " + name);
//     const response = await axios.get(`${baseUrl}${name}`);
//     let axiosData = response.data;
//     console.log("fromres " + axiosData.name);
//     console.log("front is " + axiosData.sprites.front_default);
//     setResponses(data => [...data, formatPokeCard(axiosData)]);
//     //setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
//     //setResponses(data => [...data, {...axiosData, id:uuid()}]);
//   };

//   const clearResponses = () => setResponses([]);

//   return [responses, addResponseData, clearResponses];
// }

export { useFlip, useAxios };
