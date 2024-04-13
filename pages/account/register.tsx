import Link from "next/link";
import { useState } from "react";
import DiamondComponent from "../../components/framer/DiamondShape";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import { apiService } from "../../utils/api";

const RegisterPage = () => {
  const router = useRouter();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords do not match.");
      return;
    }

    try {
      const response = await apiService.auth.register(email, password, username);
      if (response.token && response.userId) {
        login(response.token, response.userId);
        router.push("/marketplace");
      } else {
        console.error("Registration failed", response.message);
      }
    } catch (error) {
      console.error("Registration error", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center font-mono">
      <DiamondComponent>
        <h2 className="mb-6 text-center text-2xl font-semibold">Sign Up.</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="username" className="block text-sm font-medium ">
              Name
            </label>
            <input
              type="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full rounded-md border-transparent bg-gray-700 p-2 text-white placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-medium ">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border-transparent bg-gray-700 p-2 text-white placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-medium ">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border-transparent bg-gray-700 p-2 text-white placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium "
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 w-full rounded-md border-transparent bg-gray-700 p-2 text-white placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="rounded-md py-2 text-blue-400 hover:text-blue-300"
            >
              Register.
            </button>
            <Link
              className="text-sm text-blue-400 hover:text-blue-300"
              href="/account/login"
            >
              Sign In.
            </Link>
          </div>
        </form>
      </DiamondComponent>
    </div>
  );
};

export default RegisterPage;
