import React from 'react';

const services = [
  {
    title: "Website Development",
    description: "Build Your Dream Website Fast, Secure & Scalable",
    img: "https://bing.com/th/id/BCO.55fba19d-bac8-4f60-b7a1-b18e416f5688.png",
  },
  {
    title: "UX UI Designing",
    description: "Transforming Ideas into Stunning Digital Experiences",
    img: "https://bing.com/th/id/BCO.83b8a134-5ee8-491f-aace-956f1a6e371f.png",
  },
  {
    title: "App Development",
    description: "Build High Performance Android & iOS Apps",
    img: "https://bing.com/th/id/BCO.b1c9e308-779e-41c2-8d13-9b8ddbb0de9f.png",
  },
  {
    title: "Chatbot",
    description: "Revolutionize Customer Interaction with AI Chatbots",
    img: "https://bing.com/th/id/BCO.5de41213-b7a9-4f56-bd77-8f95b7689f72.png",
  },
  {
    title: "Blockchain",
    description: "Revolutionize Your Business with Cutting-Edge Blockchain Solutions",
    img: "https://bing.com/th/id/BCO.239e9893-b99b-4724-9341-ffcb29f34f3d.png",
  },
  {
    title: "SaaS Development",
    description: "Transform Your Ideas into Powerful SaaS Solutions",
    img: "https://bing.com/th/id/BCO.31bc71a5-00f0-4752-ba8a-abd87311fd23.png",
  },
  {
    title: "Shopify Development",
    description: "Professional Shopify Development Services for Your Online Store",
    img: "https://bing.com/th/id/BCO.e0a7afdc-fd6f-407d-91c2-9aeeea3040a2.png",
  },
  {
    title: "API Development",
    description: "Streamline Your Business Operations with Custom APIs",
    img: "https://bing.com/th/id/BCO.1cca8b9c-418c-4a7e-971a-7a146eb6a45b.png",
  },
  {
    title: "Digital Marketing",
    description: "Grow your Business with help of our Top Industry People",
    img: "https://bing.com/th/id/BCO.7372ded2-aff0-4677-94e0-bb03988a64f3.png",
  },
  {
    title: "Skillforza",
    description: "Get Empowered and Placed in Top Companies with Us",
    img: "https://bing.com/th/id/BCO.d671d6ff-a2b5-4c76-ba6f-15abc968e83c.png",
  },
];

export default function Home() {
  return (
    <div>
      <header className="text-center py-16 bg-leaf">
        <h1 className="text-4xl font-bold uppercase text-white">Cultivating Innovation</h1>
        <p className="mt-4 text-xl text-white">Logic-Driven Solutions For A Brighter Future</p>
        <button className="mt-6 px-6 py-2 bg-white text-leaf-dark font-semibold rounded hover:bg-leaf-light">
          Discover How We Can Help You Grow
        </button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10">
        {["Mobile Application Development", "UX / UI Designing", "Web Application Development"].map((title, i) => (
          <div key={i} className="bg-white shadow rounded p-4 text-center">
            <h3 className="text-lg font-semibold">{title.split(" ")[0]}</h3>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
        ))}
      </section>

      <section className="px-6 py-10 max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-700">
          Megallahati Logic Leafs Private Limited is an IT startup dedicated to harnessing the power of technology to drive business success. Our team of experts combines logical thinking with creative problem-solving to deliver innovative solutions that meet the evolving needs of our clients.
        </p>
      </section>

      <section className="px-6 py-10">
        <h2 className="text-3xl font-bold text-center uppercase">Services</h2>
        <p className="text-center italic text-leaf-dark mb-6">Transforming Visions into Reality</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white shadow rounded overflow-hidden">
              <img src={s.img} alt={s.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-leaf-dark">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.description}</p>
                <a href="#" className="text-leaf mt-2 inline-block font-medium">View More</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-leaf-light text-leaf-dark px-6 py-10">
        <h3 className="text-xl font-bold uppercase">Logic Leafs Private Limited</h3>
        <p className="mt-2">📞 +91 9019225051</p>
        <p>📧 info@logicleafs.com</p>
        <p>📍 2nd Floor, BM Habitat Mall 1 Jayalakshmipuram, Karnataka, MYSORE, India, 570012</p>

        <div className="mt-6">
          <h4 className="text-lg font-semibold uppercase">Write To Us Today</h4>
          <p className="text-sm mt-2">Whether you have questions about our services, want to request a consultation, or are ready to get started, we're just a click away. Fill out the form, and one of our experts will be in touch with you shortly.</p>
          <a href="/contact" className="mt-4 inline-block bg-leaf-dark text-white px-4 py-2 rounded hover:bg-leaf">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}
