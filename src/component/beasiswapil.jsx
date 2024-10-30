// BeasiswaPil.jsx
import beasiswaA from '../assets/beasiswaA.png';
import beasiswaB from '../assets/beasiswaB.png';

const BeasiswaPil = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative">
        {/* Top Orange Section */}
        <div className="bg-orange-500 w-full h-1/2 absolute top-0"></div>
        
        {/* White Box Overlapping Both Backgrounds */}
        <div className="relative z-10 bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full mt-40">
          <section id="beasiswa-pilihan" className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-2 text-gray-800">Beasiswa Pilihan</h2>
            <h1 className="text-l font-light text-center mb-8 text-gray-800">Beasiswa Pilihan menghadirkan berbagai beasiswa unggulan dengan informasi lengkap untuk membantu Anda menemukan peluang pendidikan terbaik sesuai minat dan jenjang. Temukan beasiswa pilihan yang dapat membantu Anda meraih cita-cita dan mengembangkan potensi diri dengan dukungan finansial dan pengalaman belajar yang berharga.</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Poster 1 */}
              <div className="relative transform transition duration-300 ease-in-out hover:-translate-y-2 shadow-lg rounded-xl overflow-hidden bg-white">
                <img src={beasiswaA} alt="Beasiswa A" className="w-full h-60 object-cover" />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                  <h3 className="text-2xl font-bold">Beasiswa A</h3>
                  <p className="text-sm mt-2">Kesempatan mendapatkan beasiswa penuh untuk jenjang S1</p>
                </div>
              </div>
              {/* Poster 2 */}
              <div className="relative transform transition duration-300 ease-in-out hover:-translate-y-2 shadow-lg rounded-xl overflow-hidden bg-white">
                <img src={beasiswaB} alt="Beasiswa B" className="w-full h-60 object-cover" />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                  <h3 className="text-2xl font-bold">Beasiswa B</h3>
                  <p className="text-sm mt-2">Program bantuan dana bagi mahasiswa berprestasi</p>
                </div>
              </div>
              {/* Poster 3 */}
              <div className="relative transform transition duration-300 ease-in-out hover:-translate-y-2 shadow-lg rounded-xl overflow-hidden bg-white">
                <img src={beasiswaA} alt="Beasiswa C" className="w-full h-60 object-cover" />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                  <h3 className="text-2xl font-bold">Beasiswa C</h3>
                  <p className="text-sm mt-2">Beasiswa luar negeri untuk pelajar dan mahasiswa</p>
                </div>
              </div>
            </div>
          </section>
        </div>
  
        {/* Bottom White Section */}
        <div className="bg-white w-full h-1/2 absolute bottom-0"></div>
      </div>
    );
  };
  
  export default BeasiswaPil;
