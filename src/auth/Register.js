import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";
import axios from "axios";
import { API_ADMIN } from "../utils/BaseUrl";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const register = async (e) => {
    e.preventDefault();

    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(
      password
    );

    if (!isValidPassword) {
      Swal.fire({
        icon: "warning",
        title: "Password Tidak Sesuai!",
        text: "Password minimal 8 karakter dengan kombinasi angka, huruf kecil & besar.",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const requestBody = {
      email: email,
      password: password,
      username: username,
    };

    try {
      await axios.post(`${API_ADMIN}/register`, requestBody); // Pastikan endpoint benar
      Swal.fire({
        icon: "success",
        title: "Berhasil Registrasi!",
        showConfirmButton: false,
        timer: 1500,
      });
      history.push("/login");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        Swal.fire({
          icon: "error",
          title: "Gagal Registrasi!",
          text: data.message || "Terjadi kesalahan saat melakukan registrasi.",
          showConfirmButton: true,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal Registrasi!",
          text: "Tidak dapat terhubung ke server.",
          showConfirmButton: true,
        });
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <form
        onSubmit={register}
        className="max-w-sm w-full bg-gradient-to-b from-gray-800 to-gray-200 p-8 rounded-2xl shadow-xl border-t-4 border-blue-500"
      >
        <h1 className="text-2xl font-extrabold text-center mb-6 text-gray-800">
          Register Akun Baru
        </h1>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Masukkan Email"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Masukkan Username"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Masukkan Password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
        >
          Register
        </button>

        <p className="text-center text-sm mt-4 text-gray-600">
          Sudah punya akun?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;
