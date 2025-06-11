export default function Home() {
  return (
    <main>
      {/* Heroセクション */}
      <section className="hero">
        <h1>サクトコモロト</h1>
        <p>小諸の魅力を世界へ届けるローカルプラットフォーム</p>
        <button>詳細を見る</button>
      </section>

      {/* Aboutセクション */}
      <section className="about">
        <h2>私たちについて</h2>
        <p>小諸の地域資源や文化を紹介します。</p>
      </section>

      {/* Featureセクション */}
      <section className="features">
        <h2>特徴</h2>
        <ul>
          <li>地域特化の情報発信</li>
          <li>観光・グルメ・体験情報が集約</li>
        </ul>
      </section>

      {/* Contactセクション */}
      <section className="contact">
        <h2>お問い合わせ</h2>
        <form>
          <input type="text" placeholder="お名前" />
          <input type="email" placeholder="メールアドレス" />
          <textarea placeholder="お問い合わせ内容"></textarea>
          <button type="submit">送信</button>
        </form>
      </section>
    </main>
  )
}
