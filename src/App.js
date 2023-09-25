import {useState} from 'react'
import './App.css';

const cardImages = [
  {"src" : "/images/bear.png"},
  {"src" : "/images/dog.png"},
  {"src" : "/images/eagle.png"},
  {"src" : "/images/elephant.png"},
  {"src" : "/images/horse.png"},
  {"src" : "/images/lion.png"},
  {"src" : "/images/pig.png"},
  {"src" : "/images/rabbit.png"},
  {"src" : "/images/Tiger.png"},
  {"src" : "/images/zebra.png"}
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)


  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5 )
      .map((card) => ({...card , id : Math.random() }))

      setCards(shuffleCards)
      setTurns(0)
  }
  return (
    <div className="App">
      <h1>Animal Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
