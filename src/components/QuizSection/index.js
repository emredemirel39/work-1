import React, { useState } from 'react';
import './_quizSection.scss';
import cardIcon from '../../images/card-icon.png'
import caseIcon from '../../images/case-icon.png'
import userIcon from '../../images/user-icon.png'
import variantIcon from '../../images/variant-icon.png'
import consultImg from '../../images/consultation-image.png';
import { ReactComponent as BackIcon } from '../../images/back-icon.svg';
import { ReactComponent as SelectedIcon } from '../../images/selected-icon.svg';

const QuizSection = () => {

  const [selected, setSelected] = useState('');

  const handleSelectRoom = e => {
    setSelected(e.target.id);
    console.log('sada')

    if (e.currentTarget.id === selected) {
      e.currentTarget.className = 'quiz__main__options_selected'
    } else {
      e.currentTarget.className = ''
    }
  };

  return (
    <div className='quiz'>
      <div className="quiz__desktop-title">
        <h1>Пройдите тест и получите:</h1>
      </div>
      <div className="quiz__mobile-title">
        <h1>Ответьте на 6 вопросов, <br />чтобы подобрать свою квартиру</h1>
      </div>
      <div className="quiz__info">
        <div className='quiz__info-card'>
          <img src={cardIcon} alt="icon" />
          <p>Каталог подходящих квартир </p>
        </div>
        <div className='quiz__info-card'>
          <img src={variantIcon} alt="icon" />
          <p>Индивидуальный подбор вариантов </p>
        </div>
        <div className='quiz__info-card'>
          <img src={userIcon} alt="icon" />
          <p>Консультация <br />специалиста </p>
          <img src={caseIcon} alt="icon" />
        </div>
      </div>
      <div className="quiz__main">
        <div className='quiz__main__consultation'>
          <img src={consultImg} alt="manager" />
          <div className="quiz__main__consultation__manager-name">
            <span>Егор Нечаев</span>
          </div>
          <div className='quiz__main__consultation__title'>
            <h1>
              Специалист по подбору <br />недвижимости
            </h1>
          </div>
          <div className="quiz__main__consultation__desc">
            <p>
              Меня зовут Виталий, и я помогу вам подобрать нужную вам квартиру в интересующей вас ценовой категории
            </p>
          </div>
          <div className='quiz__main__consultation__btn'>
            <button><p>Консультация</p> <img src={caseIcon} alt="icon" /></button>
          </div>
        </div>
        <div className='quiz__main__quiz-card'>
          <div className='quiz__main__progress-bar'>
            <span className='quiz__main__progress-bar__step-1'></span>
            <span className='quiz__main__progress-bar__step-2'></span>
            <span className='quiz__main__progress-bar__step-3'></span>
            <span className='quiz__main__progress-bar__step-4'></span>
          </div>
          <div className="quiz__main__title">
            Тип квартиры
          </div>
          <div className="quiz__main__options">
            <div id='studio' onClick={(e) => handleSelectRoom(e)}>Студия <SelectedIcon/> </div>
            <div id='1-room' onClick={(e) => handleSelectRoom(e)} >Однокомнатная квартина</div>
            <div id='2-room' onClick={(e) => handleSelectRoom(e)} className='quiz__main__options_selected' >Двухкомнатная квартира <SelectedIcon/></div>
            <div id='3-room' onClick={(e) => handleSelectRoom(e)} >Трехкомнатная квартира</div>
            <div id='4-room+' onClick={(e) => handleSelectRoom(e)} >Четыре и более комнат</div>
          </div>
          <div className="quiz__main__btn-box">
            <button onClick={() => console.log('back')} >
              <BackIcon/>
              <p>Вернуться</p>
            </button>
            <button>Далее</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizSection;