
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  async function bootstrap() {
    try {
      await import("@uxuissk/design-system-core");
    } catch (e) {
      console.warn("[DS3] custom elements failed to load:", e);
    }
    createRoot(document.getElementById("root")!).render(<App />);
  }

  bootstrap();
  