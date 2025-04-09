import IntroSection from './intro-section'
import Link from 'next/link'

export default function IntroAbout() {
  return (
    <IntroSection title="🧰 這個網站是做什麼的？">
      <p>
        本網站是一個用於輔助《桃太郎電鐵 ～昭和 平成
        令和也是定番！～》遊玩的查詢工具，主要幫助玩家快速了解卡片與歷史英雄資訊、強化對遊戲的掌握度。
        目前支援以下功能：
        <span className="block">
          <strong>買遍卡片：</strong>依卡片名稱、效果分類快速檢索
          <Link href="/cards">↗️</Link>
        </span>
        <span className="block">
          <strong>歷史英雄：</strong>彙整所有幫手角色與其技能說明
          <Link href="/heroes">↗️</Link>
        </span>
        <span className="block">
          <strong>窮神問答：</strong>介紹窮神變化類型與對應策略
          <Link href="/qa">↗️</Link>
        </span>
      </p>
    </IntroSection>
  )
}
