import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "./pages/Home";
import KunjunganSiswa from "./pages/KunjunganSiswa";
import KunjunganGuru from "./pages/KunjunganGuru";
import KunjunganUmum from "./pages/KunjunganUmum";
import RakBuku from "./pages/RakBuku";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kunjungan-siswa" element={<KunjunganSiswa />} />
            <Route path="/kunjungan-guru" element={<KunjunganGuru />} />
            <Route path="/kunjungan-umum" element={<KunjunganUmum />} />
            <Route path="/rak-buku" element={<RakBuku />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
