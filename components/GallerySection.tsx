import React from "react";
import styles from "./GallerySection.module.css";

export default function GoodPointsSection() {
  return (
    <section className={styles.goodPointsSection}>
      <div className={styles.goodPointsSection_container}>
       
          <h2 className={styles.h2_heading}>
            <span>ここ、いいな。</span>
            <span>そう感じる瞬間を</span>
            <span>集めました。</span>
            </h2>
          
      </div>
      {/* 街観 */}
      <img src="/右上画像群.png" className={styles.rightTop} alt="" />
      <img src="/左上画像群.png" className={styles.leftTop} alt="" />
      <img src="/右下画像.png" className={styles.rightBottom} alt="" />
      <img src="/左下画像.png" className={styles.leftBottom} alt="" />
      {/* 丸 */}
      <img src="/balloon1.png" className={styles.balloon1} alt="" />
      <img src="/balloon2.png" className={styles.balloon2} alt="" />
      <img src="/balloon3.png" className={styles.balloon3} alt="" />
      <img src="/balloon4.png" className={styles.balloon4} alt="" />
      <img src="/balloon5.png" className={styles.balloon5} alt="" />
      <img src="/balloon6.png" className={styles.balloon6} alt="" />
      <img src="/balloon7.png" className={styles.balloon7} alt="" />

    </section>
  );
}
