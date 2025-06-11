import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>自然を満喫しよう</h1>
        <p className={styles.subtitle}>美しい景色を体験してください</p>
        <a href="#" className={styles.cta}>資料ダウンロード</a>
      </div>
    </section>
  );
}
