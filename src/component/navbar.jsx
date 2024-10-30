import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="bg-white mx-4 my-5 px-3 py-4 rounded-lg shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-orange-500 text-2xl font-extrabold">GenCerdas</h1>
        
        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-4 font-semibold">
          <a href="#home" className="text-orange-500 hover:bg-orange-500 hover:text-white px-2 py-2 rounded-md transition">Beranda</a>
          <a href="#beasiswa-pilihan" className="text-orange-500 hover:bg-orange-500 hover:text-white px-2 py-2 rounded-md transition">Detail Beasiswa</a>
          <a href="#registrasi" className="text-orange-500 hover:bg-orange-500 hover:text-white px-2 py-2 rounded-md transition">Pendaftaran</a>
          <a href="#artikel" className="text-orange-500 hover:bg-orange-500 hover:text-white px-2 py-2 rounded-md transition">Artikel</a>
          <a href="/akun" className="text-orange-500 hover:bg-orange-500 hover:text-white px-2 py-2 rounded-md transition">Akun</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-orange-500 focus:outline-none"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div id="mobile-menu" className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <a href="#home" onClick={toggleMenu} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition">Beranda</a>
              <a href="#beasiswa-pilihan" onClick={toggleMenu} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition">Detail Beasiswa</a>
              <a href="#registrasi" onClick={toggleMenu} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition">Pendaftaran</a>
              <a href="#artikel" onClick={toggleMenu} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition">Artikel</a>
              <a href="/akun" onClick={toggleMenu} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition">Akun</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
