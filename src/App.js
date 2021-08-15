import React,{ useState, useEffect} from "react";
import axios from 'axios';
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharactersGrid"; //Initiolizing the components

 
import './App.css';
const App = () => {
  const [items,setItems] = useState([])
  const [quotes,setQuotes] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  
  

  useEffect(() =>{
    const fetchData = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)
      const conclusion = await axios(`https://www.breakingbadapi.com/api/quotes`)



      console.log(result.data)
      setItems(result.data)
      console.log(conclusion.data)
      setQuotes(conclusion.data)
      setIsLoading(false)


      
    }
    fetchData();

  },[])

  //



  return (
    <div className="Container">
      <Header />
      
      <CharacterGrid isLoading={isLoading} items={items} quotes={quotes}/>
    </div>
  );
}

export default App;
