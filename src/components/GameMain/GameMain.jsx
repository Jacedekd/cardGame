
import './GameMain.css'
import Card from '../Card/Card'; 

function GameMain({shuffle, opened, matched, cardFlip}) {

  return (
    <div className="game__main">
        {
            shuffle.map((item, index) => {
                let isFlipped = false;
                if(opened.includes(index)) isFlipped = true; 
                if(matched.includes(item.id)) isFlipped = true; 
                return (
                    <Card 
                    key={index} 
                    cardFlip={() => cardFlip(index)} 
                    src={item.src} 
                    isFlipped={isFlipped}/>
                )
            })
        }
      </div>
  )
}

export default GameMain