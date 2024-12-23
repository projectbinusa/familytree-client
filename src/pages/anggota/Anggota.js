import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import user from "../../asset/user.png"; // Import user image
import { API_JUDUL2 } from "../../utils/BaseUrl"; // Import BaseUrl.js

function Anggota() {
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open
  const [anggotaList, setAnggotaList] = useState([]); // Store Anggota data
  const history = useHistory();

  const userData = JSON.parse(localStorage.getItem("userData"));
  const idJudul = userData ? userData.idJudul : null; // Get idJudul from the logged-in user's data

  // Fetch all Anggota by Judul
  const fetchAnggotaList = async () => {
    try {
      const response = await axios.get(`${API_JUDUL2}/anggota/all-by-judul/${idJudul}`);
      setAnggotaList(response.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  // Handle Delete Anggota
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This data will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${API_JUDUL2}/delete/${id}`);
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
          setAnggotaList(anggotaList.filter((item) => item.id !== id)); // Remove item from list after successful deletion
        } catch (error) {
          Swal.fire("Error!", "Failed to delete data.", "error");
        }
      }
    });
  };

  // Toggle dropdown visibility
  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index); // Toggle between open and close
  };

  const handleLogout = () => {
    // Perform logout logic (clear localStorage, etc.)
    localStorage.removeItem("userData");
    history.push("/login"); // Redirect to login page after logout
  };

  const handleProfile = () => {
    // Handle view profile logic
    history.push("/profile"); // Redirect to profile page
  };

  useEffect(() => {
    fetchAnggotaList();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar and Profile Dropdown */}
      <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <h1 className="text-2xl font-bold">Anggota</h1>
        <div className="relative">
          <button
            onClick={() => toggleDropdown("profile")}
            className="flex items-center space-x-2 border border-gray-300 rounded px-4 py-2 bg-white text-blue-500"
          >
            <span>Profile</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {dropdownOpen === "profile" && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <ul className="text-sm text-gray-700">
                <li className="hover:bg-gray-100">
                  <button
                    onClick={handleProfile}
                    className="block px-4 py-2 w-full text-left"
                  >
                    Profile
                  </button>
                </li>
                <li className="hover:bg-gray-100">
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 w-full text-left text-red-500"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Anggota List */}
      <div className="max-w-screen-xl mx-auto px-4 py-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {anggotaList.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 border border-gray-200 rounded shadow-md relative flex flex-col items-center"
          >
            {/* User Image */}
            <img
              src={user} // Path to the imported user image
              alt="User"
              className="rounded-full w-16 h-16 mb-4 cursor-pointer" // Small clickable image
              onClick={() => toggleDropdown(index)} // Show the options when clicked
            />
            <h3 className="text-lg font-bold mb-2">{item.nama}</h3>
            <button
              onClick={() => history.push(`/anggota/${item.id}`)} // Redirect to Anggota detail page
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-2"
            >
              Lihat Anggota
            </button>
            {/* Dropdown Menu */}
            {dropdownOpen === index && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <ul className="text-sm text-gray-700">
                  <li className="hover:bg-gray-100">
                    <button
                      onClick={() => history.push(`/anggota/edit/${item.id}`)} // Edit page
                      className="block px-4 py-2 w-full text-left"
                    >
                      Edit
                    </button>
                  </li>
                  <li className="hover:bg-gray-100">
                    <button
                      onClick={() => handleDelete(item.id)} // Delete action
                      className="block px-4 py-2 w-full text-left text-red-500"
                    >
                      Hapus
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Anggota;
