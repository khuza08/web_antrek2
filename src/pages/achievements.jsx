import CardPrestasi from '../components/cardPrestasi'
import { useEffect, useState } from 'react'

export default function Achievements() {
  const [prestasis, setPrestasis] = useState([])

  useEffect(() => {
    fetch('/src/data/prestasi.json')
      .then(res => res.json())
      .then(data => setPrestasis(data))
  }, [])

  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      {prestasis.map((p, idx) => (
        <CardPrestasi key={idx} prestasi={p} />
      ))}
    </div>
  )
}
