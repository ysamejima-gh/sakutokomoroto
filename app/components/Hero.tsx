import styles from './hero.module.css';
import Image from 'next/image';


export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.overlay}></div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>サクとコモロのいいトコ</li>
          <li>まちのムービー</li>
          <li>まちへのトビラ</li>
          <li>日常のかけら</li>
          <li>暮らしてサクッと通信</li>
          <li>#サクコモ日和</li>
          <li>サクとコモロのヒトの声</li>
          <li>ゲームでサクコモ体験</li>
        </ul>
        <div className={styles.social}>
          <a href="#" aria-label="Instagram" className={styles.icon}>
            <svg viewBox="0 0 448 512" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M224 202.66A53.34 53.34 0 1 0 277.34 256 53.38 53.38 0 0 0 224 202.66Zm124.71-41a54 54 0 0 0-30.23-30.23C296.82 124 224 124 224 124s-72.82 0-94.48 7.4a54 54 0 0 0-30.23 30.23C92 172.18 92 224 92 224s0 51.82 7.29 73.48a54 54 0 0 0 30.23 30.23C151.18 335.95 224 335.95 224 335.95s72.82 0 94.48-7.4a54 54 0 0 0 30.23-30.23C356 275.82 356 224 356 224s0-51.82-7.29-73.48ZM224 314a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm93.6-163.6a21 21 0 1 1-21-21 21 21 0 0 1 21 21Z"/></svg>
          </a>
          <a href="#" aria-label="Facebook" className={styles.icon}>
            <svg viewBox="0 0 320 512" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91V127.71c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0C141.09 0 89.09 54.42 89.09 154.22V195.3H0v92.66h89.09V512h107.9V288z"/></svg>
          </a>
        </div>
      </nav>
      <div className={styles.center}>
        <div className={styles.bands}>
          <p>歩いて、感じて、好きになる。</p>
          <p>風景・言葉・ものがたり。</p>
          <p>ここはきっと　わたしのまち。</p>
        </div>
        <a href="#next" className={styles.go}>
          <span>GO!!</span>
          <Image src="/mascot.png" alt="Mascot" width={120} height={120} />
        </a>
      </div>
    </section>
  );
}