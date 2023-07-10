import PropTypes from 'prop-types';
import { isMobile } from "react-device-detect";
import { Link } from "react-scroll";
import { styled } from "styled-components";
import instagram from "../../images/instagram.svg";
import whatsapp from "../../images/whatsapp.svg";
import logo from "../../images/yoga_iclub.png";
import youtube from "../../images/youtube.svg";
import styles from "./Footer.module.css";

export function Footer({device}) {
  return (
    <footer>
      <FooterContainer isMobile={isMobile}>
        {
          !isMobile &&
          <ScrollContainer isMobile={isMobile}>
            <div className={styles.scroll_sub_container}>
              <button className="text-md ">
                <Link to="start" duration={2000} delay={100} offset={-96}> início </Link>
              </button>

              <button className="text-md ">
                <Link to="iclub" duration={2000} delay={100} offset={-96}> iclub </Link>
              </button>
            </div>

            <div className={styles.scroll_sub_container}>

              <button className="text-md">
                <Link to="students" duration={2000} delay={100} offset={-96}> alunos </Link>
              </button>
              <button className="text-md">
                <Link to="prices" duration={2000} delay={100} offset={-48}> preços </Link>
              </button>
            </div>

            <div className={styles.scroll_sub_container}>
              <button className="text-md">
                <Link to="doubts" duration={2000} delay={100} offset={-48}> dúvidas </Link>
              </button>
              <button className="text-md">
                <Link to="contact" duration={2000} delay={100} offset={-96}> contato </Link>
              </button>
            </div>
          </ScrollContainer>
        }

        <div>
          <a
            href="https://www.instagram.com/isabellacayuela/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} />
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=5531996793158"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} />
          </a>

          <a
            href="https://www.youtube.com/@isabellacayuelayoga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} />
          </a>
        </div>

        <img src={logo} />
      </FooterContainer>

    </footer>
  );
}

const FooterContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  ${props => !props.isMobile && "width: 112rem;"}
  margin: auto;
`

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${props => !props.isMobile && "width: 550px;"}
`

Footer.propTypes = ({
  device: PropTypes.string.isRequired,
});