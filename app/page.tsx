import Head from "next/head";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Komoro Landing Page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Serif+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerNav}>
          <div className={styles.logo}>
            <img src="/logo_piyomaru.png" alt="ロゴ" />
            <h1>サクトコモロト</h1>
          </div>
          <nav className={styles.menu}>
            <ul>
              <li>サクとコモロのいいトコ</li>
              <li>まちのムービー</li>
              <li>まちへのトビラ</li>
              <li>日常のかけら</li>
              <li>暮らしてサクッと通信</li>
              <li>#サクコモ日和</li>
              <li>サクとコモロのヒトの声</li>
              <li>ゲームでサクコモ体験</li>
            </ul>
            <div className={styles.snsIcons}>
              <img src="/icon_instagram.svg" alt="Instagram" />
              <img src="/icon_facebook.svg" alt="Facebook" />
            </div>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero_section}>
          <div className={styles.hero_container}>huiguygyug</div>

          <div className={styles.catchCopy}>
            <div className={styles.verticalText}>
              ここはきっと
              <br />
              わたしのまち。
            </div>
            <div className={styles.verticalText}>風景・言葉・ものがたり。</div>
            <div className={styles.verticalText}>
              歩いて、感じて、好きになる。
            </div>
          </div>

          <div className={styles.goButton}>
            <p>GO！！</p>
            <img src="/mascot.png" alt="ぴよ丸" />
          </div>
        </section>

        {/* Catch Copy */}
        <section className={styles.catch}>
          <p>ちょっと、夢をみてきたみたい。</p>
        </section>

        {/* Video Section */}
        <section className={styles.videos}>
          <div className={styles.videoItem}>
            <img src="/video1.jpg" alt="動画1" />
          </div>
          <div className={styles.videoItem}>
            <img src="/video2.jpg" alt="動画2" />
          </div>
        </section>

        {/* Seasons Gallery */}
        <section className={styles.gallery}>
          <div className={styles.galleryGrid}>
            <img src="/spring.jpg" alt="春" />
            <img src="/summer.jpg" alt="夏" />
            <img src="/autumn.jpg" alt="秋" />
            <img src="/winter.jpg" alt="冬" />
          </div>
          <p>四季折々の自然があなたを迎えます。</p>
        </section>

        {/* Migration Info */}
        <section className={styles.migration} id="access">
          <div className={styles.migrationText}>
            <h2>移住のご案内</h2>
            <p>豊かな自然と温かいコミュニティが待っています。</p>
            <div className={styles.card}>
              <h3>暮らしのサポート</h3>
              <p>住まい探しや仕事探しを丁寧にサポート。</p>
            </div>
          </div>
          <div className={styles.migrationPhoto}>
            <img src="/move.jpg" alt="移住" />
          </div>
        </section>

        {/* Instagram Section */}
        <section className={styles.instagram}>
          <h2>Instagram</h2>
          <div className={styles.instagramGrid}>
            <img src="/insta1.jpg" alt="insta1" />
            <img src="/insta2.jpg" alt="insta2" />
            <img src="/insta3.jpg" alt="insta3" />
            <img src="/insta4.jpg" alt="insta4" />
            <img src="/insta5.jpg" alt="insta5" />
            <img src="/insta6.jpg" alt="insta6" />
          </div>
          <div className={styles.instagramDecoration}>
            <img src="/balloon.jpg" className={styles.balloon} alt="気球" />
            <img src="/person.jpg" className={styles.person} alt="人物" />
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer} id="contact">
          <div className={styles.footerContent}>
            <div className={styles.footerInfo}>
              <p>〒000-0000 長野県小諸市</p>
              <p>電話: 000-000-0000</p>
            </div>
            <div className={styles.footerLogo}>
              <img src="/logo.png" alt="ロゴ" />
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
