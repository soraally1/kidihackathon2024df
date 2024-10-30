const ArtikelPage = () => {
  return (
    
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="px-4 py-4 my-5 bg-transparent">
        <a href="/home" className="text-lg">Kembali</a>
      </div>
      {/* Gambar Poster */}
      <div className="mb-6">
        <img 
          src="src/assets/postergen.png" 
          alt="Program Beasiswa Jepang" 
          className="w-full h-64 object-cover rounded-lg shadow-md" 
        />
      </div>
      
      {/* Judul dan Tanggal */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Studi di Jepang: Program Beasiswa Penuh</h1>
      <div className="text-sm text-gray-500 mb-4">30 Oktober 2024 | oleh GenCerdas</div>

      {/* Konten */}
      <div className="text-gray-700 leading-relaxed">
        <p className="mb-4">
          Bermimpi untuk belajar di Jepang? Program beasiswa penuh ini menyediakan kesempatan luar biasa untuk merasakan budaya Jepang sekaligus melanjutkan pendidikan Anda. Penerima beasiswa akan mengunjungi universitas ternama, menjelajahi tempat-tempat bersejarah, dan mendapatkan wawasan mendalam tentang salah satu sistem pendidikan termaju di dunia.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Kriteria Kelulusan</h2>
        <p className="mb-4">
          Beasiswa ini terbuka untuk siswa berprestasi dari semua latar belakang. Kandidat harus memiliki catatan akademik yang kuat, menunjukkan kemampuan kepemimpinan, dan memiliki minat besar terhadap budaya dan akademik Jepang. Berikut persyaratan untuk memenuhi syarat:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>IPK minimal 3,5</li>
          <li>Kemampuan bahasa Inggris atau Jepang</li>
          <li>Surat rekomendasi dari seorang dosen atau guru</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Manfaat Beasiswa</h2>
        <p className="mb-4">
          Program beasiswa Jepang ini dirancang untuk mendukung siswa baik secara finansial maupun akademis. Penerima yang berhasil akan mendapatkan:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Pembebasan biaya kuliah 100% untuk program yang dipilih</li>
          <li>Tunjangan biaya hidup bulanan</li>
          <li>Tiket pulang-pergi ke Jepang</li>
          <li>Kunjungan budaya ke Shibuya, Fushimi Inari, dan destinasi lainnya</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Proses Pendaftaran</h2>
        <p className="mb-4">
          Pendaftaran sudah dibuka! Kirimkan formulir pendaftaran Anda yang telah diisi lengkap, beserta dokumen yang dibutuhkan, sebelum akhir bulan ini. Jangan lewatkan kesempatan untuk mewujudkan impian studi Anda di Jepang!
        </p>
      </div>
    </div>
  );
};

export default ArtikelPage;
