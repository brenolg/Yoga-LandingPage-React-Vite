import styles from './DoubtsSection.module.css';

export function DoubtsSection() {
  return (
    <section className={styles.doubts_section} id="doubts">
      <h4 className={`text-3xl ${styles.title}`}>Dúvidas comuns</h4>

      <div
        className={styles.main_container}
        data-aos="fade"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className={styles.doubt_container}>
          <h4 className={`H4 ${styles.question}`}>Tenho passe livre pelas aulas ao vivo?</h4>
          <p className={`text-xl ${styles.answer}`}>Sim, nós temos 4 aulas ao vivo na semana você escolhe quando praticar. As turmas são nas terças e quintas as 9h e as 19h30.</p>
        </div>

        <div className={styles.doubt_container}>
          <h4 className={`H4 ${styles.question}`}>Posso pagar por boleto ou pix?</h4>
          <p className={`text-xl ${styles.answer}`}>Sim, facilitamos todas as condições de pagamento para você.</p>
        </div>

        <div className={styles.doubt_container}>
          <h4 className={`H4 ${styles.question}`}>Como funciona o crédito recorrente?</h4>
          <p className={`text-xl ${styles.answer}`}>O valor total do iClub Pro anual é R$1.920,00, porém esse valor não irá comprometer totalmente o limite do seu cartão de crédito e sim apenas os R$160,00 por mes.</p>
        </div>

        <div className={styles.doubt_container}>
          <h4 className={`H4 ${styles.question}`}>Nas aulas ao vivo o contato é direto com a Isabella Cayuela?</h4>
          <p className={`text-xl ${styles.answer}`}>Sim, você terá contato direto comigo nas aulas ao vivo, onde conseguirei te corrigir sempre que necessário e guiar ao vivo técnicas exclusivas e mais avançadas.</p>
        </div>
      </div>
    </section>
  );
}
