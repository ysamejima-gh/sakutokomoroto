import React from 'react';
import styles from './GoodPointsSection.module.css';

export default function GoodPointsSection() {
  return (
    <section className={styles.goodPointsSection}>
      <div className={styles.goodPointsContainer}>
        <div className={styles.imageArea}>
          <img src="/メインビジュアル-桜.jpg" alt="桜の風景" />
        </div>
        <div className={styles.textArea}>
          <h2 className={styles.h2_heading}>
            サクとコモロのいいトコ
          </h2>
          <p className={styles.description}>
            四季折々の美しい自然に囲まれた佐久と小諸。
            <br />
            歴史ある街並みと現代の暮らしが調和する、
            <br />
            心地よい時間が流れるまちです。
            <br />
            豊かな自然、温かな人々、そして美味しい食べ物。
            <br />
            ここには、あなたの「好き」がきっと見つかります。
            <br />
            新しい発見と出会いが待っている、
            <br />
            サクとコモロの魅力を感じてみませんか。
          </p>
        </div>
      </div>
      <div className={styles.buttonArea}>
        <button className={styles.exploreButton}>
          サクとコモロをめぐる
        </button>
      </div>
    </section>
  );
}
