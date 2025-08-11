export default function SectionTitle({ children }) {
  return (
    <h2 className="text-4xl text-black dark:text-white font-bold mb-2 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>
      {children}
    </h2>
  )
}
