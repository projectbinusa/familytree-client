import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";
import axios from "axios";
import { API_LOGIN } from "../utils/BaseUrl";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  useEffect(() => {
    document.body.style.backgroundColor = "white";
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_LOGIN}/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        const { token, data } = response.data;

        Swal.fire({
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        });

        localStorage.setItem("authToken", token);
        localStorage.setItem("userData", JSON.stringify(data));

        history.push("/dashboard");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login failed!",
        text:
          error.response?.data ||
          "Invalid credentials or server error occurred.",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm w-full bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-500"
      >
        <h1 className="text-2xl font-extrabold text-center mb-6 text-blue-500">
          Login
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
            placeholder="Enter your email"
            autoComplete="off"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-5">
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
          Sign In
        </button>

        {/* Register Link */}
        <p className="text-center text-sm mt-4 text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register Now
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
