import Link from "next/link";

interface NavButtonProps {
  path: string;
  name: string;
}

const NavButton: React.FC<NavButtonProps> = ({ path, name }) => {
  return (
    <div
      className="duration-400 m-5 cursor-pointer
      border-b border-gray-700 transition-all hover:scale-125 hover:text-gray-300"
    >
      <Link href={path}>{name}</Link>
    </div>
  );
};

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-col justify-between bg-[#191919] text-white">
      <div className="flex flex-col items-center p-7">
        <NavButton path="/" name="Home" />
        <NavButton path="/assets" name="Market Place" />
        <NavButton path="/assets/my" name="My Assets" />
        <NavButton path="/assets/create" name="New Asset" />
      </div>
    </nav>
  );
};

export default Navigation;
