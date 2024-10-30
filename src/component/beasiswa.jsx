import beasiswaA from '../assets/beasiswaA.png';
import beasiswaB from '../assets/beasiswaB.png';

const scholarships = [
  {
    id: 1,
    title: "Beasiswa A",
    description: "Deskripsi singkat tentang Beasiswa A. Ini adalah beasiswa yang sangat bermanfaat bagi mahasiswa.",
    deadline: "31 Desember 2022",
    image: beasiswaA,
  },
  {
    id: 2,
    title: "Beasiswa B",
    description: "Deskripsi singkat tentang Beasiswa B. Ini adalah beasiswa yang sangat bermanfaat bagi mahasiswa.",
    deadline: "31 Januari 2023",
    image: beasiswaB,
  },
  {
    id: 3,
    title: "Beasiswa C",
    description: "Deskripsi singkat tentang Beasiswa C. Ini adalah beasiswa yang sangat bermanfaat bagi mahasiswa.",
    deadline: "28 Februari 2023",
    image: beasiswaA,
  },
];

const BeasiswaTerbaru = () => {
  return (
    <main className="flex-grow p-7 bg-orange-400 rounded-lg">
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center text-white">Beasiswa Terbaru</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map((scholarship) => (
            <div
              key={scholarship.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={scholarship.image}
                alt={`Poster ${scholarship.title}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-2xl text-gray-800 mb-3">{scholarship.title}</h3>
                <p className="text-gray-600 mb-4">{scholarship.description}</p>
                <p className="text-sm text-gray-500 mb-2">Deadline: {scholarship.deadline}</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BeasiswaTerbaru;
