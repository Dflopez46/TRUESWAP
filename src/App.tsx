import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import PurchaseFlow from "./pages/PurchaseFlow";
import PurchaseSuccess from "./pages/PurchaseSuccess";
import MyTickets from "./pages/MyTickets";
import SellTicket from "./pages/SellTicket";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/purchase/:ticketId" element={<PurchaseFlow />} />
          <Route path="/purchase-success" element={<PurchaseSuccess />} />
          <Route path="/tickets" element={<MyTickets />} />
          <Route path="/sell" element={<SellTicket />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
