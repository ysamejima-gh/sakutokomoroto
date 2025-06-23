import styles from './VideoLoveSection.module.css';

export default function VideoLoveSection() {
  return (
    <section className={styles.videoLoveSection}>
      {/* 動物シルエット装飾 */}
      <div className={styles.animalSilhouettes}>
        <div className={styles.squirrelLeft}></div>
        <div className={styles.squirrelRight}></div>
        <div className={styles.rabbitCenter}></div>
      </div>
      
      {/* もみじ装飾 - 更新！ */}
      <div className={styles.mapleLeaves}>
        {[...Array(15)].map((_, i) => (
          <img 
            key={i} 
            src="/もみじの葉っぱ 1.png" 
            alt="" 
            className={`${styles.mapleLeaf} ${styles[`mapleLeaf${i + 1}`]}`}
          />
        ))}
      </div>

      {/* メインコンテンツ */}
      <div className={styles.contentContainer}>
        {/* タイトルエリア */}
        <div className={styles.titleArea}>
          <h2 className={styles.h2_heading}>動画で恋する、サクとコモロ。</h2>
        </div>

        {/* 縦書きテキストエリア */}
        <div className={styles.textArea}>
          <div className={styles.verticalTextContainer}>
            <p className={styles.verticalText}>わたしが過ごすなら、どっちだろう？</p>
            <p className={styles.verticalText}>佐久に降り立ったとき、空が広くて、心まで少し背伸びした。</p>
            <p className={styles.verticalText}>まち全体がスマートで、でも冷たくなくて。</p>
            <p className={styles.verticalText}>ここなら、自分のリズムで暮らしていけそうな気がした。</p>
            <p className={styles.verticalText}>小諸の駅では、時間がふわっとゆるんでく感じがした。</p>
            <p className={styles.verticalText}>静かな通りと、ちょっとレトロな風景に、気づけば目が止まってた。</p>
            <p className={styles.verticalText}>どちらも、はじめてなのに「ただいま」って言いたくなる。</p>
          </div>
        </div>

        {/* 動画カードエリア - 左右並び */}
        <div className={styles.cardContainer}>
          <div className={`${styles.videoCard} ${styles.sakuCard}`}>
            <div className={styles.cardImage}>
              <div className={styles.playButton}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7z" fill="white"/>
                </svg>
              </div>
              <div className={styles.cardOverlay}>
                <span className={styles.cardLabel}>小諸市からみる浅...</span>
              </div>
            </div>
            <div className={styles.cardTitle}>サク</div>
          </div>
          
          <div className={`${styles.videoCard} ${styles.komoloCard}`}>
            <div className={styles.cardImage}>
              <div className={styles.playButton}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7z" fill="white"/>
                </svg>
              </div>
              <div className={styles.cardOverlay}>
                <span className={styles.cardLabel}>佐久市からみる浅...</span>
              </div>
            </div>
            <div className={styles.cardTitle}>コモロ</div>
          </div>
        </div>
      </div>

      {/* 栗装飾 */}
      <div className={styles.kuriDecorations}>
        <div className={styles.kuri}></div>
        <div className={styles.kuri}></div>
        <div className={styles.kuri}></div>
      </div>
    </section>
  );
}