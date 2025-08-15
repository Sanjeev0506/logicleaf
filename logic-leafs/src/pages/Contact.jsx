export default function Contact() {
  return (
    <section className="px-6 py-12 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-leaf-dark mb-1">Name</label>
          <input type="text" placeholder="Your Name" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-leaf" />
        </div>
        <div>
          <label className="block text-sm font-medium text-leaf-dark mb-1">Email</label>
          <input type="email" placeholder="Your Email" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-leaf" />
        </div>
        <div>
          <label className="block text-sm font-medium text-leaf-dark mb-1">Phone</label>
          <input type="tel" placeholder="Your Phone Number" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-leaf" />
        </div>      
        <div>
          <label className="block text-sm font-medium text-leaf-dark mb-1">Message</label>
          <textarea placeholder="Your Message" className="w-full border border-gray-300 p-2 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-leaf"></textarea>
        </div>
        <button type="submit" className="bg-leaf-dark text-white px-4 py-2 rounded hover:bg-leaf transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
