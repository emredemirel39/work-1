import React, { useRef } from 'react';
import './_carouselSection.scss';

import Slider from "react-slick";




const CarouselSection = () => {

    const slideRef = useRef();

    const slideRight = () => {

        slideRef.current.style.transform = "translateX(-420px)";
    }
    
  return (
      <div className='carousel'>
          <div className='carousel__title'>
              <h2>Причины, почему переезд <br />в Краснодар - хорошая идея</h2>
          </div>
          <button onClick={slideRight}>sağ</button>

          <div className="carousel__mobile-slider">
          </div>

          <div className="carousel__desktop-container">
              <div className="carousel__desktop-test">
                    <div ref={slideRef} className="carousel__desktop-slider-row">

              <div className='carousel__desktop-slider-col'>Приятный климат</div>
              <div className='carousel__desktop-slider-col'>До моря 84 км</div>
              <div className='carousel__desktop-slider-col'>Горы рядом</div>
              <div className='carousel__desktop-slider-col'>В городе много спорта</div>
              <div className='carousel__desktop-slider-col'>Условия для работы бизнеса</div>
              <div className='carousel__desktop-slider-col'>Шикарнй досуг</div>
              <div className='carousel__desktop-slider-col'>Продукты питания</div>
              <div className='carousel__desktop-slider-col'>Уровень жизни</div>
              <div className='carousel__desktop-slider-col'>Недвижимость</div>

              </div>
              </div>
          </div>
      </div>
  )
}

export default CarouselSection