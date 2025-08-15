import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: "Website Development",
    description: "Build Your Dream Website Fast, Secure & Scalable",
    img: "https://cdn-icons-png.flaticon.com/512/1006/1006360.png",
  },
  {
    title: "UX UI Designing",
    description: "Transforming Ideas into Stunning Digital Experiences",
    img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
  },
  {
    title: "App Development",
    description: "Build High Performance Android & iOS Apps",
    img: "https://cdn-icons-png.flaticon.com/512/1006/1006361.png",
  },
  {
    title: "Chatbot",
    description: "Revolutionize Customer Interaction with AI Chatbots",
    img: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
  },
  {
    title: "Blockchain",
    description: "Revolutionize Your Business with Cutting-Edge Blockchain Solutions",
    img: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
  },
  {
    title: "SaaS Development",
    description: "Transform Your Ideas into Powerful SaaS Solutions",
    img: "https://cdn-icons-png.flaticon.com/512/1006/1006362.png",
  },
  {
    title: "Shopify Development",
    description: "Professional Shopify Development Services for Your Online Store",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968773.png",
  },
  {
    title: "API Development",
    description: "Streamline Your Business Operations with Custom APIs",
    img: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
  },
  {
    title: "Digital Marketing",
    description: "Grow your Business with help of our Top Industry People",
    img: "https://cdn-icons-png.flaticon.com/512/1006/1006364.png",
  },
  {
    title: "Skillforza",
    description: "Get Empowered and Placed in Top Companies with Us",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
];

export default function Services() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-bold text-center uppercase">Our Services</h2>
      <p className="text-center italic text-leaf-dark mb-6">Transforming Visions into Reality</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => <ServiceCard key={i} {...s} />)}
      </div>
    </section>
  );
}
