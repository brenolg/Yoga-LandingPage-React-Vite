import { styled } from "styled-components";
import body from "../images/body.png";
import mind from "../images/mind.png";
import soul from "../images/soul.png";
import styles from "./PillarsSection.module.css";
import { isMobile } from "react-device-detect";


export function PillarsSection() {
  return (
    <PillarSectionContainer isMobile={isMobile} id="iclub">
      <SectionTitle isMobile={isMobile}>
        <h3>Como funciona o Yoga iClub?</h3>
      </SectionTitle>
      <Break />


      <PillarCardsContainer isMobile={isMobile} >

        <PillarCard
          data-aos="fade"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className={styles.outer_element}>
            <img className={styles.pillar_img} src={body}></img>
          </div>
          <h4 className="H4">body</h4>
          <p className={isMobile ? "text-sm" : "text-md"}>
            Práticas de yoga desenvolvidas para construir consciência do corpo,
            da respiração, força, flexibilidade, equilíbrio e bem estar com
            ásanas e pránayamas
          </p>
        </PillarCard>
        <Break />

        <PillarCard
          data-aos="fade"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className={styles.outer_element}>
            <img className={styles.pillar_img} src={mind}></img>
          </div>
          <h4 className="H4">mind</h4>
          <p className={isMobile ? "text-sm" : "text-md"}>
            Meditações guiadas elaboradas para te tornar mais consciente de seus
            pensamentos, desenvolvendo maior inteligência e gestão emocional
          </p>
        </PillarCard>

        <Break />

        <PillarCard
          data-aos="fade"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className={styles.outer_element}>
            <img className={styles.pillar_img} src={soul}></img>
          </div>
          <h4 className="H4">soul</h4>
          <p className={isMobile ? "text-sm" : "text-md"}>
            Yoga é ferramenta para desenvolvimento completo do ser, é elevação
            espiritual. Aulas teóricas que vão te convidar a um mergulho ainda
            mais profundo.
          </p>
        </PillarCard>
        <Break />
      </PillarCardsContainer>
    </PillarSectionContainer>
  );
}

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
  padding-bottom: 24px;
`

const PillarSectionContainer = styled.div`
  flex-direction: column;
  padding: 16px;
  align-items: center;
  color: var(--C4);
  display: flex;
  width: 100%;
`

const PillarCardsContainer = styled.div`
  margin-top: 48px;
  flex-direction: row;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  max-width: 1104.789px;
  ${props => props.isMobile && `
    flex-wrap: wrap;
  `}

  ${props => !props.isMobile && `
    flex-direction: row;
    justify-content: space-between;
    width: 112rem;
  `}
`

const SectionTitle = styled.div`
  h3 {
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
    height: 48px;
    font-family: syne;
    color: var(--c-4, #123939);
    ${props => props.isMobile ? `text-align: center;` : "margin-left: -32vw;"}
  }
`

const PillarCard = styled.div`
  min-width: 280px;
  h4 {
    margin: 12px 0px;
  }
`