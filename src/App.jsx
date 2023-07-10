import { useMediaQuery } from 'react-responsive';
import "./Global.css";
import { Access } from "./components/Access/Access";
import { Description } from "./components/Description/Description";
import { Doubts } from "./components/Doubts/DoubtsSection";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Moments } from "./components/Moments/Moments";
import { Pillars } from "./components/Pillars/Pillars";
import { Prices } from "./components/Prices/Prices";
import { QuestionsCarrousel } from "./components/QuestionsCarrousel/QuestionsCarrousel";
import { ReviewsCarrousel } from "./components/ReviewsCarrousel/ReviewsCarrousel";
import { Seal } from "./components/Seal/Seal";

function App() {
  const isTablet = useMediaQuery({ query: '(max-width: 1127px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 744px)' })
  const deviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

  return (
    <>
      <Header  device={ deviceType }/>
      <Hero device={ deviceType }/>
      <QuestionsCarrousel device={ deviceType }/>
      <Pillars device={ deviceType }/>
      <Access device={ deviceType }/>
      <Moments device={ deviceType }/>
      <ReviewsCarrousel device={ deviceType }/>
      <Prices device={ deviceType }/>
      <Doubts device={ deviceType }/>
      <Seal device={ deviceType }/>
      <Description device={ deviceType }/>
      <Footer device={ deviceType }/>
    </>
  );
}

export default App;
