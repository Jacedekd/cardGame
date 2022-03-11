import React from 'react'
import cn from 'classnames'

function Card({cardFlip, src, isFlipped}) {

  return (
    <div className={cn("div", {
      active: isFlipped
    })} onClick={cardFlip}>
        <img src={src} alt="" />
        <div className="backcard">?</div>
    </div>
  )
}

export default Card
