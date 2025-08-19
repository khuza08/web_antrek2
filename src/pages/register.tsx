import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setError("Nama lengkap harus diisi");
      return;
    }
    if (!email.trim()) {
      setError("Email harus diisi");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Email tidak valid");
      return;
    }
    if (!username.trim()) {
      setError("Username harus diisi");
      return;
    }
    if (!password) {
      setError("Password harus diisi");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok");
      return;
    }

    setError("");
    alert(`Registrasi berhasil untuk ${fullName}`);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-white dark:from-slate-900 dark:to-gray-800 p-6">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-slate-700 max-w-md w-full">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
          Register
        </h3>

        {error && (
          <div className="mb-4 p-2 bg-red-200 text-red-700 rounded">{error}</div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@contoh.com"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2"
            >
              Konfirmasi Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Masukkan ulang password"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 shadow-lg hover:shadow-blue-500/20"
          >
            Daftar
          </button>
        </form>
      </div>

      <div className="mt-4 text-center">
        <span className="text-gray-700 dark:text-gray-300">
          Sudah punya akun?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 font-semibold"
          >
            Login di sini
          </Link>
        </span>
      </div>

    </div>
  );
};

export default Register;
