import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import user from "../../asset/user.png"; // Importing the image
import { API_ANGGOTA } from "../../utils/BaseUrl";

function EditAnggota() {
  const { id } = useParams(); // Get the ID from the URL
  const history = useHistory(); // Use history for navigation

  // Initial state for form data
  const [formData, setFormData] = useState({
    id: "",
    nama: "",
    gender: "",
    tanggalLahir: "",
  });

  // Loading state
  const [isLoading, setIsLoading] = useState(true);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const idAdmin = userData ? userData.id : null;

  useEffect(() => {
    if (id) {
      fetchAnggotaDetails();
    }
  }, [id]);

  // Fetch member details from API
  const fetchAnggotaDetails = async () => {
    try {
      const response = await axios.get(`${API_ANGGOTA}/detail/${id}`);
      const data = response.data;

      setFormData({
        id: data.id || "",
        nama: data.nama || "",
        gender: data.gender || "",
        tanggalLahir: data.tanggalLahir || "",
      });

      setIsLoading(false); // Set loading state to false after data is fetched
    } catch (error) {
      Swal.fire("Error!", "Failed to fetch member details.", "error");
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!idAdmin) {
      Swal.fire("Error!", "Admin ID is missing.", "error");
      return;
    }

    try {
      await axios.put(
        `${API_ANGGOTA}/editById/${id}?idAdmin=${idAdmin}`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      Swal.fire("Success!", "Member has been updated.", "success").then(() => {
        history.goBack(); // Go back to the previous page
      });
    } catch (error) {
      Swal.fire("Error!", "Failed to update member.", "error");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-bold text-center mb-6">Edit Anggota</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <label className="block mb-4 text-sm font-medium">Name</label>
        <input
          type="text"
          name="nama"
          className="w-full p-2 border rounded mb-4"
          value={formData.nama}
          onChange={handleInputChange}
          required
        />

        <label className="block mb-4 text-sm font-medium">Gender</label>
        <select
          name="gender"
          className="w-full p-2 border rounded mb-4"
          value={formData.gender}
          onChange={handleInputChange}
          required
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label className="block mb-4 text-sm font-medium">Date of Birth</label>
        <input
          type="date"
          name="tanggalLahir"
          className="w-full p-2 border rounded mb-6"
          value={formData.tanggalLahir}
          onChange={handleInputChange}
          required
        />

        <div className="flex justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => history.push("/Anggota/:idJudul")}
            className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditAnggota;
