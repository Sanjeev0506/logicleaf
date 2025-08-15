export default function ServiceCard({ title, description, img }) {
  return (
    <div className="bg-white shadow rounded overflow-hidden hover:scale-[1.02] transition">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-leaf-dark">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <a href="/services" className="text-leaf mt-2 inline-block font-medium hover:underline">View More</a>
      </div>
    </div>
  );
}
