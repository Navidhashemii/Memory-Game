import './SingleCard.css'

function SingleCard({card, handleChoice, flipped}) {

  const handleClick = () => {
    handleChoice(card)

  }

  return (
    <div className='card'>
        <div className={flipped ? "flipped" : ""} >
            <img className='front' src={card.src} alt='card front' />
            <img
                onClick={handleClick} 
                className='cover' 
                src='/images/cover.jpg' 
                alt='card cover' 
            />
        </div>
    </div> 
  )
}

export default SingleCard