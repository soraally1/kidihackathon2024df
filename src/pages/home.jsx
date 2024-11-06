import '../index.css';
import Navbar from '../component/navbar.jsx';
import Regis from '../component/regis.jsx';
import beasiswaImage from '../assets/gencerpos.png';
import Artikel from '../component/artikel.jsx';
import BeasiswaTerbaru from '../component/beasiswa.jsx';
import BeasiswaPil from '../component/beasiswapil.jsx';
import { useState } from 'react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    education: '',
    country: '',
    field: ''
  });
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const educationFilters = [
    { id: 'all', label: 'Semua' },
    { id: 'undergraduate', label: 'S1' },
    { id: 'graduate', label: 'S2' },
    { id: 'doctorate', label: 'S3' },
    { id: 'research', label: 'Riset' }
  ];

  const scrollToBeasiswaPil = () => {
    const element = document.getElementById('beasiswa-pilihan');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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
          <button 
            onClick={scrollToBeasiswaPil}
            className="bg-white px-6 py-3 font-semibold text-orange-500 rounded-xl shadow-lg 
              hover:bg-orange-500 hover:text-white transition-all duration-300 
              transform hover:scale-105 active:scale-95 
              hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Mulai Sekarang!
          </button>
        </div>
      </div>
      
      {/* Other Sections */}
      <div id="beasiswa-pilihan" className="fade-in-up">
        <BeasiswaPil />
      </div>

      <section id="filter-pencarian" 
        className="mt-8 p-6 md:p-10 text-center bg-white rounded-2xl shadow-lg
          transform hover:shadow-xl transition-all duration-300 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 relative inline-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2
            animate-fadeIn relative z-10">
            Filter Pencarian Beasiswa
          </h2>
          <div className="absolute -bottom-2 left-0 w-full h-2 bg-orange-500/20 
            transform -skew-x-12"></div>
        </div>

        <p className="text-gray-600 mb-8 animate-fadeIn" style={{ animationDelay: '200ms' }}>
          Temukan beasiswa yang sesuai dengan kebutuhan Anda
        </p>

        {/* Search Section */}
        <div className="space-y-6 animate-slideUp" style={{ animationDelay: '400ms' }}>
          {/* Main Search Bar */}
          <div className="flex flex-col md:flex-row items-stretch gap-4 max-w-3xl mx-auto">
            <div className="relative flex-grow group">
              <input
                type="text"
                placeholder="Cari Beasiswa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-12 py-4 bg-white border-2 border-gray-200 rounded-xl
                  shadow-sm placeholder-gray-400 text-gray-800 text-lg
                  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
                  transition-all duration-300 group-hover:border-orange-300"
              />
              {/* Search Icon */}
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2
                text-gray-400 group-hover:text-orange-500 transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              {/* Clear Button */}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2
                    text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            <button className="px-8 py-4 bg-orange-500 text-white rounded-xl
              font-semibold transform transition-all duration-300 flex items-center justify-center
              hover:bg-orange-600 hover:shadow-lg hover:scale-105 active:scale-95
              focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
              min-w-[160px] group">
              <span>Cari</span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Advanced Filters Toggle */}
          <button
            onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
            className="flex items-center justify-center space-x-2 text-gray-600 
              hover:text-orange-500 transition-colors duration-300 mx-auto"
          >
            <span className="text-sm font-medium">Filter Lanjutan</span>
            <svg
              className={`w-4 h-4 transform transition-transform duration-300 
                ${isAdvancedOpen ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Advanced Filters */}
          <div className={`transition-all duration-500 ease-in-out overflow-hidden
            ${isAdvancedOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-2xl">
              {[
                {
                  label: 'Jenjang Pendidikan',
                  name: 'education',
                  options: ['S1', 'S2', 'S3', 'Non-Gelar']
                },
                {
                  label: 'Negara Tujuan',
                  name: 'country',
                  options: ['Japan', 'Korea', 'Germany', 'USA', 'UK', 'Australia']
                },
                {
                  label: 'Bidang Studi',
                  name: 'field',
                  options: ['Engineering', 'Medical', 'Business', 'Art', 'Science']
                }
              ].map((filter) => (
                <div key={educationFilters.name} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    {educationFilters.label}
                  </label>
                  <select
                    value={filters[educationFilters.name]}
                    onChange={(e) => setFilters({...filters, [filter.name]: e.target.value})}
                    className="w-full p-3 bg-white border-2 border-gray-200 rounded-xl
                      focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
                      transition-all duration-300 hover:border-orange-300
                      appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23999999'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.5em 1.5em'
                    }}
                  >
                    <option value="">Pilih {filter.label}</option>
                    {filter.options.map((option) => (
                      <option key={option} value={option.toLowerCase()}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>

          {/* Active Filters */}
          {Object.values(filters).some(Boolean) && (
            <div className="flex flex-wrap gap-2 mt-4 animate-fadeIn">
              {Object.entries(filters).map(([key, value]) => value && (
                <span key={key} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm
                    bg-orange-100 text-orange-600 group"
                >
                  {value}
                  <button
                    onClick={() => setFilters({...filters, [key]: ''})}
                    className="ml-2 text-orange-400 hover:text-orange-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Search Results Preview */}
          {searchQuery && (
            <div className="mt-8 text-left animate-fadeIn">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Hasil Pencarian untuk "{searchQuery}"
              </h3>
              {/* Add your search results here */}
            </div>
          )}
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
