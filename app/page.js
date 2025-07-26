import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import TeamSection from "./components/TeamSection";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <TeamSection />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
