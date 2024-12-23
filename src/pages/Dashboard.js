import React, { useState } from "react";

function Dashboard() {
  const [file, setFile] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleFileUpload = () => {
    if (file) {
      console.log("File ready for upload:", file);
    } else {
      alert("Please select a file first.");
    }
  };

  // Toggle the visibility of the dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-white min-h-screen">
      <nav className="bg-gray-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Delete Button */}
            <button
              className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 shadow-md"
              title="Delete"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Download Button */}
            <button
              className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-md"
              title="Download"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v4m0 0h16m-16 0l4-4m12 4l-4-4m-8-8V4m0 0h8m-8 0L4 8m16-4L12 8"
                />
              </svg>
            </button>
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="inline-flex items-center p-3 text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none"
              title="Menu"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 rounded-lg shadow-lg">
                <table className="w-full">
                  <tbody className="text-sm text-gray-700">
                    <tr className="hover:bg-gray-100">
                      <td className="px-4 py-2">
                        <a href="/Profile" className="block">
                          Profile
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-4 py-2">
                        <a href="/Home" className="block">
                          Logout
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <button
          onClick={() => document.getElementById("file-input").click()}
          className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 shadow-md"
          title="Create New Data"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>

        <input
          id="file-input"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {file && (
        <div className="max-w-screen-xl mx-auto px-4 py-3">
          <p>Selected file: {file.name}</p>
          <button
            onClick={handleFileUpload}
            className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-md"
            title="Upload File"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v4m0 0h16m-16 0l4-4m12 4l-4-4"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
