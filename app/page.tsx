"use client";

import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerNav}>
          <div className={styles.logo}>
            <Image 
              src="/logo_piyomaru.png" 
              alt="ロゴ" 
              width={40}
              height={40}
              priority
            />
            <h1 className={styles.h1_heading}>サクトコモロト</h1>
          </div>
          <nav className={styles.gNav}>
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
              <Image 
                src="/icon_instagram.svg" 
                alt="Instagram" 
                width={24}
                height={24}
              />
              <Image 
                src="/icon_facebook.svg" 
                alt="Facebook" 
                width={24}
                height={24}
              />
            </div>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero_section}>
          <div className={styles.catchCopy}>
            <div className={styles.verticalText}>
              歩いて、感じて、好きになる。
            </div>
            <div className={styles.verticalText}>
              ここはきっと、わたしのまち。
            </div>
            <div className={styles.verticalText}>風景・言葉・ものがたり。</div>
          </div>

          <div className={styles.goButton}>
            <p>GO！！</p>
            <Image 
              src="/mascot.png" 
              alt="ぴよ丸" 
              width={80}
              height={80}
              priority
            />
          </div>
        </section>

        {/* ちょっと、深呼吸したくなったら。 */}
        <section className={styles.introSection}>
          <div className={styles.introSection_container}>
            <div className={styles.introSection_txtArea}>
              <h2 className={styles.h2_heading}>
                ちょっと、深呼吸したくなったら。
              </h2>
              <p className={styles.introSection_txt}>
                東京から新幹線で、たった1時間ちょっと。
                <br />
                山に囲まれ、風が通り抜けるまち――佐久と小諸。
                <br />
                四季ごとに色を変える街路樹、古いものが愛おしく感じる路地裏。
                <br />
                そして、そこに暮らす人たちの穏やかな笑顔。
                <br />
                はじめて訪れたのに、どこか懐かしくて、
                <br />
                写真を撮る手が止まらなくなるような風景に、何度も出会える。
                <br />
                このサイトでは、そんな「サクトコモロ」の日常を、
                <br />
                小さなゲームや読みものを通して、そっと届けます。
                <br />
                忙しい日々の合間に、ふっと心がやわらぐ場所を探しているなら。
                <br />
                あなたの「次の旅のきっかけ」になれたら嬉しいです。
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className={styles.videos}>
          <div className={styles.videoItem}>
            <Image 
              src="/video1.jpg" 
              alt="動画1" 
              width={400}
              height={300}
              loading="lazy"
            />
          </div>
          <div className={styles.videoItem}>
            <Image 
              src="/video2.jpg" 
              alt="動画2" 
              width={400}
              height={300}
              loading="lazy"
            />
          </div>
        </section>

        {/* Seasons Gallery */}
        <section className={styles.gallery}>
          <div className={styles.galleryGrid}>
            <Image 
              src="/spring.jpg" 
              alt="春" 
              width={300}
              height={200}
              loading="lazy"
            />
            <Image 
              src="/summer.jpg" 
              alt="夏" 
              width={300}
              height={200}
              loading="lazy"
            />
            <Image 
              src="/autumn.jpg" 
              alt="秋" 
              width={300}
              height={200}
              loading="lazy"
            />
            <Image 
              src="/winter.jpg" 
              alt="冬" 
              width={300}
              height={200}
              loading="lazy"
            />
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
            <Image 
              src="/move.jpg" 
              alt="移住" 
              width={500}
              height={400}
              loading="lazy"
            />
          </div>
        </section>

        {/* Instagram Section */}
        <section className={styles.instagram}>
          <h2>Instagram</h2>
          <div className={styles.instagramGrid}>
            <Image 
              src="/insta1.jpg" 
              alt="insta1" 
              width={200}
              height={200}
              loading="lazy"
            />
            <Image 
              src="/insta2.jpg" 
              alt="insta2" 
              width={200}
              height={200}
              loading="lazy"
            />
            <Image 
              src="/insta3.jpg" 
              alt="insta3" 
              width={200}
              height={200}
              loading="lazy"
            />
            <Image 
              src="/insta4.jpg" 
              alt="insta4" 
              width={200}
              height={200}
              loading="lazy"
            />
            <Image 
              src="/insta5.jpg" 
              alt="insta5" 
              width={200}
              height={200}
              loading="lazy"
            />
            <Image 
              src="/insta6.jpg" 
              alt="insta6" 
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
          <div className={styles.instagramDecoration}>
            <Image 
              src="/balloon.jpg" 
              className={styles.balloon} 
              alt="気球" 
              width={150}
              height={200}
              loading="lazy"
            />
            <Image 
              src="/person.jpg" 
              className={styles.person} 
              alt="人物" 
              width={100}
              height={150}
              loading="lazy"
            />
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
              <Image 
                src="/logo.png" 
                alt="ロゴ" 
                width={60}
                height={40}
                loading="lazy"
              />
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
