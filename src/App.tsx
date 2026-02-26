import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import Conteudo from "./pages/Conteudo";
import Recursos from "./pages/Recursos";
import Comunidade from "./pages/Comunidade";
import Eventos from "./pages/Eventos";
import Newsletter from "./pages/Newsletter";
import Sobre from "./pages/Sobre";
import SubmeterConteudo from "./pages/SubmeterConteudo";
import Apoiar from "./pages/Apoiar";
import GuiaEstilo from "./pages/GuiaEstilo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/conteudo" element={<Conteudo />} />
              <Route path="/recursos" element={<Recursos />} />
              <Route path="/comunidade" element={<Comunidade />} />
              <Route path="/eventos" element={<Eventos />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/submeter" element={<SubmeterConteudo />} />
              <Route path="/apoiar" element={<Apoiar />} />
              <Route path="/guia-de-estilo" element={<GuiaEstilo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
