import React from 'react';
import styles from './GoodPointsSection.module.css';

export default function GoodPointsSection() {
  return (
    <section className={styles.goodPointsSection}>
      {/* Header Area - Title and Subtitle */}
      <div className={styles.headerArea}>
        <h2 className={styles.h2_heading}>
          サクとコモロのいいトコ
        </h2>
        <p className={styles.subText}>
          言葉にできない『いいな』が、ここにはたくさんあります。
        </p>
      </div>

      {/* Main Content Area - 2 Column Layout */}
      <div className={styles.mainContentContainer}>
        <div className={styles.imageArea}>
          <img src="/メインビジュアル-桜.jpg" alt="桜の風景" />
        </div>
        <div className={styles.bodyTextArea}>
          <p className={styles.bodyText}>
            朝の空気が澄んでいて、深呼吸をすると心が軽やかになります。四季折々の美しい自然に囲まれた佐久と小諸では、日々の暮らしの中で小さな発見と感動に出会えます。
          </p>
          <p className={styles.bodyText}>
            歴史ある街並みを歩けば、時の流れを感じながらゆったりとした時間を過ごすことができます。地元の人々の温かさに触れ、美味しい食べ物を味わいながら、心豊かな生活を送ることができるでしょう。
          </p>
          <p className={styles.bodyText}>
            ここには、言葉では表現しきれない「いいな」と思える瞬間がたくさんあります。あなたも、サクとコモロの魅力を実際に体験してみませんか。
          </p>
          
          {/* CTA Link */}
          <div className={styles.ctaArea}>
            <div className={styles.exploreLink}>
              <span className={styles.linkText}>サクとコモロをめぐる</span>
              <div className={styles.pinkCircle}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
