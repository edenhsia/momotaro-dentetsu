'use client'

import PageTitle from '@/components/page-title'
import Heroes from '@/components/heroes/heroes'
import ErrorAlert from '@/components/error-alert'
import Loading from '@/components/loading'
import { useQuery } from '@tanstack/react-query'
import { useRef, useState, useEffect } from 'react'
import SearchBar from '@/components/search-bar'

async function fetchHeroesData() {
  const response = await fetch(
    'https://momotaro-dentetsu-default-rtdb.firebaseio.com/heroes.json'
  )

  if (!response.ok) {
    throw new Error('無法擷取資料，請檢查 Firebase API 或網路連線')
  }

  return response.json()
}

export default function HeroesPage() {
  const inputKeyword = useRef()
  const { data, error, isLoading } = useQuery({
    queryKey: ['heroes'],
    queryFn: fetchHeroesData,
    retry: 3,
  })

  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    if (data) {
      setHeroes(data)
    }
  }, [data])

  function handleFilter(e) {
    e.preventDefault()
    const keyword = inputKeyword.current.value.trim()

    if (!keyword) {
      setHeroes(data)
      return
    }

    const filteredData = data.filter(
      (hero) => hero.name.includes(keyword) || hero.station.includes(keyword)
    )
    setHeroes(filteredData)
  }

  let content

  if (error) {
    content = <ErrorAlert message={error.message} />
  } else if (isLoading || !data) {
    content = <Loading />
  } else {
    content = <Heroes items={heroes} />
  }

  return (
    <main className="py-12">
      <div className="container">
        <PageTitle title="歷史英雄" />
        <form className="mb-7" onSubmit={handleFilter}>
          <SearchBar ref={inputKeyword} placeholder="請輸入英雄或是車站名稱" />
        </form>
        {content}
      </div>
    </main>
  )
}
