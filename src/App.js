import {useEffect, useState} from 'react'
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src" : "/images/big-chicken.png", matched: false},
  {"src" : "/images/cake.png", matched: false},
  {"src" : "/images/chicken.png", matched: false},
  {"src" : "/images/eggplant.png", matched: false},
  {"src" : "/images/fries.png", matched: false},
  {"src" : "/images/hamburger.png", matched: false},
  {"src" : "/images/meat.png", matched: false},
  {"src" : "/images/soup.png", matched: false}
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choice1, setChoice1] = useState(null)
  const [choice2, setChoice2] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [showTurns, setShowTurns] = useState(false)
  



  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5 )
      .map((card) => ({...card , id : Math.random() }))

      setCards(shuffledCards)
      setChoice1(null)
      setChoice2(null)
      setTurns(0)
      setShowTurns(true)
  }

  const handleChoice = (card) => {
    choice1 ? setChoice2(card) : setChoice1(card)

  }

  useEffect(() => {
    if(choice1 && choice2) {

      setDisabled(true)
      
      if(choice1.src === choice2.src){
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choice1.src) {
              return {...card , matched : true}
            } else{
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choice1, choice2])


  const resetTurn = () => {
    setChoice1(null)
    setChoice2(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }
  
  return (
    <div className="App">
      <h1 className='title'>Animal Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card => (
        <SingleCard
          key={card.id}
          card={card}
          handleChoice={handleChoice}
          flipped = {card === choice1 || card === choice2 || card.matched}
          disabled = {disabled}
        />
        ))}

      </div>
    
       {showTurns ? <p className='turns'>Turns: {turns}</p> : "" }

    </div>
  );
}

export default App;
