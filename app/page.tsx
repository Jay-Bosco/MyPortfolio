import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
      <Projects limit={4} showCta />
      <Quote />
      <Footer />
      <AIButton />
    </>
  );
}
