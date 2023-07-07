import { isMobile } from "react-device-detect";
import { styled } from "styled-components";
import seal from "../images/seal.svg";


export function SealSection() {
  return (
    <SealSectionContainer isMobile={isMobile}>
      <img src={seal} />
      <p className={isMobile ? "text-sm" : "text-md"}>
        Nos do Yoga iClub criamos o 15payback, que da a você 15 dias para solicitar seu reembolso sem questionamento ou burocracia alguma caso não esteja satisfeito com o produto.
      </p>
    </SealSectionContainer>
  )
}

const SealSectionContainer = styled.div`
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