export default function QAItem({ question, answer }) {
  return (
    <div className="collapse collapse-plus bg-primary text-white">
      <input type="radio" name="qa" />
      <div className="collapse-title text-xl font-medium">{question}</div>
      <div className="collapse-content bg-white text-primary">
        <p className="pt-4 text-lg font-medium">{answer}</p>
      </div>
    </div>
  )
}
