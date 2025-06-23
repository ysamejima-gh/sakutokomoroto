import styles from './MachiTobiraSection.module.css';

export default function MachiTobiraSection() {
  return (
    <section className={styles.machiTobiraSection}>
      {/* 雪の装飾 */}
      <div className={styles.snowContainer}>
        {[...Array(20)].map((_, i) => (
          <img
            key={i}
            src="/冬の結晶.png"
            alt=""
            className={`${styles.snowflake} ${styles[`snowflake${i + 1}`]}`}
          />
        ))}
      </div>

      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>あなたを迎える、まちへのトビラ</h2>
        
        <div className={styles.introTextContainer}>
          <div className={styles.introTextWrapper}>
            <p className={styles.introText}>
              旅でも。暮らしでも。<br />
              なにかを始めるときは、まず"入口"から辿りてみたくなる。<br />
              モダンでスマートな佐久平駅は、都会の感覚を残しながら、やさしい風景が迎えてくれる。<br />
              ノスタルジックでどこかあたたかい小諸駅は、立ち止まって深呼吸したくなる、そんなゆるやかな時間が流れてる。<br />
              同じ地域なのに、表情はまるで違う、なのにどちらも「この先に、なにかあるかも」って予感がある。<br />
              まずはこの扉前から、サクトコモロを歩きはじめてみて。
            </p>
          </div>
        </div>

        <div className={styles.stationsContainer}>
          <div className={styles.stationCard}>
            <div className={styles.stationImage}>
              <img src="/佐久平駅.jpg" alt="佐久平駅" />
            </div>
            <h3 className={styles.stationName}>佐久平駅</h3>
            <p className={styles.stationDescription}>
              モダンな建物と広々とした空。<br />
              新幹線が通る都市的な顔を持ちながら、どこかやさしい<br />
              自然と暮らしのバランスが、ここにはある。
            </p>
          </div>

          <div className={styles.stationCard}>
            <div className={styles.stationImage}>
              <img src="/小諸駅.jpg" alt="小諸駅" />
            </div>
            <h3 className={styles.stationName}>小諸駅</h3>
            <p className={styles.stationDescription}>
              レトロな駅舎と、風に揺れる木々。<br />
              歩くたびに"昔とも今"が混ざり合うような心地よさ。<br />
              ただの通過点じゃない、立ち止まりたくなる場所。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}