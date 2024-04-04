import Header from "../components/Header";
import Footer from "../components/Footer";
import TextDelayed from "../components/framer/TextDelayed";

const HomePage = () => {
  const title = "Real Estate".split(" ");
  const subtitle = ".asset manager".split(" ");

  return (
    <div className="flex h-screen flex-col font-mono">
      <Header />
      <div className="animate-bg-change flex flex-1 items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="flex flex-col items-start">
          <TextDelayed
            delay={1}
            style="text-5xl font-bold text-white"
            content={title}
          />
          <div className="self-end">
            <TextDelayed delay={2} content={subtitle} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
