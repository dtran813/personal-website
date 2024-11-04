import AboutMe from "@/components/aboutMe";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700">
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
    </div>
  );
}
