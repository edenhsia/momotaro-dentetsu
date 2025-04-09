import IntroSection from './intro-section'

export default function IntroInfo() {
  return (
    <IntroSection title="📚 資料與開發說明">
      <p>
        所有資料皆由本人實際遊玩記錄，並參考
        <a
          href="https://gamepedia.jp/momotetsu-reiwa/archives/60#i-3"
          target="_blank"
          rel="noopener noreferrer"
          className="underline mx-1"
        >
          gamepedia.jp
        </a>
        的內容，透過 ChatGPT 協助翻譯與彙整。
      </p>
      <p>
        卡片分類、歷史英雄能力與窮神問答皆經過 Excel 整理後匯入 Firebase
        資料庫統一管理。
      </p>
      <p>
        本網站以 React + Next.js 開發，UI 採用 DaisyUI
        製作。所有資料與功能皆由我個人設計與實作，並作為前端作品集的一部分持續維護中。
      </p>
      <p>
        ※
        本網站內容為非官方整理，僅供學習與展示使用。若你發現什麼奇怪的小錯，或是想分享卡片使用心得、補充窮神問答，歡迎透過
        <a
          href="https://forms.gle/obNP4GyhS629SV4eA"
          target="_blank"
          rel="noopener noreferrer"
          className="underline ml-1"
        >
          Google 表單
        </a>
        回報給我 🐛
      </p>
    </IntroSection>
  )
}
