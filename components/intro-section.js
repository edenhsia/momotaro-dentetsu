export default function IntroSection({ title, children }) {
  return (
    <section className="leading-relaxed">
      <h2 className="text-lg font-bold mb-2 md:text-2xl">{title}</h2>
      {children}
    </section>
  )
}
