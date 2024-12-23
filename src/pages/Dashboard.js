import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { API_JUDUL } from "../utils/BaseUrl"; // Import BaseUrl.js

function Dashboard() {
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false); // State for Edit Modal
  const [judulList, setJudulList] = useState([]);
  const [judulData, setJudulData] = useState({ judulKeluarga: "" });
  const [editJudulData, setEditJudulData] = useState({ judulKeluarga: "" }); // State for editing
  const [selectedJudulId, setSelectedJudulId] = useState(null); // To store the ID of the selected item for editing
  const history = useHistory();

  const userData = JSON.parse(localStorage.getItem("userData"));
  const idAdmin = userData ? userData.id : null; // Ensure idAdmin is coming from the logged-in user's data, default to 1

  // Fetch all Judul by Admin
  const fetchJudulList = async () => {
    try {
      const response = await axios.get(`${API_JUDUL}/all-by-admin/${idAdmin}`);
      setJudulList(response.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  // Open Add Modal
  const openModal = () => setModalOpen(true);

  // Open Edit Modal
  const openEditModal = (id, judulKeluarga) => {
    setSelectedJudulId(id); // Set the ID of the selected judul
    setEditJudulData({ judulKeluarga });
    setEditModalOpen(true);
  };

  // Close Modal
  const closeModal = () => setModalOpen(false);
  const closeEditModal = () => setEditModalOpen(false);

  // Handle Add Judul submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_JUDUL}/tambahByIdAdmin/${idAdmin}`, judulData);
      Swal.fire("Success!", "Data has been added.", "success");
      setJudulList((prevList) => [...prevList, response.data]); // Add new data to the list
      closeModal();
    } catch (error) {
      Swal.fire("Error!", "Failed to add data.", "error");
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${API_JUDUL}/editById/${selectedJudulId}`,
        editJudulData,
        { params: { idAdmin } }
      );
      Swal.fire("Success!", "Title has been updated.", "success");
      setJudulList((prevList) =>
        prevList.map((item) => (item.id === selectedJudulId ? response.data : item))
      );
      closeEditModal();
    } catch (error) {
      Swal.fire("Error!", "Failed to update title.", "error");
    }
  };

  // Handle Delete Judul
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
          await axios.delete(`${API_JUDUL}/delete/${id}`);
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
          setJudulList(judulList.filter((item) => item.id !== id)); // Remove item from list after successful deletion
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
    fetchJudulList();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar and Profile Dropdown */}
      <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <h1 className="text-2xl font-bold">Dashboard</h1>
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

      {/* Add Button */}
      <button
        onClick={openModal}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H6a1 1 0 110-2h4V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Add Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-lg font-bold mb-4">Tambah Judul</h2>
            <form onSubmit={handleSubmit}>
              <label className="block mb-2 text-sm font-medium text-gray-700">Judul Keluarga</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={judulData.judulKeluarga}
                onChange={(e) => setJudulData({ ...judulData, judulKeluarga: e.target.value })}
                required
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 rounded mr-2"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-lg font-bold mb-4">Edit Judul</h2>
            <form onSubmit={handleEditSubmit}>
              <label className="block mb-2 text-sm font-medium text-gray-700">Judul Keluarga</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={editJudulData.judulKeluarga}
                onChange={(e) => setEditJudulData({ ...editJudulData, judulKeluarga: e.target.value })}
                required
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="px-4 py-2 bg-gray-300 rounded mr-2"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Card List */}
      <div className="max-w-screen-xl mx-auto px-4 py-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {judulList.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 border border-gray-200 rounded shadow-md relative"
          >
            <div>
              <h3 className="text-lg font-bold mb-2">{item.judulKeluarga}</h3>
              <button
                onClick={() => history.push("/Anggota")}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-2"
              >
                Lihat Keluarga
              </button>
            </div>
            {/* Hamburger Menu */}
            <div className="absolute top-2 right-2">
              <div className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="inline-flex items-center justify-center p-2 text-gray-500 bg-white rounded-full hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
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
                {dropdownOpen === index && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <ul className="text-sm text-gray-700">
                      <li className="hover:bg-gray-100">
                        <button
                          onClick={() => openEditModal(item.id, item.judulKeluarga)}
                          className="block px-4 py-2 w-full text-left"
                        >
                          Edit
                        </button>
                      </li>
                      <li className="hover:bg-gray-100">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="block px-4 py-2 w-full text-left text-red-500"
                        >
                          Hapus
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
