import Header from "@/components/Header";
import Hero from "@/components/Hero";
// Verifique se o Footer está importado aqui
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      {/* Certifique-se de que não sobrou nenhum símbolo estranho aqui */}
      <Footer />
    </div>
  );
};

export default Index;