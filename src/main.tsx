
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  // Load DS 3.0 async — prevents white screen if package fails to load
  import("@uxuissk/design-system-core").catch((e) => console.warn("[DS3] failed to load:", e));

  createRoot(document.getElementById("root")!).render(<App />);
  