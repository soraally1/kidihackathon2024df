import './index.css';
import Navbar from './component/navbar.jsx';
import Regis from './component/regis.jsx';
import beasiswaImage from './assets/gencerpos.png';
import beasiswaA from './assets/beasiswaA.png';
import beasiswaB from './assets/beasiswaB.png';
import Artikel from './component/artikel.jsx';
import BeasiswaTerbaru from './component/beasiswa.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Main Poster Section */}
      <header id="home" className="relative">
        <img 
          src={beasiswaImage}
          alt="Poster Beasiswa"
          className="w-full h-64 object-cover px-5 py-5 rounded-3xl brightness-50"  
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white text-center">
          <h1 className="text-5xl font-bold md:text-6xl">GenCerdas</h1>
          <p className="text-lg md:text-xl mt-2">Temukan beasiswa yang sesuai untuk Anda</p>
        </div>
      </header>

      {/* Additional Posters Section */}
      <section id="beasiswa-pilihan" className="p-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Beasiswa Pilihan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Poster 1 */}
          <div className="relative">
            <img src={beasiswaA} alt="Beasiswa 1" className="w-full h-60 object-cover rounded-2xl shadow-lg" />
            <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
              <h3 className="text-2xl font-bold">Beasiswa A</h3>
              <p className="text-sm mt-1">Kesempatan mendapatkan beasiswa penuh untuk jenjang S1</p>
            </div>
          </div>
          {/* Poster 2 */}
          <div className="relative">
            <img src={beasiswaB} alt="Beasiswa 2" className="w-full h-60 object-cover rounded-2xl shadow-lg" />
            <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
              <h3 className="text-2xl font-bold">Beasiswa B</h3>
              <p className="text-sm mt-1">Program bantuan dana bagi mahasiswa berprestasi</p>
            </div>
          </div>
          {/* Poster 3 */}
          <div className="relative">
            <img src={beasiswaA} alt="Beasiswa 3" className="w-full h-60 object-cover rounded-2xl shadow-lg" />
            <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
              <h3 className="text-2xl font-bold">Beasiswa C</h3>
              <p className="text-sm mt-1">Beasiswa luar negeri untuk pelajar dan mahasiswa</p>
            </div>
          </div>
          <div className="relative">
            <img src={beasiswaA} alt="Beasiswa 1" className="w-full h-60 object-cover rounded-2xl shadow-lg" />
            <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
              <h3 className="text-2xl font-bold">Beasiswa A</h3>
              <p className="text-sm mt-1">Kesempatan mendapatkan beasiswa penuh untuk jenjang S1 ke jepang!</p>
            </div>
          </div>
          {/* Poster 2 */}
          <div className="relative">
            <img src={beasiswaB} alt="Beasiswa 2" className="w-full h-60 object-cover rounded-2xl shadow-lg" />
            <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
              <h3 className="text-2xl font-bold">Beasiswa B</h3>
              <p className="text-sm mt-1">Pelajar berprestasi schoolarship 2024</p>
            </div>
          </div>
          {/* Poster 3 */}
          <div className="relative">
            <img src={beasiswaA} alt="Beasiswa 3" className="w-full h-60 object-cover rounded-2xl shadow-lg" />
            <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
              <h3 className="text-2xl font-bold">Beasiswa C</h3>
              <p className="text-sm mt-1">Bantuan beasiswa untuk pelajar SMK</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Search Section */}
      <section id="filter-pencarian" className="mt-4 p-6 text-center">
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

      {/* Main Content */}
      <main id="beasiswa-terbaru" className="flex-grow p-6">
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

      {/* Footer */}
      <footer className="bg-yellow-600 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} GenCerdas. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
