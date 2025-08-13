import Hero from '../components/hero'
import Prestasi from '../components/cardPrestasi'
import Slogan from '../components/sloganSekolah'
import ToggleTheme from '../components/toggleTheme';
import Kepsek from '../components/kepsek';
import { DivSpacer } from '../components/spacer';
import CardGuru from '../components/cardGuru';
import Jurusan from '../components/jurusan';
import GalleryGrid from '../components/galleryGrid';

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
      <CardGuru />
      <DivSpacer />
      
      <Jurusan />
      <GalleryGrid />
    </div>
  );
}