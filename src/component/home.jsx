import '../index.css';
import Navbar from './navbar.jsx';
import Regis from './regis.jsx';
import beasiswaImage from '../assets/gencerpos.png';
import Artikel from './artikel.jsx';
import BeasiswaTerbaru from './beasiswa.jsx';
import BeasiswaPil from './beasiswapil.jsx';

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col fade-in-up">
      <div className="bg-orange-500 pb-10 fade-in-up">
        <Navbar />
        {/* Main Poster Section */}
        <header id="home" className="relative fade-in-up">
          <img 
            src={beasiswaImage}
            alt="Poster Beasiswa"
            className="w-full h-64 object-cover px-5 py-5 rounded-3xl brightness-50 fade-in-up"  
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white text-center fade-in-up">
            <h1 className="text-5xl font-bold md:text-6xl">GenCerdas</h1>
            <p className="text-lg md:text-xl mt-2">Temukan beasiswa yang sesuai untuk Anda</p>
          </div>
        </header>
        <div className="flex justify-center mt-8 fade-in-up">
          <button className="bg-white px-6 py-3 font-semibold text-orange-500 rounded-xl shadow-lg hover:bg-orange-500 hover:text-white transition duration-200">
            Mulai Sekarang!
          </button>
        </div>
      </div>
      
      {/* Other Sections */}
      <div className="fade-in-up">
        <BeasiswaPil />
      </div>

      <section id="filter-pencarian" className="mt-4 p-6 text-center fade-in-up">
        <h2 className="text-3xl font-semibold mb-4">Filter Pencarian Beasiswa</h2>
        <div className="flex flex-col md:flex-row md:space-x-4 justify-center">
          <input
            type="text"
            placeholder="Cari Beasiswa..."
            className="p-3 border border-gray-300 rounded-md w-full md:w-1/2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <button className="mt-4 md:mt-0 bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-700 transition duration-200">Cari</button>
        </div>
      </section>

      <main id="beasiswa-terbaru" className="flex-grow p-6 fade-in-up">
        <section>
          <BeasiswaTerbaru />
        </section>
        <section id="registrasi">
          <Regis />
        </section>
        <section id="artikel">
          <Artikel />
        </section>
      </main>

      <footer className="bg-yellow-600 text-white py-8 fade-in-up">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-3xl font-extrabold">GenCerdas</h2>
            <p className="mt-2 text-sm">
              Empowering the future through digital innovation and smart solutions. Join us in building a brighter tomorrow.
            </p>
          </div>
          <div className="md:w-1/3 text-sm mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <p className="mt-2 flex items-center">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="..." /></svg>
              <a href="mailto:info@gencerdas.com" className="underline">info@gencerdas.com</a>
            </p>
            <p className="flex items-center mt-1">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="..." /></svg>
              +1 (234) 567-8901
            </p>
          </div>
        </div>
        <div className="text-center mt-8 text-sm">
          <p>&copy; {new Date().getFullYear()} GenCerdas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
