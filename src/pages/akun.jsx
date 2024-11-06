import { useState } from 'react';

const AccountPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [documents]= useState([
    { 
      id: 1, 
      name: 'CV.pdf', 
      type: 'CV',
      uploadDate: '2024-01-15', 
      status: 'Verified',
      size: '2.4 MB' 
    },
    { 
      id: 2, 
      name: 'Transcript.pdf', 
      type: 'Academic Record',
      uploadDate: '2024-01-20', 
      status: 'Pending Review',
      size: '1.8 MB' 
    },
    { 
      id: 3, 
      name: 'Recommendation.pdf', 
      type: 'Recommendation Letter',
      uploadDate: '2024-02-01', 
      status: 'Verified',
      size: '1.2 MB' 
    }
  ]);

  const scholarships = {
    incoming: [
      { name: "LPDP Scholarship", deadline: "December 2024", value: "$50,000", status: "Pending" },
      { name: "Fulbright Scholarship", deadline: "January 2025", value: "$45,000", status: "Under Review" }
    ],
    selected: [
      { name: "Japan MEXT Scholarship", awardedOn: "Jan 2024", value: "$30,000", status: "Active" },
      { name: "Erasmus Mundus", awardedOn: "March 2024", value: "$25,000", status: "Active" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-2 sm:p-4 md:p-6 animate-fadeIn">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-4 animate-slideDown">
        <a 
          href="/home" 
          className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors group text-sm sm:text-base"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Kembali
        </a>
      </div>
      
      {/* Header */}
      <header className="max-w-7xl mx-auto bg-gradient-to-r from-orange-500 to-orange-600 
        text-white text-center py-6 sm:py-10 rounded-xl mb-4 sm:mb-8 shadow-xl animate-slideDown px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">Your Account</h1>
        <p className="text-lg sm:text-xl text-white/90">Manage your information and track your scholarships</p>
      </header>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 animate-slideUp px-2 sm:px-4">
        {/* Profile Section */}
        <section className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg transition-transform hover:shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Your Profile</h2>
          <div className="space-y-6">
            {['Name', 'Email', 'Phone'].map((field) => (
              <div key={field} className="group">
                <label className="block font-semibold text-gray-700 mb-2">{field}</label>
                <input
                  type={field === 'Email' ? 'email' : field === 'Phone' ? 'tel' : 'text'}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 
                    focus:border-orange-500 transition-all duration-300"
                  defaultValue={field === 'Name' ? 'John Doe' : 
                              field === 'Email' ? 'johndoe@example.com' : 
                              '+1234567890'}
                  disabled={!isEditing}
                />
              </div>
            ))}
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold
                transform transition-all duration-300 hover:bg-orange-600 hover:shadow-lg
                active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>
        </section>

        {/* Poster Section */}
        <section className="md:col-span-2 bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg group">
          <div className="relative overflow-hidden rounded-xl">
            <img 
              src="\src\assets\charapost.jpg" 
              alt="Scholarship Poster" 
              className="w-full h-48 sm:h-64 md:h-80 object-cover transform transition-transform duration-700 
                group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-white">Study in Japan</h3>
              <p className="text-white/90 text-sm sm:text-base">
                Explore various scholarships available to help you pursue your academic dreams in Japan!
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Scholarships Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 
        mt-4 sm:mt-6 md:mt-8 animate-slideUp px-2 sm:px-4" style={{ animationDelay: '200ms' }}>
        {['incoming', 'selected'].map((type) => (
          <section key={type} className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
              {type === 'incoming' ? 'Incoming Scholarships' : 'Selected Scholarships'}
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              {scholarships[type].map((scholarship, index) => (
                <li key={index} className="group bg-orange-50 p-4 sm:p-6 rounded-xl transition-all duration-300
                  hover:shadow-md hover:transform hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-1 sm:mb-2">
                        {scholarship.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {type === 'incoming' ? `Deadline: ${scholarship.deadline}` : 
                                             `Awarded on: ${scholarship.awardedOn}`}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Value: {scholarship.value}</p>
                    </div>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium
                      ${type === 'incoming' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}
                      self-start sm:self-auto`}>
                      {scholarship.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Documents Section */}
      <div className="max-w-7xl mx-auto mt-4 sm:mt-6 md:mt-8 animate-slideUp px-2 sm:px-4" 
        style={{ animationDelay: '300ms' }}>
        <section className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Supporting Documents</h2>
            <label className="relative group w-full sm:w-auto">
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                }}
              />
              <span className="inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 
                bg-orange-500 text-white rounded-lg cursor-pointer font-semibold transform 
                transition-all duration-300 hover:bg-orange-600 hover:shadow-lg active:scale-95">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                </svg>
                Upload Document
              </span>
            </label>
          </div>

          {/* Document Requirements */}
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-orange-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Required Documents:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1 text-xs sm:text-sm">
              <li>Curriculum Vitae (CV) - PDF format</li>
              <li>Academic Transcripts - PDF format</li>
              <li>Letters of Recommendation - PDF format</li>
              <li>Statement of Purpose - PDF/DOC format</li>
            </ul>
          </div>

          {/* Documents List */}
          <div className="space-y-3 sm:space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="group flex flex-col sm:flex-row items-start sm:items-center 
                justify-between p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-orange-50 
                transition-all duration-300 gap-3 sm:gap-0">
                <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
                  {/* Document Icon */}
                  <div className="p-2 bg-orange-100 rounded-lg shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" fill="none" stroke="currentColor" 
                      viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  
                  {/* Document Info */}
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base truncate">{doc.name}</h4>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                      <span>{doc.type}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{doc.size}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>Uploaded on {doc.uploadDate}</span>
                    </div>
                  </div>
                </div>

                {/* Status and Actions */}
                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto 
                  space-x-3 sm:space-x-4">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium
                    ${doc.status === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {doc.status}
                  </span>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-gray-500 hover:text-orange-600 transition-colors"
                      title="Download">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                      </svg>
                    </button>
                    <button className="p-2 text-gray-500 hover:text-red-600 transition-colors"
                      title="Delete">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AccountPage;
