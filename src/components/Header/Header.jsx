import PropTypes from 'prop-types';
import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-scroll";
import { styled } from "styled-components";
import yogaLogo from "../../images/yoga_iclub.png";
import styles from "./Header.module.css";

export function Header({ device}) {
  useEffect(() => {
    console.log(device)
  })
  return (
    <HeaderContainer>
      {
        isMobile ?
          <MobileHeader >
            <Link to="start" duration={4000} delay={100} offset={-96}>
              <img src={yogaLogo}></img>
            </Link>
          </MobileHeader>

          :
          <nav className={styles.headerNav}>
            <button className={`text-xl ${styles.button}`}>
              <Link to="start" duration={4000} delay={100} offset={-96}> início </Link>
            </button>
            <button className={`text-xl ${styles.button}`}>
              <Link to="iclub" duration={4000} delay={100} offset={-96}> yoga iclub </Link>
            </button>
            <button className={`text-xl ${styles.button}`}>
              <Link to="students" duration={4000} delay={100} offset={-96}> alunos </Link>
            </button>

            <img src={yogaLogo}></img>

            <button className={`text-xl ${styles.button}`}>
              <Link to="prices" duration={4000} delay={100} offset={-48}> preços </Link>
            </button>
            <button className={`text-xl ${styles.button}`}>
              <Link to="doubts" duration={4000} delay={100} offset={-48}> dúvidas </Link>
            </button>
            <button className={`text-xl ${styles.button}`}>
              <Link to="contact" duration={4000} delay={100} offset={-96}> contato </Link>
            </button>
          </nav>

      }
    </HeaderContainer>
  );
}


const HeaderContainer = styled.div`
  background: var(--C2);
  height: 9.6rem;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
`

const MobileHeader = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  margin: auto;
`

Header.propTypes = ({
  device: PropTypes.string.isRequired,
});