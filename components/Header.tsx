import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-black p-4 text-white">
      <h1 className="text-lg font-bold">Web3 Project</h1>
      <div>
        <Link className="mr-10 hover:underline" href="/login">
          Log in
        </Link>
        <Link className="hover:underline" href="/register">
          Create account
        </Link>
      </div>
    </div>
  );
};

export default Header;
