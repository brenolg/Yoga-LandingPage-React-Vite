import accessImg from "../images/access_img.png";
import styles from "./MomentSection.module.css";
import { isMobile } from "react-device-detect";
import { styled } from "styled-components";

export function MomentSection() {
  return isMobile ? MobileMomentSection() : DesktopMomentSection()
}

const MobileMomentSection = () => {
  return (
    <MomentSectionContainer>
      <h4>
        Encontre aulas para o seu momento
      </h4>
      <Break />
      <MomentItem>
        <img className={styles.img} src={accessImg}></img>
      </MomentItem>
      <Break />
      <MomentItem>
        <h4>
          Para quem nunca praticou
        </h4>
        <p className={isMobile ? "text-sm" : "text-md"}>
          Nunca teve contato com a prática e se sente insegura se está
          fazendo certo ou errado.
        </p>
      </MomentItem>
      <Break />
      <MomentItem>
        <h4 className={`H4 ${styles.sub_title}`}>
          Iniciantes
        </h4>
        <p className={isMobile ? "text-sm" : "text-md"}>
          Praticou algumas vezes mas nunca conseguiu dar continuidade.
        </p>
      </MomentItem>
      <Break />
      <MomentItem>
        <h4 className={`H4 ${styles.sub_title}`}>
          Intermediários
        </h4>
        <p className={isMobile ? "text-sm" : "text-md"}>
          Já domina as técnicas mas quer avançar ainda mais na sua prática
          pessoal.
        </p>
      </MomentItem>
      <Break />
      <MomentItem>
        <h4 className={`H4 ${styles.sub_title}`}>
          Avançados
        </h4>
        <p className={isMobile ? "text-sm" : "text-md"}>
          Praticante há mais de 5 anos mas sente falta de ser guiado em sua prática pessoal.
        </p>
      </MomentItem>
    </MomentSectionContainer>
  )
}

const MomentSectionContainer = styled.div`
  padding: 16px;
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
    color: var(--c-4, #123939);
    font-family: Syne;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 40px;
  }
`

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
  padding-bottom: 16px;
`

const MomentItem = styled.div`
  align-items: center;
  border-radius: 16px;
  padding: 4px;
  text-align: center;
  h4 {
    margin-bottom: 16px;
    background: var(--C2);
    border-radius: var(--radius-radius-full);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: var(--c-4, #123939);
    font-family: Ivy;
    font-size: 20px;
    line-height: 36px;
    letter-spacing: 1.26px;
  }
`

const DesktopMomentSection = () => {
  return (
    <section className={styles.moment_section}>
      <h4 className={`text-3xl ${styles.title}`}>
        Encontre aulas para o seu momento
      </h4>

      <div className={styles.main_container}>

        <div className={styles.sub_container}
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
        >
          <div className={styles.text_container}>
            <h4 className={`H4 ${styles.sub_title}`}>
              Para quem nunca praticou
            </h4>
            <p className="text-md">
              Nunca teve contato com a prática e se sente insegura se está
              fazendo certo ou errado.
            </p>
          </div>

          <div className={styles.text_container}>
            <h4 className={`H4 ${styles.sub_title}`}>Intermediários</h4>
            <p className="text-md">
              Já domina as técnicas mas quer avançar ainda mais na sua prática
              pessoal.
            </p>
          </div>
        </div>

        <div className={styles.sub_container}
          data-aos="fade"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img className={styles.img} src={accessImg}></img>
        </div>

        <div className={styles.sub_container}
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
        >
          <div className={styles.text_container}>
            <h4 className={`H4 ${styles.sub_title}`}>Iniciantes</h4>
            <p className="text-md">
              Praticou algumas vezes mas nunca conseguiu dar continuidade
            </p>
          </div>

          <div className={styles.text_container}>
            <h4 className={`H4 ${styles.sub_title}`}>Avançados</h4>
            <p className="text-md">
              Praticante há mais de 5 anos mas sente falta de ser guiado em sua
              prática pessoal.
            </p>
          </div>
        </div>
      </div>
    </section>
  ); F
}