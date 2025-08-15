import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex gap-6 justify-center">
      <NavLink to="/" className="text-leaf-dark hover:underline">Home</NavLink>
      <NavLink to="/about" className="text-leaf-dark hover:underline">About</NavLink>
      <NavLink to="/services" className="text-leaf-dark hover:underline">Services</NavLink>
      <NavLink to="/contact" className="text-leaf-dark hover:underline">Contact</NavLink>
    </nav>
  );
}

export default Navbar;
