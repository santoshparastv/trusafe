import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/HeroSection";
import AboutSection from "@/components/About/AboutSection";
import ServicesSection from "@/components/Services/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChoose/WhyChooseUsSection";
import JoinUsSection from "@/components/JoinUs/JoinUsSection";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <JoinUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
