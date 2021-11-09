
import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Paginations";


function App() {
const [characters, setcharacters] = useState([])
const [info, setInfo] = useState({})

const initialUrl = "https://rickandmortyapi.com/api/character";

const fetchCharacters = (url) => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      setcharacters(data.results);
      setInfo(data.info);
    })
    .catch(error => console.log(error))
  }

  // realiza una nueva llamada a la api para mostrar los previos
  const onPrevios = () => {
    fetchCharacters(info.prev)
  }

  // realiza una llamada a la api para mostrar los seguientes
  const onNext = () => {
    fetchCharacters(info.next)
  }

    useEffect(()=> {
      fetchCharacters(initialUrl)

    }, [])

    return (
      <div>

     <Navbar brand="Rick and Morty App"/>

      <div className="container mt-5">
          <Pagination 
              prev={info.prev} 
              next={info.next} 
              onPrevios={onPrevios} 
              onNext={onNext}/>
          <Characters characters={characters}/>
          <Pagination 
              prev={info.prev} 
              next={info.next} 
              onPrevios={onPrevios} 
              onNext={onNext}/>
      </div>
       
     </div>
  );
}

export default App;
