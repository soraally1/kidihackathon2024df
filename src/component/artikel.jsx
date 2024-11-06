import posterImage from '../assets/poster2.png';

const articles = [
  {
    id: 1,
    title: "Panduan Lengkap untuk Mendapatkan Beasiswa",
    description: "Tips dan trik untuk mendapatkan beasiswa baik di dalam maupun luar negeri. Pelajari langkah-langkah penting yang harus Anda persiapkan.",
    link: "/artikel"
  },
  {
    id: 2,
    title: "Jenis-Jenis Beasiswa yang Tersedia di Indonesia",
    description: "Temukan berbagai jenis beasiswa yang bisa Anda ajukan di Indonesia, mulai dari beasiswa pemerintah hingga swasta.",
    link: "/artikel"
  },
  {
    id: 3,
    title: "Cara Meningkatkan Peluang Mendapatkan Beasiswa",
    description: "Pahami cara untuk memperbesar peluang Anda dalam mendapatkan beasiswa dengan strategi yang tepat.",
    link: "/artikel"
  }
];

const Artikel = () => {
  return (
    <section className="p-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl shadow-2xl max-w-7xl mx-auto my-8">
      {/* Poster Section */}
      <div className="relative mb-12 transform hover:scale-[1.02] transition-transform duration-300">
        <img 
          src={posterImage} 
          alt="Poster Beasiswa" 
          className="w-full h-80 object-cover rounded-xl shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 rounded-xl"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
          <h2 className="text-5xl font-bold mb-3 text-shadow">Artikel Beasiswa</h2>
          <p className="text-xl mt-2 max-w-2xl text-shadow-sm">Informasi terkini tentang berbagai beasiswa untuk masa depan cerahmu</p>
        </div>
      </div>
      
      {/* Articles Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div 
            key={article.id} 
            className="bg-white p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
          >
            <h3 className="font-bold text-2xl mb-3 text-gray-800 group-hover:text-orange-500 transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {article.description}
            </p>
            <a 
              href={article.link} 
              className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              Baca selengkapnya 
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artikel;
