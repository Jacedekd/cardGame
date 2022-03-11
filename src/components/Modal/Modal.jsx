import React from 'react'
import './Modal.css'

function Modal({backModal, reloadPage}) {
  return (
    <div className='modal'>
        <div className="modal__title">Поздравляю, Вы выиграли!!!</div>
        <div className="btn__block">
            <button className="btn__one" onClick={backModal}>Назад</button>
            <button className="btn__two" onClick={reloadPage}>Перезагрузить</button>
        </div>
    </div>
  )
}

export default Modal