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
          <p className={styles.subText}>
            言葉にできない『いいな』が、ここにはたくさんあります。
          </p>
        </div>
      </div>
      <div className={styles.buttonArea}>
        <div className={styles.exploreLink}>
          <span className={styles.linkText}>サクとコモロをめぐる</span>
          <div className={styles.pinkCircle}></div>
        </div>
      </div>
    </section>
  );
}
