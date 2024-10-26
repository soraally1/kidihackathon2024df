const AccountDashboard = () => {
  return (
    <div className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold mb-6">Dashboard Akun</h1>

      {/* Profile Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Informasi Profil</h2>
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-gray-700"><strong>Nama:</strong> John Doe</p>
          <p className="text-gray-700"><strong>Email:</strong> johndoe@example.com</p>
          <p className="text-gray-700"><strong>Asal Sekolah:</strong> SMA Negeri 1</p>
          <p className="text-gray-700"><strong>Umur:</strong> 17 Tahun</p>
        </div>
      </section>

      {/* Recent Activities Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Aktivitas Terbaru</h2>
        <ul className="list-disc list-inside bg-gray-100 p-4 rounded-md">
          <li className="text-gray-700">Mendaftar Beasiswa A - 15 Oktober 2024</li>
          <li className="text-gray-700">Mengubah informasi akun - 10 Oktober 2024</li>
        </ul>
      </section>

      {/* Settings Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pengaturan Akun</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
          Ubah Profil
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200 ml-4">
          Keluar
        </button>
      </section>
    </div>
  );
};

export default AccountDashboard;
