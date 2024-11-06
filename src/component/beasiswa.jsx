import beasiswaA from '../assets/beasiswaA.png';
import beasiswaB from '../assets/beasiswaB.png';

const scholarships = [
  {
    id: 1,
    title: "Beasiswa LPDP",
    description: "Program beasiswa prestisius dari pemerintah Indonesia untuk pendidikan pascasarjana dalam dan luar negeri.",
    longDescription: "Beasiswa LPDP menyediakan pendanaan penuh termasuk biaya kuliah, biaya hidup, asuransi kesehatan, dan tunjangan keluarga. Program ini terbuka untuk berbagai bidang studi prioritas.",
    deadline: "31 Desember 2024",
    provider: "Kementerian Keuangan RI",
    coverage: ["Biaya Kuliah", "Biaya Hidup", "Asuransi", "Tunjangan Buku"],
    requirements: ["IPK min. 3.0", "Usia max. 35 tahun", "Komitmen kembali ke Indonesia"],
    image: beasiswaA,
  },
  {
    id: 2,
    title: "Beasiswa Unggulan",
    description: "Beasiswa komprehensif untuk mahasiswa berprestasi yang ingin melanjutkan studi di universitas terkemuka.",
    longDescription: "Program beasiswa yang ditujukan untuk mahasiswa dengan prestasi akademik dan non-akademik yang luar biasa. Mencakup berbagai jenjang pendidikan dari S1 hingga S3.",
    deadline: "31 Januari 2024",
    provider: "Kemendikbudristek",
    coverage: ["Biaya Pendidikan", "Uang Saku", "Penelitian", "Transport"],
    requirements: ["IPK min. 3.5", "Aktif berorganisasi", "Prestasi nasional/internasional"],
    image: beasiswaB,
  },
  {
    id: 3,
    title: "Beasiswa Djarum",
    description: "Program beasiswa plus pengembangan soft skill untuk mahasiswa semester 4-6 dari berbagai universitas di Indonesia.",
    longDescription: "Selain bantuan biaya pendidikan, penerima beasiswa akan mendapatkan berbagai pelatihan soft skill dan kesempatan networking dengan ribuan alumni sukses.",
    deadline: "28 Februari 2024",
    provider: "Djarum Foundation",
    coverage: ["Dana Pendidikan", "Pelatihan Soft Skill", "Community Development", "Leadership Camp"],
    requirements: ["IPK min. 3.2", "Semester 4-6", "Aktif berorganisasi"],
    image: beasiswaA,
  },
];

const BeasiswaTerbaru = () => {
  return (
    <main className="flex-grow p-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl">
      <section className="animate-fadeIn">
        <h2 className="text-4xl font-bold mb-8 text-center text-white drop-shadow-lg">
          Beasiswa Terbaru
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map((scholarship, index) => (
            <div
              key={scholarship.id}
              className="group bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slideUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={scholarship.image}
                  alt={`Poster ${scholarship.title}`}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                  {scholarship.provider}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-2xl text-gray-800 mb-3 group-hover:text-orange-500 transition-colors">
                  {scholarship.title}
                </h3>
                <p className="text-gray-600 mb-4">{scholarship.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Cakupan Beasiswa:</h4>
                  <div className="flex flex-wrap gap-2">
                    {scholarship.coverage.map((item, i) => (
                      <span key={i} className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Persyaratan Utama:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm">
                    {scholarship.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
                    </svg>
                    <span className="text-sm text-gray-500">Deadline: {scholarship.deadline}</span>
                  </div>
                  <button className="bg-orange-500 text-white py-2 px-6 rounded-lg font-semibold 
                    hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 
                    focus:ring-2 focus:ring-orange-300 focus:outline-none">
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BeasiswaTerbaru;
