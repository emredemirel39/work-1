import React from 'react';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
      <div className={styles.banner} >
          <div className={styles.bannerContent}>
              <div className={styles.bannerTitle}>
                <h1>Переезжаете в солнечный <br />и уютный Краснодар?</h1>
              </div>
              <div className={styles.bannerDesc}>
                В Краснодаре <b>84</b> застройщика и больше <b>107,000</b> квартир, <br />но достойных вашего внимания — единицы, мы подберем идеальную квартиру по любым вашин параметрам <br /><b>— бесплатно</b>
              </div>
              <div className={styles.bannerBtnBox} >
                  <button>Подобрать квартиру</button>
                  <div>Это займет  ~1 минуту</div>
                  <button>Убедиться в выборе</button>
              </div>
          </div>
      </div>
  )
}

export default Banner