import Link from "next/link";
import { useState } from "react";
import DiamondComponent from "../../components/framer/DiamondShape";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import { apiService } from "../../utils/api";

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Tentative de connexion avec", { email, password });

   /* login(email, password);*/
/*    router.push("/marketplace");*/

    try {
      const response = await apiService.auth.login(email, password);
      if (response.token) {
        await login(response.token);
        router.push("/marketplace");
      } else {
        console.error("Login failed", response.message);
      }
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center font-mono">
      <DiamondComponent>
        <h2 className="mb-6 text-center text-2xl font-semibold">Sign In.</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
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
          <div className="mb-6">
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
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="rounded-md text-blue-400 hover:text-blue-300"
            >
              Sign In
            </button>
            <Link
              className="text-sm text-blue-400 hover:text-blue-300"
              href="/account/register"
            >
              Create account
            </Link>
          </div>
        </form>
      </DiamondComponent>
    </div>
  );
};

export default LoginPage;
