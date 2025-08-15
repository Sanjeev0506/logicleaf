const features = [
  {
    title: "Website Development",
    description: "Fast, scalable websites tailored to your brand.",
    img: "https://cdn-icons-png.flaticon.com/512/1006/1006360.png",
  },
  {
    title: "UX/UI Design",
    description: "Pixel-perfect interfaces that delight users.",
    img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
  },
  {
    title: "App Development",
    description: "High-performance mobile apps for Android & iOS.",
    img: "https://cdn-icons-png.flaticon.com/512/1006/1006361.png",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-12 px-6 bg-gradient-to-br from-white to-leaf-light">
      <h2 className="text-3xl font-bold text-center mb-8">Core Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:scale-[1.02] transition">
            <img src={f.img} alt={f.title} className="h-24 mx-auto mb-4 object-contain" />
            <h3 className="text-xl font-semibold text-center">{f.title}</h3>
            <p className="text-center text-gray-600 mt-2">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
