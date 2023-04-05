import { FC, MouseEvent, ReactElement } from "react";
import styles from './Arrow.module.css'

const Arrow: FC = () => {
  let x: number = 0;

  async function startlevitation(event: MouseEvent<HTMLDivElement>) {
    console.log('start');
    const wrapper = event.target as HTMLDivElement;

    async function b() {
      await new Promise((res, rej) => {
        let timer = setInterval(() => {
          if (x > -30) {
            x--;
            wrapper.style.transform = `translateX(${x}px)`;
          } else {
            clearInterval(timer);
            res(x);
          }
        }, 20)
      });
  
      await new Promise((res, rej) => {
        let timer = setInterval(() => {
          if (x < 30 && x >= -30) {
            x++;
            wrapper.style.transform = `translateX(${x}px)`;
          } else {
            clearInterval(timer);
            res(x);
          }
        }, 20)
      });
  
      await new Promise((res, rej) => {
        let timer = setInterval(() => {
          if (x <= 30 && x > 0) {
            x--;
            wrapper.style.transform = `translateX(${x}px)`;
          } else {
            clearInterval(timer);
            res(x);
          }
        }, 20)
      });
    }
  }

  function stopLevitation(): void {
    console.log('stop')
  }

  return (
    <div className={styles.wrapper} onMouseEnter={startlevitation} onMouseLeave={stopLevitation}>
      <button className={styles.button}>
        <svg className={styles.arrow} width="26" height="58" viewBox="0 0 26 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.7827 58.6958L1.30446 30.0001L24.7827 1.30449" stroke="currentColor" strokeWidth="1.5"></path>
        </svg>
      </button>
    </div>
  )
}

export default Arrow;
