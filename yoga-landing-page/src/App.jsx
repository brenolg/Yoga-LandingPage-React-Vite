import "./Global.css";
import { AccessSection } from "./components/AccessSection";
import { CommentsSection } from "./components/CommentsSection";
import { DescriptionSection } from "./components/DescriptionSection";
import { DoubtsSection } from "./components/DoubtsSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MomentSection } from "./components/MomentSection";
import { PillarsSection } from "./components/PillarsSection";
import { PricesSection } from "./components/PricesSection";
import { QuestionsCarrousel } from "./components/QuestionsCarrousel";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <QuestionsCarrousel />
      <PillarsSection />
      <AccessSection />
      <MomentSection />
      <CommentsSection />
      <PricesSection />
      <DoubtsSection />
      <DescriptionSection/>
      <Footer/>
    </>
  );
}

export default App;
