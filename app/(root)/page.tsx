// External Components
import Contacts from "@/components/Contacts";
import CTASection from "@/components/CTASection";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

// Component Body
export default function Home() {
  
  return (
    <div className="w-full">
      <Hero />
      <FeaturedVehicles />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <Contacts />
      <Footer />
    </div>
  );
}
