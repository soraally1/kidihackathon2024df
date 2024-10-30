import posterImage from '../assets/poster2.png';

const articles = [
  {
    id: 1,
    title: "Panduan Lengkap untuk Mendapatkan Beasiswa",
    description: "Tips dan trik untuk mendapatkan beasiswa baik di dalam maupun luar negeri. Pelajari langkah-langkah penting yang harus Anda persiapkan.",
    link: "/artikel/beasiswa-panduan"
  },
  {
    id: 2,
    title: "Jenis-Jenis Beasiswa yang Tersedia di Indonesia",
    description: "Temukan berbagai jenis beasiswa yang bisa Anda ajukan di Indonesia, mulai dari beasiswa pemerintah hingga swasta.",
    link: "/artikel/jenis-beasiswa"
  },
  {
    id: 3,
    title: "Cara Meningkatkan Peluang Mendapatkan Beasiswa",
    description: "Pahami cara untuk memperbesar peluang Anda dalam mendapatkan beasiswa dengan strategi yang tepat.",
    link: "/artikel/meningkatkan-peluang"
  }
];

const Artikel = () => {
  return (
    <section className="p-6 bg-orange-400 rounded-lg">
      {/* Poster Section */}
      <div className="relative mb-8">
        <img 
          src={posterImage} 
          alt="Poster Beasiswa" 
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div> {/* Dark overlay for contrast */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h2 className="text-4xl font-bold">Artikel Beasiswa</h2>
          <p className="text-lg mt-2">Informasi terkini tentang berbagai beasiswa</p>
        </div>
      </div>
      
      {/* Articles Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="font-bold text-xl mb-2">{article.title}</h3>
            <p className="text-gray-700 mb-4">{article.description}</p>
            <a href="/artikel" className="text-blue-600 hover:underline">
              Baca selengkapnya &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artikel;
