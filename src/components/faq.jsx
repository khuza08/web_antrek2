export default function Faq() {
  const faqs = [
    { q: "Bagaimana cara mendaftar?", a: "Kamu bisa mendaftar melalui halaman PPDB." },
    { q: "Apakah ada ekstrakurikuler?", a: "Ya, kami menyediakan berbagai ekstrakurikuler." },
  ]

  return (
    <div className="max-w-xl mx-auto space-y-4">
      {faqs.map((faq, idx) => (
        <details key={idx} className="border rounded p-4">
          <summary className="cursor-pointer font-semibold">{faq.q}</summary>
          <p className="mt-2">{faq.a}</p>
        </details>
      ))}
    </div>
  )
}
