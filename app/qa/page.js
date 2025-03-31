'use client'

import PageTitle from '@/components/page-title'
import QAItem from '@/components/qa-item'
import ErrorAlert from '@/components/error-alert'
import Loading from '@/components/loading'
import useSWR from 'swr'
import { useState, useEffect } from 'react'

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
  const { data, error } = useSWR('qa', fetchQAsData, {
    errorRetryCount: 3,
  })

  const [qa, setQA] = useState([])

  useEffect(() => {
    if (data) {
      setQA(data)
    }
  }, [data])

  let content

  if (error) {
    content = <ErrorAlert message={error.message} />
  } else if (!data) {
    content = <Loading />
  } else {
    content = (
      <ul className="space-y-6">
        {qa.map((item) => (
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
