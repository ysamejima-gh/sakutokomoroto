import React from 'react';
import styles from './RelaxSection.module.css';

export default function RelaxSection() {
  return (
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
  );
}
