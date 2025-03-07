import './globals.css'

export const metadata = {
  title: '桃太郎電鐵-昭和平成令和也是定番！',
  description: '桃太郎電鐵資訊整理',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
