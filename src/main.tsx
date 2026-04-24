import { ViteReactSSG } from "vite-react-ssg";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { routes } from "./routes";
import "./index.css";

const queryClient = new QueryClient();

export const createRoot = ViteReactSSG(
  { routes },
  ({ router, routes: _routes, isClient, initialState: _initialState }) => {
    // App-level providers wrap router
  },
  {
    rootContainer: "#root",
    transformState(state) {
      return state;
    },
    Layout: ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </QueryClientProvider>
    ),
  }
);
