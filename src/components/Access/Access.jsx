import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import { styled } from "styled-components";
import arow from "../../images/arow.png";
import girlYoga from "../../images/girlYoga.png";
import graphic from "../../images/graphic.png";
import onlineTechs from "../../images/onlineTechs.png";
import styles from "./Access.module.css";

export function Access({device}) {
  return (
    <AccessSectionContainer>
      <div className={styles.access_section}>
        <h4 className={`text-3xl ${styles.title}`}>O que terá acesso?</h4>

        <AccessItemContainer isMobile={isMobile}
        data-aos="fade"
        data-aos-easing="linear"
        data-aos-duration="1500"
        >
          <AccessItem>
            <img src={onlineTechs} />
            <p className={isMobile ? "text-sm" : "text-md"}>

              Aulas ao vivo toda terça e quinta as 9h e as 19h com correção e
              ajustes
            </p>
          </AccessItem>
          <Break />


          <AccessItem>
            <img src={graphic} />
            <p className={isMobile ? "text-sm" : "text-md"}>

              Aulas com diferentes níveis e durações para não se sentir
              desestimulado
            </p>
          </AccessItem>
          <Break />


          <AccessItem>
            <img src={girlYoga} />
            <p className={isMobile ? "text-sm" : "text-md"}>

              Módulos desenvolvidos para cultivar disciplina, constância e presença
            </p>
          </AccessItem>
          <Break />

          <AccessItem>
            <img src={arow} />
            <p className={isMobile ? "text-sm" : "text-md"}>

              Estilos diferentes para variar sua prática: Hatha e Vinyasa
            </p>
          </AccessItem>

        </AccessItemContainer>
      </div>
    </AccessSectionContainer>
  );
}

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
  padding-bottom: 2.4rem;
`

const AccessSectionContainer = styled.div`
  background: var(--C2-50p);
  flex-direction: column;
  padding: 16px;
  align-items: center;
  display: flex;
  width: 100%;
`

const AccessItemContainer = styled.div`
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

const AccessItem = styled.div`
  align-items: center;
  background: var(--C2);
  border-radius: 16px;
  height: 352px;
  padding: 10px 13px;
  text-align: center;
  max-width: 265px;
  p {
    margin: 8px;
  }
`

Access.propTypes = ({
  device: PropTypes.string.isRequired,
});