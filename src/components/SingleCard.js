import './SingleCard.css'

function SingleCard({card}) {
  return (
    <div className='card'>
        <div>
            <img className='front' src={card.src} alt='card front' />
            <img className='cover' src='/images/cover.jpg' alt='card cover' />
        </div>
    </div> 
  )
}

export default SingleCard