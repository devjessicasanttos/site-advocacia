import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importação das suas páginas
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminPainel from "./pages/AdminPainel";
import Sobre from "./pages/sobre"; // Removido o .tsx
import AreasAtuacao from "./pages/AreasAtuacao"; 
import Contato from "./pages/Contato";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Páginas Principais */}
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/areas" element={<AreasAtuacao />} />
          <Route path="/contato" element={<Contato />} />
          
          {/* Área Administrativa */}
          <Route path="/admin-tamires" element={<AdminPainel />} />
          
          {/* O NotFound deve ser SEMPRE o último da lista */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;