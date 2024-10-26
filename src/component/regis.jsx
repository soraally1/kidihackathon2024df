const Regis = () => {
  return (
    <section className="mt-10">
      <h2 className="text-3xl font-semibold mb-4">Form Pendaftaran Beasiswa</h2>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nama Lengkap</label>
          <input
            type="text"
            id="name"
            placeholder="Masukkan nama lengkap"
            className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Masukkan email"
            className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Kategori SMA/SMK */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="kategori">Kategori</label>
          <select
            id="kategori"
            className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Pilih Kategori</option>
            <option value="SMA">SMA</option>
            <option value="SMK">SMK</option>
          </select>
        </div>

        {/* Umur */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">Umur</label>
          <input
            type="number"
            id="age"
            placeholder="Masukkan umur"
            className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Asal Sekolah */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="school">Asal Sekolah</label>
          <input
            type="text"
            id="school"
            placeholder="Masukkan asal sekolah"
            className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="scholarship">Pilih Beasiswa</label>
          <select
            id="scholarship"
            className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Pilih Beasiswa</option>
            <option value="beasiswaA">Beasiswa A</option>
            <option value="beasiswaB">Beasiswa B</option>
            <option value="beasiswaC">Beasiswa C</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Pesan</label>
          <textarea
            id="message"
            placeholder="Tulis pesan atau pertanyaan"
            className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>
        
        <button className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200" type="submit">
          Daftar
        </button>
      </form>
    </section>
  );
};

export default Regis;
