import React from 'react';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as LogoDesktop } from '../../images/logo-desktop.svg';
import { ReactComponent as WaHeader } from '../../images/wa-header.svg';
import { ReactComponent as WaHeaderDesk } from '../../images/wa-header-desktop.svg';
import styles from './Header.module.scss';

const Header = () => {
  return (
      <div className={styles.header}>
            <div className='desktop-hidden'>
              <Logo />
          </div>
          <div className='mobile-hidden'>
              <LogoDesktop />
          </div>
            <span className={`desktop-hidden ${styles.headerRight}`}>
            <a className='desktop-hidden' href="#">
              <WaHeader />
            </a>
              <span className='desktop-hidden'>
                <div className={`desktop-hidden ${styles.workingHours}`}>
                  Рабочее время: 9.00-19.00
                </div>
                <div className={styles.phoneNumber}>
                  <span></span>
                  <a href="#">+7(952) 329-84-29</a>
                </div>
              </span>
          </span>
          <span className={`mobile-hidden ${styles.headerRightDesktop}`}>
              <span className={styles.answerTime}>
                  Среднее время <br />ответа: 13 секунд
              </span>
              <a className={styles.waDesktop}>
                  <span></span>
                  <WaHeaderDesk />
                  <span>
                      Написать <br />в WhatsApp
                  </span>
              </a>
              <span>
                <div className={styles.workingHoursDesk}>
                  Рабочее время: 9.00-19.00
                </div>
                <div className={styles.phoneNumberDesk}>
                  <span></span>
                  <a href="#">+7(952) 329-84-29</a>
                </div>
              </span>
          </span>
      </div>
  )
}

export default Header