import HeroItem from './hero-item'

export default function Heroes({ items }) {
  function groupBy(arr, field) {
    return arr.reduce((result, item) => {
      const key = item[field]

      if (!result[key]) {
        result[key] = []
      }

      result[key].push(item)

      return result
    }, {})
  }

  const groupByItems = groupBy(items, 'region')

  return (
    <div className="space-y-5">
      {Object.entries(groupByItems).map(([key, value]) => (
        <HeroItem key={key} region={key} items={value} />
      ))}
    </div>
  )
}
