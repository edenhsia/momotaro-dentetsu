import PageTitle from '@/components/page-title'
import IntroOverview from '@/components/intro-overview'
import IntroAbout from '@/components/intro-about'
import IntroInfo from '@/components/intro-info'

export default function IntroPage() {
  return (
    <main className="py-12">
      <div className="container">
        <PageTitle title="內容介紹" />
        <div className="space-y-4">
          <IntroOverview />
          <IntroAbout />
          <IntroInfo />
        </div>
      </div>
    </main>
  )
}
