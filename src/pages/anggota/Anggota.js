import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import user from "../../asset/user.png"; // Importing the image
import { API_ANGGOTA } from "../../utils/BaseUrl";

function Anggota() {
  const { idJudul } = useParams();
  const [anggotaList, setAnggotaList] = useState([]);
  const [newAnggotaData, setNewAnggotaData] = useState({
    nama: "",
    gender: "",
    tanggalLahir: "",
    idJudul: idJudul,
  });
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(null);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const idAdmin = userData ? userData.id : null;

  const fetchAnggotaList = async () => {
    try {
      const response = await axios.get(`${API_ANGGOTA}/all-by-judul/${idJudul}`);
      const anggotaListWithCorrectIdJudul = response.data.map((anggota) => ({
        ...anggota,
        idJudul: anggota.idJudul.id,
      }));
      setAnggotaList(anggotaListWithCorrectIdJudul);
    } catch (error) {
      console.error("Failed to fetch anggota:", error);
    }
  };

  useEffect(() => {
    if (idJudul) {
      fetchAnggotaList();
    }
  }, [idJudul]);

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
          await axios.delete(`${API_ANGGOTA}/delete/${id}`);
          Swal.fire("Deleted!", "The member has been deleted.", "success");
          setAnggotaList(anggotaList.filter((item) => item.id !== id));
        } catch (error) {
          Swal.fire("Error!", "Failed to delete the member.", "error");
        }
      }
    });
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    if (!idAdmin || !newAnggotaData.idJudul) {
      Swal.fire("Error!", "Admin ID or Judul ID is missing", "error");
      return;
    }
    try {
      const response = await axios.post(`${API_ANGGOTA}/tambahByIdAdmin/${idAdmin}`, newAnggotaData);
      Swal.fire("Success!", "Member has been added.", "success");
      setAnggotaList([...anggotaList, response.data]);
      setAddModalOpen(false);
    } catch (error) {
      Swal.fire("Error!", "Failed to add member.", "error");
    }
  };

  // Recursive function to render the tree with lines and "+" icons
  const renderTree = (anggota) => {
    return (
      <li key={anggota.id} className="relative">
        <div className="flex flex-col items-center">
          <img
            src={user}
            alt={anggota.nama}
            className="w-20 h-20 rounded-full border-2 border-gray-300 cursor-pointer"
            onClick={() => setShowOptions(showOptions === anggota.id ? null : anggota.id)}
          />
          <h3 className="mt-2 font-medium text-lg">{anggota.nama}</h3>
          {showOptions === anggota.id && (
            <div className="absolute top-20 bg-white shadow-md rounded-lg p-2 flex flex-col">
              <button className="text-blue-500 hover:text-blue-600 mb-2">Detail</button>
              <button className="text-yellow-500 hover:text-yellow-600 mb-2">Edit</button>
              <button
                className="text-red-500 hover:text-red-600"
                onClick={() => handleDelete(anggota.id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>

        {/* Branching lines with "+" icons */}
        <div className="absolute top-12 left-0 right-0 flex justify-between items-center">
          <div className="border-t-2 border-gray-300 w-20"></div>
          <div className="flex flex-col items-center">
            <span className="bg-gray-200 rounded-full p-2 text-lg font-bold">+</span>
            <div className="border-t-2 border-gray-300 w-20 mt-2"></div>
          </div>
        </div>

        {/* Render parent */}
        {anggota.parent && (
          <div className="absolute top-[-20px] left-0 right-0 flex justify-center items-center">
            <div className="border-t-2 border-gray-300 w-20"></div>
            <span className="bg-gray-200 rounded-full p-2 text-lg font-bold">↑</span>
            <div className="border-t-2 border-gray-300 w-20 mt-2"></div>
          </div>
        )}

        {/* Render child members */}
        {anggota.children && (
          <ul className="pl-6 border-l-2 border-gray-300 mt-4">
            {anggota.children.map(renderTree)}
          </ul>
        )}

        {/* Render partner members */}
        {anggota.partner && (
          <ul className="flex justify-center items-center mt-4">
            {anggota.partner.map((partner) => (
              <li key={partner.id} className="ml-8">{renderTree(partner)}</li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-bold text-center mb-6">Family Tree</h1>

      {anggotaList.length === 0 && (
        <div className="text-center mb-4">
          <button
            onClick={() => setAddModalOpen(true)}
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Add Member
          </button>
        </div>
      )}

      <div className="flex justify-center items-start">
        <ul className="flex flex-col items-center">{anggotaList.filter((item) => !item.parentId).map(renderTree)}</ul>
      </div>

      {/* Add Anggota Modal */}
      {addModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-lg font-bold mb-4">Add Member</h2>
            <form onSubmit={handleAddSubmit}>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded mb-4"
                value={newAnggotaData.nama}
                onChange={(e) => setNewAnggotaData({ ...newAnggotaData, nama: e.target.value })}
                required
              />
              <label className="block mb-2 text-sm font-medium">Gender</label>
              <select
                className="w-full p-2 border rounded mb-4"
                value={newAnggotaData.gender}
                onChange={(e) => setNewAnggotaData({ ...newAnggotaData, gender: e.target.value })}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <label className="block mb-2 text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                className="w-full p-2 border rounded mb-4"
                value={newAnggotaData.tanggalLahir}
                onChange={(e) => setNewAnggotaData({ ...newAnggotaData, tanggalLahir: e.target.value })}
                required
              />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setAddModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Anggota;
