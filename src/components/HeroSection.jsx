import { Fragment } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-scroll";
import { styled } from "styled-components";
import bela from "../images/bela_hero.png";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <HeroSectionContainer id="start" isMobile={isMobile}>
      {
        isMobile ?
          <Fragment>
            <ImageContainer>
              <ImageDoor>
                <BelaImg src={bela} />
              </ImageDoor>
            </ImageContainer>
            <Break />
            <TitleText className="H3">
              Te apresento a plataforma de Yoga online mais completa que você já
              viu!
            </TitleText>

            <SmallTextContainer>
              <p className={`text-sm ${styles.main_text}`}>
                Quer começar mas não sabe por onde? Já pratica e quer evolui? O Yoga
                iClub é para todos!
              </p>

              <p className={`text-sm ${styles.main_text}`}>
                Aqui você não precisa ter flexibilidade, força,
                peso ou idade ideais. Vamos praticar técnicas milenares e alcançar os
                benefícios juntos!
              </p>

              <p className={`text-sm ${styles.main_text}`}>
                Yoga iClub é para todos aqueles que acreditam que é
                possivel ter uma vida equilibrada! Meu objetivo é te ajudar a
                encontrar a prática e rotina ideais pra você!
              </p>

              <div className={styles.button_container}>
                <button className={`Button ${styles.button}`}>
                  <Link to="prices" duration={2000} delay={100} offset={-96}>
                    Quero começar!
                  </Link>
                </button>

                <span className={`text-md ${styles.span}`}>
                  + de 500 vidas impactadas
                </span>
              </div>
            </SmallTextContainer>
          </Fragment>
          :
          <Fragment>
            <div className={`${styles.hero_text}`}
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1500"
            >
              <h2 className={`H2 ${styles.main_title}`}>
                Te apresento a plataforma de Yoga online mais completa que você já
                viu!
              </h2>

              <SmallTextContainer>
                <p className={`text-sm ${styles.main_text}`}>
                  Quer começar mas não sabe por onde? Já pratica e quer evolui? O Yoga
                  iClub é para todos!
                </p>

                <p className={`text-sm ${styles.main_text}`}>
                  Aqui você não precisa ter flexibilidade, força,
                  peso ou idade ideais. Vamos praticar técnicas milenares e alcançar os
                  benefícios juntos!
                </p>

                <p className={`text-sm ${styles.main_text}`}>
                  Yoga iClub é para todos aqueles que acreditam que é
                  possivel ter uma vida equilibrada! Meu objetivo é te ajudar a
                  encontrar a prática e rotina ideais pra você!
                </p>
              </SmallTextContainer>

              <div className={styles.button_container}>
                <button className={`Button ${styles.button}`}>
                  <Link to="prices" duration={2000} delay={100} offset={-96}>
                    Quero começar!
                  </Link>
                </button>

                <span className={`text-md ${styles.span}`}>
                  + de 500 vidas impactadas
                </span>
              </div>
            </div>

            <div className={styles.img_container}
              data-aos="fade"
              data-aos-easing="linear"
              data-aos-duration="1800"
            >
              <div className={styles.outer_element}>
                <img className={styles.bela_img} src={bela} />
              </div>
            </div>
          </Fragment>
      }
    </HeroSectionContainer >
  );
}

const HeroSectionContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding-top: 3vh;
  flex-wrap: wrap;
  ${props => !props.isMobile && `
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto 6rem;
    width: 112rem;
  ` }
`

const ImageContainer = styled.div`
  display: flex;
  height: 65vh;
`

const ImageDoor = styled.div`
  background: var(--C1);
  border-bottom: 16px solid var(--C2);
  border-radius: 333px 333px 0 0;
  border-right: 16px solid var(--C2);
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  position: relative;
  width: 285px;
`

const BelaImg = styled.img`
  bottom: 0;
  height: 100%;
  position: absolute;
  right: 0;
`

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
  padding-bottom: 16px;
`

const TitleText = styled.div`
  color: var(--C4);
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 1.8px;
  text-align: center;
  padding: 24px 16px
`

const SmallTextContainer = styled.div`
  color: var(--C4);
  max-width: 40rem;
  text-align: center;
  justify-content: center;
  width: 328px;
  p {
    margin-bottom: 1rem;
  }
`