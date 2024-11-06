// BeasiswaPil.jsx
import beasiswaA from '../assets/beasiswaA.png';
import beasiswaB from '../assets/beasiswaB.png';

const scholarships = [
  {
    id: 1,
    title: "Beasiswa LPDP",
    image: beasiswaA,
    description: "Kesempatan mendapatkan beasiswa penuh untuk jenjang S1",
    details: {
      provider: "Kemenkeu RI",
      value: "Full Coverage",
      duration: "4 Tahun"
    }
  },
  {
    id: 2,
    title: "Beasiswa Unggulan",
    image: beasiswaB,
    description: "Program bantuan dana bagi mahasiswa berprestasi",
    details: {
      provider: "Kemendikbud",
      value: "Rp 12jt/semester",
      duration: "8 Semester"
    }
  },
  {
    id: 3,
    title: "Beasiswa IISMA",
    image: beasiswaA,
    description: "Beasiswa luar negeri untuk pelajar dan mahasiswa",
    details: {
      provider: "Kampus Merdeka",
      value: "Full Coverage",
      duration: "1 Semester"
    }
  }
];

const BeasiswaPil = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-orange-500 via-orange-400 to-white">
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header Section with Animation */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Beasiswa Pilihan
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed animate-slideUp">
            Beasiswa Pilihan menghadirkan berbagai beasiswa unggulan dengan informasi lengkap 
            untuk membantu Anda menemukan peluang pendidikan terbaik sesuai minat dan jenjang.
          </p>
        </div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map((scholarship, index) => (
            <div
              key={scholarship.id}
              className="group animate-slideUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white 
                transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={scholarship.image} 
                    alt={scholarship.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 transition-opacity duration-300"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {scholarship.details.provider}
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 
                  transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold mb-2">{scholarship.title}</h3>
                  <p className="text-white/90 mb-4">{scholarship.description}</p>
                  
                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4 opacity-0 transform translate-y-4 
                    transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <div>
                      <p className="text-white/70 text-sm">Nilai Beasiswa</p>
                      <p className="font-semibold">{scholarship.details.value}</p>
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Durasi</p>
                      <p className="font-semibold">{scholarship.details.duration}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-white text-orange-500 py-2 rounded-lg font-semibold 
                    transform opacity-0 translate-y-4 transition-all duration-500 
                    group-hover:opacity-100 group-hover:translate-y-0 hover:bg-orange-50">
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeasiswaPil;
