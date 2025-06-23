import React from 'react';
import styles from './VideoLoveSection.module.css';

export default function VideoLoveSection() {
  return (
    <section className={styles.videoLoveSection}>
      <div className={styles.textArea}>
        <h2 className={styles.h2_heading}>動画で恋する、サクとコモロ</h2>
        <p className={styles.subText}>
          {`わたしが過ごすなら、どっちだろう？
佐久と小諸、それぞれの魅力を動画で感じてみてください。
まちを歩く人々の笑顔や息づく風景が、きっとあなたを旅へ誘います。`}
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card} style={{ backgroundImage: "url(/動画仮画像左.jpg)" }}>
          <div className={styles.playButton} />
          <div className={styles.cardTitle}>サク</div>
        </div>
        <div className={styles.card} style={{ backgroundImage: "url(/動画仮画像右.jpg)" }}>
          <div className={styles.playButton} />
          <div className={styles.cardTitle}>コモロ</div>
        </div>
      </div>
      <img src="/くり! 2.png" alt="くり" className={styles.kuriDecoration} />
    </section>
  );
}
