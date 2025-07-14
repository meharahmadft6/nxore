import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamSection from '../components/TeamSection';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <TeamSection />
      <Footer />
    </div>
  );
} 