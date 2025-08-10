import Hero from '../components/hero'
import SectionTitle from '../components/sectionTitle'

export default function Home() {
  return (
    <div className="p-6">
      <Hero />
      <section>
        <SectionTitle>Berita Terbaru</SectionTitle>
        <p>Ini adalah contoh berita terbaru dari sekolah kami.</p>
      </section>
    </div>
  )
}
