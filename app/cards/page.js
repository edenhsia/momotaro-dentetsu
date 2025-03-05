'use client'

import Cards from '@/components/cards'
import ErrorAlert from '@/components/error-alert'
import Loading from '@/components/loading'
import PageTitle from '@/components/page-title'
import { useState } from 'react'
import useSWR from 'swr'
import Modal from '@/components/modal'

async function fetchCardsData() {
  const response = await fetch(
    'https://momotaro-dentetsu-default-rtdb.firebaseio.com/cards.json'
  )

  if (!response.ok) {
    throw new Error('無法擷取資料，請檢查 Firebase API 或網路連線')
  }

  return response.json()
}

export default function CardsPage() {
  const { data, error } = useSWR('cards', fetchCardsData, {
    errorRetryCount: 3,
  })

  const [cardInfo, setCardInfo] = useState()

  function showCardInfo(id) {
    if (!data) return

    const card = data.find((item) => item.id === id)

    if (card) {
      setCardInfo(card)
    }
  }

  function closeCardInfo() {
    setCardInfo(null)
  }

  let content

  if (error) {
    content = <ErrorAlert message={error.message} />
  } else if (!data) {
    content = <Loading />
  } else {
    content = <Cards items={data} onCardClick={showCardInfo} />
  }

  return (
    <main className="py-12">
      <div className="container">
        <PageTitle title="卡片" className="mb-3" />
        {content}
      </div>
      {cardInfo && <Modal info={cardInfo} onClose={closeCardInfo} />}
    </main>
  )
}
