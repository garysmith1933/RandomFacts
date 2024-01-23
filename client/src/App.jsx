import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [fact, setFact] = useState("")

    useEffect(() => {
        const fetchFact = async () => {
            try {
                const response = await axios.get("http://localhost:8080/");
                const data = response.data[0].fact;
                console.log(data)
                setFact(data)
            } catch (e) {
                console.log(e)
                setFact("There is an error")
            }
        }
        fetchFact();
    }, []);

  return (
    <>
     <h1>This is your random fact of the day:</h1>
        <p> {fact}</p>
    </>
  )
}

export default App
