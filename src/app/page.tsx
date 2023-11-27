import { Navbar } from "@/components/navbar";
import { CircleIndicator } from "@/components/circleIndicator";
//Components
import AboutMe from "@/components/about";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { HeroComponent } from "@/components/hero";
import PortfolioComponent from "@/components/Portfolio";

export default function Home() {
  return (
    <main className=''>
      <CircleIndicator />
      <Navbar />
      <HeroComponent />
      <AboutMe />
      <PortfolioComponent />
      <Contact />
      <Footer />
    </main>
  );
}
