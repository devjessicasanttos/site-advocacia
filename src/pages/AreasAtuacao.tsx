import Header from "@/components/Header";
import PracticeAreas from "@/components/PracticeAreas";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

const AreaAtuacao = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Header />
      <PracticeAreas />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default AreaAtuacao;