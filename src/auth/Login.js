import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";
import axios from "axios";
import { API_LOGIN } from "../utils/BaseUrl";

function Login() {
  const [email, setEmail] = useState(""); // Mengganti state username menjadi email
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State untuk toggle password visibility
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      email,
      password,
    };

    try {
      const response = await axios.post(`${API_LOGIN}`, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const { token } = response.data;
        Swal.fire({
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        });

        localStorage.setItem("authToken", token);
        history.push("/dashboard");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: "Login failed!",
          text: error.response.data.message || "Invalid credentials.",
          showConfirmButton: true,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login failed!",
          text: "Unable to connect to the server.",
          showConfirmButton: true,
        });
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm w-full bg-gradient-to-b from-gray-800 to-gray-200 p-8 rounded-2xl shadow-xl border-t-4 border-blue-500 dark:bg-gray-800"
      >
        <h1 className="text-2xl font-extrabold text-center mb-6 text-gray-800 dark:text-white">
          Welcome Back!
        </h1>

        {/* Email Input */}
        <div className="mb-5">
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
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-5 relative">
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
            {/* Toggle Password Visibility */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              <i
                className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
              ></i>
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:focus:ring-blue-800 shadow-md"
        >
          Sign In
        </button>

        {/* Register Link */}
        <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <a
            href="/Rg+123"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Register Now
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
