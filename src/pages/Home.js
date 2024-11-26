import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaPhone, FaServer } from "react-icons/fa"; 
import images from "../asset/images.jpg";
import { motion } from "framer-motion"; // Import framer-motion for animations

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ID"); // ID for Bahasa Indonesia, EN for English
  const [isLanguageOpen, setIsLanguageOpen] = useState(false); // Untuk menutup dropdown bahasa

  // Fungsi untuk mengganti bahasa
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsLanguageOpen(false); // Menutup dropdown setelah bahasa dipilih
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 md:px-6">
        {/* Logo dan Menu Utama */}
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center">
            <motion.img 
              src={images} 
              className="h-12" 
              alt="Logo" 
              width="150px" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1 }}
            />
          </a>

          {/* Menu Navigasi (Desktop) */}
          <nav className="hidden md:flex space-x-6">
            <motion.a 
              href="/" 
              className="text-gray-600 hover:text-blue-600 flex items-center space-x-2"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <FaHome /> <span>{language === "ID" ? "Pohon Keluarga" : "Family Tree"}</span>
            </motion.a>
            <motion.a 
              href="/about" 
              className="text-gray-600 hover:text-blue-600 flex items-center space-x-2"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <FaInfoCircle /> <span>{language === "ID" ? "Tentang" : "About"}</span>
            </motion.a>
            <motion.a 
              href="/services" 
              className="text-gray-600 hover:text-blue-600 flex items-center space-x-2"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <FaServer /> <span>{language === "ID" ? "Layanan" : "Services"}</span>
            </motion.a>
            <motion.a 
              href="/contact" 
              className="text-gray-600 hover:text-blue-600 flex items-center space-x-2"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <FaPhone /> <span>{language === "ID" ? "Kontak" : "Contact"}</span>
            </motion.a>
          </nav>
        </div>

        {/* Tombol Aksi (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            href="/sign-in"
            className="px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === "ID" ? "MASUK" : "SIGN IN"}
          </motion.a>
          <motion.a
            href="/create-account"
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === "ID" ? "Buat Akun" : "CREATE ACCOUNT"}
          </motion.a>

          {/* Dropdown Pemilih Bahasa */}
          <div className="relative">
            <motion.button
              className="px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-md"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              whileHover={{ scale: 1.05 }}
            >
              {language === "ID" ? "ID" : "EN"}
            </motion.button>
            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md border border-gray-300">
                <motion.button
                  className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                  onClick={() => changeLanguage("ID")}
                  whileHover={{ scale: 1.05 }}
                >
                  Indonesia
                </motion.button>
                <motion.button
                  className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                  onClick={() => changeLanguage("EN")}
                  whileHover={{ scale: 1.05 }}
                >
                  English
                </motion.button>
              </div>
            )}
          </div>
        </div>

        {/* Tombol Hamburger (Mobile) */}
        <motion.button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.05 }}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </motion.button>
      </div>

      {/* Konten di bawah header */}
      <div className="container mx-auto py-6">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {language === "ID" ? "Selamat datang di Pohon Keluarga" : "Welcome to the Family Tree"}
        </motion.h2>
        <motion.p
          className="text-gray-600 text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {language === "ID"
            ? "Jelajahi sejarah keluarga Anda, temukan hubungan, dan bangun pohon keluarga Anda."
            : "Explore your family history, discover relationships, and build your family tree."}
        </motion.p>

        {/* New Feature Section */}
        <motion.div
          className="bg-blue-100 py-6 px-4 rounded-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{language === "ID" ? "Fitur Utama" : "Main Features"}</h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>{language === "ID" ? "Membangun Pohon Keluarga secara interaktif" : "Build an interactive Family Tree"}</li>
            <li>{language === "ID" ? "Menemukan hubungan antar anggota keluarga" : "Find connections between family members"}</li>
            <li>{language === "ID" ? "Berbagi dan menyimpan informasi sejarah keluarga" : "Share and save family history information"}</li>
          </ul>
        </motion.div>

        {/* Layanan Section (Services) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">{language === "ID" ? "Membangun Pohon Keluarga" : "Build a Family Tree"}</h4>
            <p className="text-gray-600">{language === "ID" ? "Buat dan kelola pohon keluarga Anda dengan mudah." : "Create and manage your family tree with ease."}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">{language === "ID" ? "Menemukan Koneksi Keluarga" : "Find Family Connections"}</h4>
            <p className="text-gray-600">{language === "ID" ? "Temukan hubungan antar anggota keluarga yang lebih jauh." : "Discover deeper connections between family members."}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">{language === "ID" ? "Berbagi Informasi Keluarga" : "Share Family Information"}</h4>
            <p className="text-gray-600">{language === "ID" ? "Bagikan sejarah keluarga Anda dengan anggota lainnya." : "Share your family history with other members."}</p>
          </div>
        </motion.div>

        {/* New Feature: Member Profiles */}
        <motion.div
          className="bg-gray-50 py-6 px-4 rounded-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{language === "ID" ? "Profil Anggota" : "Member Profiles"}</h3>
          <p className="text-gray-600">{language === "ID" ? "Temui anggota keluarga Anda." : "Meet your family members."}</p>
          {/* This would ideally be replaced with dynamic content */}
          <ul className="list-disc pl-5 text-gray-600">
            <li>John Doe - Father</li>
            <li>Jane Doe - Mother</li>
            <li>Michael Doe - Brother</li>
          </ul>
        </motion.div>

        {/* New Feature: Interactive Family Tree Builder */}
        <motion.div
          className="bg-green-100 py-6 px-4 rounded-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{language === "ID" ? "Pembangun Pohon Keluarga Interaktif" : "Interactive Family Tree Builder"}</h3>
          <p className="text-gray-600">{language === "ID" ? "Mulai membangun pohon keluarga Anda secara interaktif." : "Start building your family tree interactively."}</p>
          <motion.button
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
          >
            {language === "ID" ? "Mulai Sekarang" : "Start Now"}
          </motion.button>
        </motion.div>

        {/* New Feature: FAQ */}
        <motion.div
          className="bg-white py-6 px-4 rounded-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{language === "ID" ? "Pertanyaan yang Sering Diajukan" : "Frequently Asked Questions"}</h3>
          <ul className="text-gray-600">
            <li><strong>{language === "ID" ? "Bagaimana cara membangun pohon keluarga?" : "How do I build a family tree?"}</strong></li>
            <p>{language === "ID" ? "Ikuti langkah-langkah di halaman pembuat pohon keluarga." : "Follow the steps on the family tree builder page."}</p>
            <li><strong>{language === "ID" ? "Apa yang harus saya lakukan jika saya lupa kata sandi?" : "What should I do if I forget my password?"}</strong></li>
            <p>{language === "ID" ? "Gunakan opsi pemulihan kata sandi di halaman masuk." : "Use the password recovery option on the sign-in page."}</p>
          </ul>
        </motion.div>
      </div>
    </header>
  );
}

export default Home;
