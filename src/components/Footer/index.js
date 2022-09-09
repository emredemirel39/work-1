import React from 'react';
import './_footer.scss';
import { ReactComponent as WaFooter } from '../../images/wa-footer.svg';
import { ReactComponent as TelegramFooter } from '../../images/telegram-footer.svg';
import { ReactComponent as ViberFooter } from '../../images/viber-footer.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__title">
        <h4>Связаться с нами:</h4>
      </div>
      <div className="footer__contacts">
        <a href="#">kkjnechaev@mail.ru</a>
        <a href="#">+7(952) 329-84-29</a>
      </div>
      <div className="footer__icons">
        <WaFooter />
        <TelegramFooter />
        <ViberFooter/>
      </div>
    </div>
  )
}

export default Footer