import { CARD_CATEGORIES_COLOR, CARD_CATEGORIES_LABEL } from '@/libs/enum'

export default function Cards({ items, onCardClick }) {
  return (
    <ol className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {items.map((item) => (
        <li
          key={item.id}
          onClick={() => onCardClick(item.id)}
          className="rounded-lg p-5 pb-8 text-lg text-center cursor-pointer bg-white shadow relative overflow-hidden"
        >
          <h2 className="font-medium">{item.name}</h2>
          <span
            className={`absolute text-xs inset-x-0 bottom-0 py-0.5 text-white bg-${
              CARD_CATEGORIES_COLOR[item.category]
            }`}
          >
            {CARD_CATEGORIES_LABEL[item.category]}
          </span>
        </li>
      ))}
    </ol>
  )
}
