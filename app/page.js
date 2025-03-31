import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-view flex items-center">
      <div className="container">
        <div className="w-11 h-11 mx-auto md:w-16 md:h-16">
          <Image src="/logo.png" alt="peach logo" width={500} height={500} />
        </div>
        <h1 className="text-center text-4xl text-primary font-black mb-6 md:text-6xl md:mb-10">
          桃太郎電鐵
          <small className="text-xl block md:text-2xl">
            昭和平成令和也是定番！
          </small>
        </h1>

        <menu className="grid grid-cols-1 gap-y-4 justify-items-center md:grid-cols-4 md:gap-x-4">
          <Link
            href="/cards"
            className="btn-home bg-blue border-blue-dark hover:bg-blue-dark"
          >
            買遍卡片
          </Link>
          <Link
            href="/heroes"
            className="btn-home bg-red border-red-dark hover:bg-red-dark"
          >
            歷史英雄
          </Link>
          <Link
            href="/qa"
            className="btn-home bg-yellow border-yellow-dark hover:bg-yellow-dark"
          >
            窮神問答
          </Link>
          <Link
            href="/"
            className="btn-home bg-green border-green-dark hover:bg-green-dark"
          >
            集點
          </Link>
        </menu>
      </div>
    </main>
  )
}
