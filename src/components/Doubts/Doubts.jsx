import PropTypes from 'prop-types';
import React from 'react';
import DoubtCard from './DoubtCard';
import { DoubtsContainer } from './styles';

export default function Doubts({ isMobile, isTabletAndMobile, isTablet }) {
  return (
    <DoubtsContainer className="section-size" id="doubts">
      <h4 className={`${isMobile ? 'text-2xl' : 'text-3xl'} section-main-title`}>Dúvidas comuns</h4>

      <div
        className="main_container"
        data-aos="fade"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >

        <DoubtCard
          isTabletAndMobile={isTabletAndMobile}
          isMobile={isMobile}
          isTablet={isTablet}
          question="Tenho passe livre pelas aulas ao vivo?"
          answer="Sim, nós temos 4 aulas ao vivo na semana você escolhe quando praticar. As turmas são nas terças: 8h e 19h30, e quintas: 8h e 9h."

        />

        <DoubtCard
          isTabletAndMobile={isTabletAndMobile}
          isMobile={isMobile}
          isTablet={isTablet}
          question="Posso pagar por boleto ou pix?"
          answer="Sim, facilitamos todas as condições de pagamento para você."
        />

        <DoubtCard
          isTabletAndMobile={isTabletAndMobile}
          isMobile={isMobile}
          isTablet={isTablet}
          question="Como funciona o crédito recorrente?"
          answer="O valor total do iClub Pro anual é R$2.160,00, porém esse valor não irá comprometer totalmente o limite do seu cartão de crédito e sim apenas os R$180,00 por mês"
        />

        <DoubtCard
          isTabletAndMobile={isTabletAndMobile}
          isMobile={isMobile}
          isTablet={isTablet}
          question="Nas aulas ao vivo o contato é direto com a Isabella Cayuela?"
          answer="Sim, você terá contato direto comigo nas aulas ao vivo, onde conseguirei te corrigir sempre que necessário e guiar ao vivo técnicas exclusivas e mais avançadas."
        />
      </div>
    </DoubtsContainer>
  );
}

Doubts.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isTabletAndMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
};
