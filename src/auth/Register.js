import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";
import axios from "axios";
import { API_ADMIN } from "../utils/BaseUrl";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
      await axios.post(`${API_ADMIN}/register`, requestBody);
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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={register}
        className="max-w-sm w-full bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-500"
      >
        <h1 className="text-2xl font-extrabold text-center mb-6 text-blue-500">
          Register
        </h1>

        {/* Email Input */}
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Masukkan Email"
            autoComplete="off"
            required
          />
        </div>

        {/* Username Input */}
        <div className="mb-3">
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
            autoComplete="off"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Masukkan Password"
              required
            />
            <div className="mt-2">
              <label className="text-sm text-gray-700 flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                />
                Tampilkan Password
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center shadow-md"
        >
          Register
        </button>

        {/* Login Link */}
        <p className="text-center text-sm mt-4 text-gray-600">
          Sudah punya akun?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;
