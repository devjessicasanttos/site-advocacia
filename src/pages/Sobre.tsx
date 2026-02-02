import Header from "@/components/Header";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background pt-20"> {/* pt-20 para não ficar sob o Header fixo */}
      <Header />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Sobre;