const ArtikelPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Back Button */}
        <div className="mb-8 animate-fadeIn">
          <a 
            href="/home" 
            className="inline-flex items-center px-4 py-2 text-lg text-orange-600 hover:text-orange-700 transition-colors group"
          >
            <svg 
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Kembali
          </a>
        </div>

        {/* Hero Image */}
        <div className="mb-8 animate-slideDown">
          <img 
            src="src/assets/postergen.png" 
            alt="Program Beasiswa Jepang" 
            className="w-full h-[400px] object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300" 
          />
        </div>
        
        {/* Title and Date */}
        <div className="mb-8 animate-slideUp">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Studi di Jepang: Program Beasiswa Penuh
          </h1>
          <div className="flex items-center text-gray-500 space-x-4">
            <span className="text-sm bg-orange-100 px-3 py-1 rounded-full">30 Oktober 2024</span>
            <span className="text-sm">oleh</span>
            <span className="text-sm font-medium text-orange-600">GenCerdas</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none animate-fadeIn">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Bermimpi untuk belajar di Jepang? Program beasiswa penuh ini menyediakan kesempatan luar biasa untuk merasakan budaya Jepang sekaligus melanjutkan pendidikan Anda. Penerima beasiswa akan mengunjungi universitas ternama, menjelajahi tempat-tempat bersejarah, dan mendapatkan wawasan mendalam tentang salah satu sistem pendidikan termaju di dunia.
          </p>
          
          {/* Sections */}
          {['Kriteria Kelulusan', 'Manfaat Beasiswa', 'Proses Pendaftaran'].map((section, index) => (
            <div key={section} className="mb-10 hover:transform hover:scale-[1.01] transition-transform">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-orange-500 mr-2">{index + 1}.</span>
                {section}
              </h2>
              {section === 'Kriteria Kelulusan' && (
                <>
                  <p className="text-gray-700 mb-4">
                    Beasiswa ini terbuka untuk siswa berprestasi dari semua latar belakang. Kandidat harus memiliki catatan akademik yang kuat, menunjukkan kemampuan kepemimpinan, dan memiliki minat besar terhadap budaya dan akademik Jepang. Berikut persyaratan untuk memenuhi syarat:
                  </p>
                  <ul className="bg-orange-50 rounded-xl p-6 space-y-3">
                    <li className="flex items-center text-gray-700">
                      <span className="text-orange-500 mr-3">•</span>
                      IPK minimal 3,5
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-orange-500 mr-3">•</span>
                      Kemampuan bahasa Inggris atau Jepang
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-orange-500 mr-3">•</span>
                      Surat rekomendasi dari seorang dosen atau guru
                    </li>
                  </ul>
                </>
              )}
              {section === 'Manfaat Beasiswa' && (
                <>
                  <p className="text-gray-700 mb-4">
                    Program beasiswa Jepang ini dirancang untuk mendukung siswa baik secara finansial maupun akademis. Penerima yang berhasil akan mendapatkan:
                  </p>
                  <ul className="bg-orange-50 rounded-xl p-6 space-y-3">
                    <li className="flex items-center text-gray-700">
                      <span className="text-orange-500 mr-3">•</span>
                      Pembebasan biaya kuliah 100% untuk program yang dipilih
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-orange-500 mr-3">•</span>
                      Tunjangan biaya hidup bulanan
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-orange-500 mr-3">•</span>
                      Tiket pulang-pergi ke Jepang
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-orange-500 mr-3">•</span>
                      Kunjungan budaya ke Shibuya, Fushimi Inari, dan destinasi lainnya
                    </li>
                  </ul>
                </>
              )}
              {section === 'Proses Pendaftaran' && (
                <div className="bg-orange-100 rounded-xl p-6">
                  <p className="text-gray-700">
                    Pendaftaran sudah dibuka! Kirimkan formulir pendaftaran Anda yang telah diisi lengkap, beserta dokumen yang dibutuhkan, sebelum akhir bulan ini. Jangan lewatkan kesempatan untuk mewujudkan impian studi Anda di Jepang!
                  </p>
                  <button className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105">
                    Daftar Sekarang
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtikelPage;
