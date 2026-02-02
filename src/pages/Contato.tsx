import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactActions from "@/components/ContactActions";
import ClientQuestions from "@/components/ClientQuestions";

const Contato = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="w-full">
          {/* Seção dos Botões de WhatsApp/E-mail */}
          <ContactActions />

          {/* Seção da Consultoria Jurídica Digital */}
          <div className="mt-20">
             <ClientQuestions />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// ESSA LINHA É OBRIGATÓRIA:
export default Contato;