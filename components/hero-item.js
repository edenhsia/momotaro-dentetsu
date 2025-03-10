const REGION_LABEL = {
  Hokkaido: '北海道',
  Tohoku: '東北',
  Kanto: '關東',
  Chubu: '中部',
  Kinki: '近畿',
  Chugoku: '中國',
  Shikoku: '四國',
  Kyushu: '九州',
}

export default function HeroItem({ region, items }) {
  return (
    <div className="collapse">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium bg-primary text-white">
        {REGION_LABEL[region]}
      </div>
      <div className="collapse-content bg-white overflow-x-auto">
        <table className="table mt-4">
          <thead className="bg-background-dark">
            <tr className="text-gray">
              <th>人名</th>
              <th>車站</th>
              <th>獨占金額</th>
              <th>功能</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.station}</td>
                  <td>{item.cost}</td>
                  <td>
                    {item.description.length === 1 && item.description[0]}
                    {item.description.length > 1 && (
                      <ul>
                        {item.description.map((des, i) => (
                          <li key={`${item.id}-${i}`}>{des}</li>
                        ))}
                      </ul>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
