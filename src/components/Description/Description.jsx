import PropTypes from 'prop-types';
import { Fragment } from "react";
import { isMobile } from "react-device-detect";
import { styled } from "styled-components";
import bela from "../../images/bela_description.png";
import styles from "./Description.module.css";

export function Description({device}) {
  return isMobile ? MobileDescriptionSection() : DesktopDescriptionSection()
}

const MobileDescriptionSection = () => {
  return (
    <Fragment>
      <SectionContainer>
        <h4 className="text-3xl">Olá! Eu sou Isabella Cayuela,</h4>

        <img className={styles.image} src={bela}
          data-aos="fade"
          data-aos-easing="linear"
          data-aos-duration="1500"
        />

        <div className="text-xs">

          <p>Há mais de 7 anos estudo, vivencio e ensino o Yoga para quem se propõe a embarcar na sua jornada de autoconhecimento e autocuidado.
          </p>

          <p>
            Minha missão é transformar a vida das pessoas através da prática, fortalecer o corpo e a mente de quem firma o compromisso com sua melhor versão.
          </p>

          <p>
            Com o objetivo de democratizar e acessibilizar o Yoga, criei o Yoga iClub, em 2021. Nossa plataforma conta com mais de 100 aulas entre elas: práticas de Yoga, respiratórios e meditações guiados. Aulas novas são adicionadas na plataforma toda semana.
          </p>

          <p>
            Através da minha metodologia, tivemos mais de 500 vidas impactadas e transformadas. Vem fazer parte dessa comunidade também!
          </p>
        </div>
      </SectionContainer>
      <ContactSection>
        <h4 className="text-3xl">Ainda com dúvidas?</h4>
        <button className={`Button ${styles.button}`}>
          <a
            href="https://api.whatsapp.com/send/?phone=5531996793158"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONVERSE COMIGO
          </a>
        </button>
      </ContactSection>
    </Fragment>
  )
}

const SectionContainer = styled.div`
  background: var(--C2-50p);
  padding: 2.0rem;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  max-width: 1104.789px;
  ${props => props.isMobile && `
    flex-wrap: wrap;
  `}

  h4 {
    color: var(--C4);
    font-family: Syne;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 4.0rem;
  }

  p {
    color: var(--C4);
    margin-bottom: 16px;
  }
`

const ContactSection = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  margin: 2.0rem;

  h4 {
    color: var(--C4);
    text-align: center;
    /* text-2xl */
    font-family: Syne;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 530;
    line-height: 4.0rem;
    margin-bottom: 0.8rem;
  }
`

const DesktopDescriptionSection = () => {
  return (
    <>
      <section className={styles.description_section_background} id="contact">

        <div className={styles.description_section}>

          <img className={styles.image} src={bela}
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-duration="1500"
          />

          <div className={styles.text_container}
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h4 className="text-3xl">Olá! Eu sou Isabella Cayuela,</h4>
            <div className="text-lg">

              <p>Há mais de 7 anos estudo, vivencio e ensino o Yoga para quem se propõe a embarcar na sua jornada de autoconhecimento e autocuidado.
              </p>

              <p>
                Minha missão é transformar a vida das pessoas através da prática, fortalecer o corpo e a mente de quem firma o compromisso com sua melhor versão.
              </p>

              <p>
                Com o objetivo de democratizar e acessibilizar o Yoga, criei o Yoga iClub, em 2021. Nossa plataforma conta com mais de 100 aulas entre elas: práticas de Yoga, respiratórios e meditações guiados. Aulas novas são adicionadas na plataforma toda semana.
              </p>

              <p>
                Através da minha metodologia, tivemos mais de 500 vidas impactadas e transformadas. Vem fazer parte dessa comunidade também!
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.contact_container}>
        <h4 className="text-3xl">Ainda com dúvidas?</h4>
        <button className={`Button ${styles.button}`}>
          <a
            href="https://api.whatsapp.com/send/?phone=5531996793158"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONVERSE COMIGO
          </a>
        </button>
      </div>
    </>
  );
}

Description.propTypes = ({
  device: PropTypes.string.isRequired,
});