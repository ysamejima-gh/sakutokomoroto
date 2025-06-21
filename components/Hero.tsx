import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero_section}>
      <div className={styles.catchCopy}>
        <div className={styles.verticalText}>
          歩いて、感じて、好きになる。
        </div>
        <div className={styles.verticalText}>
          ここはきっと、わたしのまち。
        </div>
        <div className={styles.verticalText}>風景・言葉・ものがたり。</div>
      </div>

      <div className={styles.goButton}>
        <p>GO！！</p>
        <img src="/mascot.png" alt="ぴよ丸" />
      </div>
    </section>
  );
}
