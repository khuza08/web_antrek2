import GalleryGrid from '../components/galleryGrid'
import { useEffect, useState } from 'react'

export default function Gallery() {
  const [gallery, setGallery] = useState([])

  useEffect(() => {
    fetch('/src/data/gallery.json')
      .then(res => res.json())
      .then(data => setGallery(data))
  }, [])

  return (
    <div className="p-6">
      <GalleryGrid items={gallery} />
    </div>
  )
}
