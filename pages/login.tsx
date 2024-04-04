import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Tentative de connexion avec", { email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="max-w-sm rounded-lg bg-white p-8 shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Sign In
            </button>
            <Link
              className="text-sm text-blue-600 hover:underline"
              href="/register"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
