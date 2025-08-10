import Hero from '../components/hero'
import Prestasi from '../components/cardPrestasi'
import Slogan from '../components/sloganSekolah'
import ToggleTheme from '../components/toggleTheme';

export default function Home() {
  return (
    <div>
      <Hero />
      <Slogan />
      <Prestasi />
      <ToggleTheme />
    </div>
  )
}
