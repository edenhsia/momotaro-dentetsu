'use client'

import Cards from '@/components/cards/cards'
import ErrorAlert from '@/components/error-alert'
import Loading from '@/components/loading'
import PageTitle from '@/components/page-title'
import { useEffect, useState } from 'react'
import Modal from '@/components/modal'
import CardsFilter from '@/components/cards/cards-filter'
import { CARD_CATEGORIES } from '@/libs/enum'
import { useQuery } from '@tanstack/react-query'

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
  const { data, error, isLoading } = useQuery({
    queryKey: ['cards'],
    queryFn: fetchCardsData,
    retry: 3,
  })

  const [cards, setCards] = useState([])
  const [cardInfo, setCardInfo] = useState()

  useEffect(() => {
    if (data) setCards(data)
  }, [data])

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

  function handleFilter(filter) {
    const { keyword: filterNameRaw, category: filterCategory } = filter
    const filterName = filterNameRaw.trim()

    if (!filterName && filterCategory === CARD_CATEGORIES.ALL) {
      setCards(data)
      return
    }

    const filteredData = data.filter((item) => {
      const matchName = !filterName || item.name.includes(filterName)
      const matchCategory =
        filterCategory === CARD_CATEGORIES.ALL ||
        item.category === filterCategory
      return matchName && matchCategory
    })

    setCards(filteredData)
  }

  let content

  if (error) {
    content = <ErrorAlert message={error.message} />
  } else if (isLoading || !data) {
    content = <Loading />
  } else {
    content = <Cards items={cards} onCardClick={showCardInfo} />
  }

  return (
    <main className="py-12">
      <div className="container">
        <PageTitle title="買遍卡片" />
        <CardsFilter onFilter={handleFilter} />
        {content}
      </div>
      {cardInfo && <Modal info={cardInfo} onClose={closeCardInfo} />}
    </main>
  )
}
