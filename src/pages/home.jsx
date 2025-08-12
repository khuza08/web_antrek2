import Hero from '../components/hero'
import Prestasi from '../components/cardPrestasi'
import Slogan from '../components/sloganSekolah'
import ToggleTheme from '../components/toggleTheme';
import Kepsek from '../components/kepsek';
import { DivSpacer } from '../components/spacer';

export default function Home() {
  return (
    <div>
      <Hero />
      
      <Slogan />
      <DivSpacer />
      
      <Prestasi />
      <DivSpacer />
      
      <ToggleTheme />
      
      <Kepsek />
    </div>
  );
}