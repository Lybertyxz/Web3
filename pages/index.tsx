import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="animate-bg-change flex flex-1 items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
        <h2 className="text-5xl font-bold text-white">
          Real Estate Asset Manager
        </h2>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
