import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import AIButton from "@/components/AIButton";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <Services />
      <Projects limit={3} showCta />
      <Quote />
      <Footer />
      <AIButton />
    </>
  );
}
