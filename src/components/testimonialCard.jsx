export default function TestimonialCard({ testimonial }) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <p>"{testimonial.text}"</p>
      <p className="mt-2 font-bold">- {testimonial.name}</p>
    </div>
  )
}
