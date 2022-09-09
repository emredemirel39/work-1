import React from 'react'
import './_lastMessage.scss';
import {ReactComponent as Emoji} from '../../images/Emoji.svg'

export default function LastMessage() {
  return (
    <section className='last-message'>
          <div className='last-message__title'>
            <h2>
                Ну что, мы убедили вас, что переезд 
              <br />в Краснодар - это хорошая идея?
            </h2>
            <Emoji/>
          </div>
          <button>
            Подобрать квартиру
          </button>
    </section>
  )
}
