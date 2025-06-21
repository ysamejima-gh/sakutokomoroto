import React from 'react';
import styles from './VideoSection.module.css';

export default function VideoSection() {
  return (
    <section className={styles.videos}>
      <div className={styles.videoItem}>
        <img src="/video1.jpg" alt="動画1" />
      </div>
      <div className={styles.videoItem}>
        <img src="/video2.jpg" alt="動画2" />
      </div>
    </section>
  );
}
