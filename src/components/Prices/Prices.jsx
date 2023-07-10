import PropTypes from 'prop-types';
import { isMobile } from "react-device-detect";
import { styled } from "styled-components";
import styles from "./Prices.module.css";

export function Prices({device}) {
  return isMobile ? MobilePricing() : DesktopPricing()
}

const MobilePricing = () => {
  return <SectionContainer id="prices">
    <h4 className={`text-3xl`}>
      Planos e preços:
    </h4>
    <div className={`${styles.text_container} ${styles.premium}`}
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="1500"
    >
      <div className={styles.sub_container}>
        <div className={styles.title_container}>
          <h1 className={styles.h1}>iClub Pro</h1> <h4 className="text-xl">(anual)</h4>
        </div>

        <h4 className={styles.price} >R$ 160,00/mês</h4>

        <ul className={`text-md ${styles.list}`}>
          <li>Acesso as aulas AO VIVO 2x por semana</li>
          <li>Acesso a plataforma com aulas gravadas</li>
          <li>Temas novos todos os meses</li>
          <li>Aulas de Hatha e Vinyasa</li>
          <li>Aulas práticas e teóricas</li>
          <li>Aulas didáticas para avançar e   lapidar sua prática</li>
          <li>Acesso a bônus exclusivos da comunidade</li>
          <li>Pagamento recorrente, 12x de R$160 (não compromete o limite do cartão)</li>
        </ul>
      </div>

      <button className={`Button ${styles.button}`}>
        <a
          href="https://pay.hotmart.com/J71174272X?off=yxz27hdf&bid=1688599747445"
          target="_blank"
          rel="noopener noreferrer"
        >
          quero começar
        </a>
      </button>
    </div>
    <Break />

    <div className={styles.text_container}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <div className={styles.sub_container}>
            <div className={styles.title_container}>
              <h1 className={styles.h1}>iClub</h1> <h4 className="text-xl">anual</h4>
            </div>

            <h4 className={styles.price} >R$ 39,90/mês</h4>

            <ul className={`text-md ${styles.list}`}>
              <li>Acesso a plataforma com aulas gravadas</li>
              <li>Temas novos todos os meses</li>
              <li>Aulas de Hatha e Vinyasa</li>
              <li>Aulas práticas e teóricas</li>
              <li>Aulas didáticas para avançar e lapidar sua prática</li>
              <li>Acesso a bônus exclusivos da comunidade</li>
              <li>Pagamento parcelado, até 12x de R$39,90</li>
            </ul>
          </div>

          <button className={`Button ${styles.button}`}>
            <a
              href="https://pay.hotmart.com/J71174272X?off=sghdkt84&bid=1688599677773"
              target="_blank"
              rel="noopener noreferrer"
            >
              quero começar
            </a>
          </button>
        </div>
        <Break />

        <div className={styles.text_container}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <div className={styles.sub_container}>
            <div className={styles.title_container}>
              <h1 className={styles.h1}>iClub</h1> <h4 className="text-xl">mensal</h4>
            </div>

            <h4 className={styles.price} >R$ 69,90/mês</h4>

            <ul className={`text-md ${styles.list}`}>
              <li>Acesso a plataforma com aulas gravadas</li>
              <li>Temas novos todos os meses</li>
              <li>Aulas de Hatha e Vinyasa</li>
              <li>Aulas práticas e teóricas</li>
              <li>Aulas didáticas para avançar e lapidar sua prática</li>
              <li>Acesso a bônus exclusivos da comunidade</li>
              <li>Pagamento mensal</li>
            </ul>
          </div>

          <button className={`Button ${styles.button}`}>
            <a
              href="https://pay.hotmart.com/J71174272X?off=4o7gr397"
              target="_blank"
              rel="noopener noreferrer"
            >
              quero começar
            </a>
          </button>
        </div>
        <Break />
    
  </SectionContainer>
}

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
  padding-bottom: 32px;
`

const SectionContainer = styled.div`
  background: var(--C2-50p);
  padding: 16px 0px;
  color: var(--C4);
  text-align: center;
  
  font-family: Syne;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    margin-bottom: 16px;
  }
`

const DesktopPricing = () => {
  return <section className={styles.access_section_background} id="prices">
    <div className={styles.prices_section}>
      <h4 className={`text-3xl ${styles.title}`}>
        Planos e preços:
      </h4>

      <div className={styles.main_container}>

        <div className={styles.text_container}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <div className={styles.sub_container}>
            <div className={styles.title_container}>
              <h1 className={styles.h1}>iClub</h1> <h4 className="text-xl">anual</h4>
            </div>

            <h4 className={styles.price} >R$ 39,90/mês</h4>

            <ul className={`text-md ${styles.list}`}>
              <li>Acesso a plataforma com aulas gravadas</li>
              <li>Temas novos todos os meses</li>
              <li>Aulas de Hatha e Vinyasa</li>
              <li>Aulas práticas e teóricas</li>
              <li>Aulas didáticas para avançar e lapidar sua prática</li>
              <li>Acesso a bônus exclusivos da comunidade</li>
              <li>Pagamento parcelado, até 12x de R$39,90</li>
            </ul>
          </div>

          <button className={`Button ${styles.button}`}>
            <a
              href="https://pay.hotmart.com/J71174272X?off=sghdkt84&bid=1688599677773"
              target="_blank"
              rel="noopener noreferrer"
            >
              quero começar
            </a>
          </button>
        </div>

        <div className={`${styles.text_container} ${styles.premium}`}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
        >
          <div className={styles.sub_container}>
            <div className={styles.title_container}>
              <h1 className={styles.h1}>iClub Pro</h1> <h4 className="text-xl">(anual)</h4>
            </div>

            <h4 className={styles.price} >R$ 160,00/mês</h4>

            <ul className={`text-md ${styles.list}`}>
              <li>Acesso as aulas AO VIVO 2x por semana</li>
              <li>Acesso a plataforma com aulas gravadas</li>
              <li>Temas novos todos os meses</li>
              <li>Aulas de Hatha e Vinyasa</li>
              <li>Aulas práticas e teóricas</li>
              <li>Aulas didáticas para avançar e   lapidar sua prática</li>
              <li>Acesso a bônus exclusivos da comunidade</li>
              <li>Pagamento recorrente, 12x de R$160 (não compromete o limite do cartão)</li>
            </ul>
          </div>

          <button className={`Button ${styles.button}`}>
            <a
              href="https://pay.hotmart.com/J71174272X?off=yxz27hdf&bid=1688599747445"
              target="_blank"
              rel="noopener noreferrer"
            >
              quero começar
            </a>
          </button>
        </div>

        <div className={styles.text_container}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <div className={styles.sub_container}>
            <div className={styles.title_container}>
              <h1 className={styles.h1}>iClub</h1> <h4 className="text-xl">mensal</h4>
            </div>

            <h4 className={styles.price} >R$ 69,90/mês</h4>

            <ul className={`text-md ${styles.list}`}>
              <li>Acesso a plataforma com aulas gravadas</li>
              <li>Temas novos todos os meses</li>
              <li>Aulas de Hatha e Vinyasa</li>
              <li>Aulas práticas e teóricas</li>
              <li>Aulas didáticas para avançar e lapidar sua prática</li>
              <li>Acesso a bônus exclusivos da comunidade</li>
              <li>Pagamento mensal</li>
            </ul>
          </div>

          <button className={`Button ${styles.button}`}>
            <a
              href="https://pay.hotmart.com/J71174272X?off=4o7gr397"
              target="_blank"
              rel="noopener noreferrer"
            >
              quero começar
            </a>
          </button>
        </div>

      </div>
    </div>
  </section>
}

Prices.propTypes = ({
  device: PropTypes.string.isRequired,
});