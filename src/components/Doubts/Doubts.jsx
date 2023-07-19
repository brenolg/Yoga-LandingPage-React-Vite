import PropTypes from 'prop-types';
import React from 'react';
import DoubtCard from './DoubtCard';
import { DoubtsContainer } from './styles';

export default function Doubts({ isMobile }) {
  return (
    <DoubtsContainer className="section-size" id="doubts">
      <h4 className="text-3xl section-main-title">Dúvidas comuns</h4>

      <div
        className="main_container"
        data-aos="fade"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >

        <DoubtCard
          isMobile={isMobile}
          question="Tenho passe livre pelas aulas ao vivo?"
          answer="Sim, nós temos 4 aulas ao vivo na semana você escolhe quando praticar. As turmas são nas terças e quintas as 9h e as 19h30."
        />

        <DoubtCard
          isMobile={isMobile}
          question="Posso pagar por boleto ou pix?"
          answer="Sim, facilitamos todas as condições de pagamento para você."
        />

        <DoubtCard
          isMobile={isMobile}
          question="Como funciona o crédito recorrente?"
          answer="O valor total do iClub Pro anual é R$1.920,00, porém esse valor não irá comprometer totalmente o limite do seu cartão de crédito e sim apenas os R$160,00 por mes"
        />

        <DoubtCard
          isMobile={isMobile}
          question="Nas aulas ao vivo o contato é direto com a Isabella Cayuela?"
          answer="Sim, você terá contato direto comigo nas aulas ao vivo, onde conseguirei te corrigir sempre que necessário e guiar ao vivo técnicas exclusivas e mais avançadas."
        />
      </div>
    </DoubtsContainer>
  );
}

Doubts.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
