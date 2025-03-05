import { CARD_CATEGORIES, CARD_CATEGORIES_LABEL } from '@/libs/enum'

export default function CardsFilter({ onFilter }) {
  function handleFilter(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const filter = Object.fromEntries(formData)
    onFilter(filter)
  }

  return (
    <form className="mb-5" onSubmit={handleFilter}>
      <label className="input input-bordered flex items-center gap-2 focus-within:outline-primary mb-2">
        <input type="text" name="name" className="grow" placeholder="Search" />
        <button className="btn btn-sm bg-primary text-white hover:text-white hover:bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-5 w-5 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </label>
      <div className="flex flex-wrap">
        {Object.entries(CARD_CATEGORIES_LABEL).map(([value, label]) => {
          return (
            <label
              key={value}
              className="label cursor-pointer justify-start py-1 mr-2"
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
