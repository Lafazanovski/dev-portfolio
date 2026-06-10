import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
}
