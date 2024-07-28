import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Panel from "./UI/Panel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import CreateMenuForm from "./UI/CreateMenuForm";
import EditMenuForm from "./UI/EditMenuForm";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Panel />} />
            <Route path="/create" element={<CreateMenuForm />} />
            <Route path="/update/:id" element={<EditMenuForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
