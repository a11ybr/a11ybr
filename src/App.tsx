import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import Newsletter from "./pages/Newsletter";
import Sobre from "./pages/Sobre";
import Apoiar from "./pages/Apoiar";
import GuiaEstilo from "./pages/GuiaEstilo";
import NotFound from "./pages/NotFound";
import Submeter from "@/pages/Submeter";
import SubmeterConteudo from "./pages/SubmeterConteudo";
import SubmeterPerfil from "./pages/SubmeterPerfil";
import Conteudo from "./pages/Conteudo";
import Categoria from "./pages/Categoria";
import Comunidade from "./pages/Comunidade";
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
              <Route path="/comunidade" element={<Comunidade />} />
              <Route path="/conteudo" element={<Conteudo />} />
              <Route path="/categoria/:slug" element={<Categoria />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/apoiar" element={<Apoiar />} />
              <Route path="/guia-de-estilo" element={<GuiaEstilo />} />
              <Route path="*" element={<NotFound />} />       
              <Route path="/submeter" element={<Submeter />} />
              <Route path="/submeter/perfil" element={<SubmeterPerfil />} />
              <Route path="/submeter/conteudo" element={<SubmeterConteudo />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
