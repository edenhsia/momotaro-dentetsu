import './globals.css'
import Footer from '@/components/footer'
import QueryProvider from './query-provider'

export const metadata = {
  title: '桃太郎電鐵 ～ 昭和 平成 令和也是定番！～',
  description: '桃太郎電鐵 ～ 昭和 平成 令和也是定番！～ 資訊整理',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body className="min-h-view flex flex-col">
        <QueryProvider>
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  )
}
