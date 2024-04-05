import Link from "next/link";
import { useState } from "react";
import DiamondComponent from "../components/framer/DiamondShape";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

const RegisterPage = () => {
  const router = useRouter();
  const { login } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Les mots de passe ne correspondent pas.");
      return;
    }
    console.log("Tentative d'inscription avec", { name, email, password });
    login();
    router.push("/marketplace");
  };

  return (
    <div className="flex min-h-screen items-center justify-center font-mono">
      <DiamondComponent>
        <h2 className="mb-6 text-center text-2xl font-semibold">Sign Up.</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="block text-sm font-medium ">
              Name
            </label>
            <input
              type="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              href="/login"
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
