const AccountPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="px-4 py-4 my-5 bg-transparent">
        <a href="/home" className="text-lg">Kembali</a>
      </div>
      
      {/* Header */}
      <header className="bg-orange-500 text-white text-center py-6 rounded-lg mb-8">
        <h1 className="text-4xl font-bold">Your Account</h1>
        <p className="mt-2 text-lg">Manage your information and track your scholarships</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Information and Description */}
        <section className="bg-white p-6 rounded-lg shadow-md md:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-700">Name</label>
              <input
                type="text"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-orange-500"
                defaultValue="John Doe"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-orange-500"
                defaultValue="johndoe@example.com"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">Phone</label>
              <input
                type="tel"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-orange-500"
                defaultValue="+1234567890"
              />
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md shadow hover:bg-orange-600 transition duration-200 w-full mt-4">
              Update Information
            </button>
          </div>
        </section>

        {/* Poster Section */}
        <section className="md:col-span-2 bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <img 
            src="\src\assets\charapost.jpg" 
            alt="Scholarship Poster" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
          />
          <p className="text-center text-gray-700 text-lg">
            Explore various scholarships available to help you pursue your academic dreams in Japan!
          </p>
        </section>
      </div>

      {/* Scholarships Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Incoming Scholarships */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Incoming Scholarships</h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-bold">Scholarship Name 3</h3>
              <p className="text-sm text-gray-600">Deadline: December 2024</p>
            </li>
            <li className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-bold">Scholarship Name 4</h3>
              <p className="text-sm text-gray-600">Deadline: January 2025</p>
            </li>
            {/* Add more incoming scholarships as needed */}
          </ul>
        </section>

        {/* Selected or Registered Scholarships */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Selected or Registered Scholarships</h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-bold">Scholarship Name 1</h3>
              <p className="text-sm text-gray-600">Awarded on: Jan 2024</p>
            </li>
            <li className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-bold">Scholarship Name 2</h3>
              <p className="text-sm text-gray-600">Awarded on: March 2024</p>
            </li>
            {/* Add more selected or registered scholarships as needed */}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AccountPage;
