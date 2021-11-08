
import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";

function App() {
const [characters, setcharacters] = useState([])

const initialUrl = "https://rickandmortyapi.com/api/character";

const fetchCharacters = (url) => {
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data.results))
    .catch(error => console.log(error))

}




    useEffect(()=> {
      fetchCharacters(initialUrl)

    }, [])

    return (
     <Navbar brand="Rick and Morty App"/>
  );
}

export default App;
