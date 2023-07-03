import styles from "./PricesSection.module.css";

export function PricesSection() {
  return (
    <section className={ styles.access_section_background}>
      <div className={styles.prices_section}>
      <h4 className={`text-3xl ${styles.title}`}>
      Planos e preços:
      </h4>

      <div className={styles.main_container}>
        
        <div className={styles.text_container}> 
          <div className={styles.sub_container}>
            <div className={styles.title_container}>
              <h1 className={styles.h1}>IClub</h1> <h4 className="text-xl">anual</h4> 
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
          quero começar
          </button>
        </div>

        <div className={`${styles.text_container} ${styles.premium}`}> 
          <div className={styles.sub_container}>
            <div className={styles.title_container}>
              <h1 className={styles.h1}>IClub PRO</h1> <h4 className="text-xl">(anual)</h4> 
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
          quero começar
          </button>
        </div>

        <div className={styles.text_container}> 
          <div className={styles.sub_container}>
            <div className={styles.title_container}>
              <h1 className={styles.h1}>IClub</h1> <h4 className="text-xl">mensal</h4> 
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
          quero começar
          </button>
        </div>

      </div>
      </div>
    </section>
  );
}
