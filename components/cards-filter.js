'use client'

import { useRef } from 'react'
import { CARD_CATEGORIES, CARD_CATEGORIES_LABEL } from '@/libs/enum'
import SearchBar from './search-bar'

export default function CardsFilter({ onFilter }) {
  const inputKeyword = useRef()

  function handleFilter(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const filter = Object.fromEntries(formData)
    onFilter(filter)
  }

  function handleCategoryClick(e) {
    const filterCategory = e.target.value

    if (filterCategory) {
      const keyword = inputKeyword.current.value
      const filter = { keyword, category: filterCategory }
      onFilter(filter)
    }
  }

  return (
    <form className="mb-5" onSubmit={handleFilter}>
      <SearchBar ref={inputKeyword} placeholder="請輸入卡片名稱" />
      <div className="flex flex-wrap">
        {Object.entries(CARD_CATEGORIES_LABEL).map(([value, label]) => {
          return (
            <label
              key={value}
              className="label cursor-pointer justify-start py-1 mr-2"
              onClick={handleCategoryClick}
            >
              <input
                type="radio"
                name="category"
                value={value}
                className="radio checked:bg-primary mr-2"
                defaultChecked={value === CARD_CATEGORIES.ALL}
              />
              <span className="label-text">{label}</span>
            </label>
          )
        })}
      </div>
    </form>
  )
}
