import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Box } from "./screens/Box";
import router from './routes/Routes';
import { RouterProvider } from "react-router-dom";



createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
);
