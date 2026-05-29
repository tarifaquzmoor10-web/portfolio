import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Cursor } from "./components/Cursor";
import { HomePage } from "./pages/Home";
import { ServicesPage } from "./pages/Services";
import { PortfolioPage } from "./pages/Portfolio";
import { IndustriesPage } from "./pages/Industries";
import { ProcessPage } from "./pages/Process";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";
import { LegalPage } from "./pages/Legal";

type RouteId = "home" | "services" | "portfolio" | "industries" | "process" | "about" | "contact" | "privacy" | "terms" | "refund";

function App() {
  const initial = (typeof window !== "undefined" ? (window.location.hash.replace("#", "") as RouteId) : "home") || "home";
  const [route, setRoute] = useState<RouteId>(initial);

  const nav = (id: string) => {
    setRoute(id as RouteId);
    if (typeof window !== "undefined") {
      window.location.hash = id;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onHash = () => {
      const id = (window.location.hash.replace("#", "") || "home") as RouteId;
      setRoute(id);
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="relative bg-black min-h-screen">
      <Cursor />
      <Navbar current={route} onNav={nav} />
      <main className="relative">
        <AnimatePresence mode="wait">
          {route === "home" && <HomePage key="home" onNav={nav} />}
          {route === "services" && <ServicesPage key="services" onNav={nav} />}
          {route === "portfolio" && <PortfolioPage key="portfolio" onNav={nav} />}
          {route === "industries" && <IndustriesPage key="industries" onNav={nav} />}
          {route === "process" && <ProcessPage key="process" />}
          {route === "about" && <AboutPage key="about" />}
          {route === "contact" && <ContactPage key="contact" />}
          {route === "privacy" && <LegalPage key="privacy" kind="privacy" />}
          {route === "terms" && <LegalPage key="terms" kind="terms" />}
          {route === "refund" && <LegalPage key="refund" kind="refund" />}
        </AnimatePresence>
      </main>
      <Footer onNav={nav} />
    </div>
  );
}

export default App;
