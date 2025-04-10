'use client'

import PageTitle from '@/components/page-title'
import QAItem from '@/components/qa/qa-item'
import ErrorAlert from '@/components/error-alert'
import Loading from '@/components/loading'
import { useQuery } from '@tanstack/react-query'

async function fetchQAsData() {
  const response = await fetch(
    'https://momotaro-dentetsu-default-rtdb.firebaseio.com/qa.json'
  )

  if (!response.ok) {
    throw new Error('無法擷取資料，請檢查 Firebase API 或網路連線')
  }

  return response.json()
}

export default function QAPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['qa'],
    queryFn: fetchQAsData,
    retry: 3,
  })

  let content

  if (error) {
    content = <ErrorAlert message={error.message} />
  } else if (isLoading || !data) {
    content = <Loading />
  } else {
    content = (
      <ul className="space-y-6">
        {data.map((item) => (
          <li key={item.id}>
            <QAItem question={item.question} answer={item.answer} />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <main className="py-12">
      <div className="container">
        <PageTitle title="窮神問答" />
        <p className="mb-7">
          窮神有時候會出題目考你，答對就不會被惡作劇，以下整理我目前有遇到的問題
        </p>
        {content}
      </div>
    </main>
  )
}
