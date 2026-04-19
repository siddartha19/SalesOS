import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import Founders from "@/components/Founders";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <Nav />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Features />
      <DashboardPreview />
      <Founders />
      <Pricing />
      <Footer />
    </main>
  );
}
