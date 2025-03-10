'use client'

export default function SearchBar({ ref, placeholder }) {
  return (
    <label className="input input-bordered flex items-center gap-2 focus-within:outline-primary mb-2">
      <input
        ref={ref}
        type="text"
        name="keyword"
        className="grow"
        placeholder={placeholder}
      />
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
  )
}
