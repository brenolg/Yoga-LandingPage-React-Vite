import { isMobile } from "react-device-detect";
import { styled } from "styled-components";
import seal from "../images/seal.svg";


export function SealSection() {
  return (
    <SealSectionContainer isMobile={isMobile}>
      <BackgroundBlur isMobile={isMobile} />
      <img src={seal} />
      <p className={isMobile ? "text-sm" : "text-md"}>
        Nos do Yoga iClub criamos o 15payback, que da a você 15 dias para solicitar seu reembolso sem questionamento ou burocracia alguma caso não esteja satisfeito com o produto.
      </p>
    </SealSectionContainer>
  )
}

const BackgroundBlur = styled.div`
  background: var(--C2);
  border-radius: 1180px;
  filter: blur(27.5px);
  z-index: -1;
  -webkit-filter: blur(27.5px);
  position: absolute;
  height: 100%;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
  }

  ${props => props.isMobile ? 
  `
    width: 100%;
    height: 100%;
  `
    :
  `
    width: 130%;
    height: 100%;
    margin: -100px;
  `
  }
`

const SealSectionContainer = styled.div`
  filter: blur(0px);
  -webkit-filter: blur(0px);
  color: var(--C4);
  border-radius: 1180px;
  flex-direction: column;
  padding: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  padding-bottom: 32px;
  p {
    ${props => props.isMobile && `padding: 16px;`}  
    color: var(--C4);
    text-align: center;
    max-width: 472px;
  }

  ${props => !props.isMobile && `
    flex-direction: row;
    justify-content: center;
    justify-content: space-between;
    width: 70rem;
    margin: auto;
  `}
`