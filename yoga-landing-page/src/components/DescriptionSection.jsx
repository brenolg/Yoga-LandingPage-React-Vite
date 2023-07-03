import bela from "../images/bela_description.png";
import styles from "./DescriptionSection.module.css";

export function DescriptionSection() {
  return (
    <>
    <section className={styles.description_section_background }>

      <div className={styles.description_section}>
        <img className={styles.image} src={bela }></img>

        <div className={styles.text_container}>
            <h4 className="text-3xl">Olá! Eu sou Isabella Cayuela,</h4>
            <p className="text-lg">Há mais de 7 anos estudo, vivencio e ensino o Yoga para quem se propõe a embarcar na sua jornada de autoconhecimento e autocuidado. 

            Minha missão é transformar a vida das pessoas através da prática, fortalecer o corpo e a mente de quem firma o compromisso com sua melhor versão.

            Com o objetivo de democratizar e acessibilizar o Yoga, criei o Yoga iClub, em 2021. Nossa plataforma conta com mais de 100 aulas entre elas: práticas de Yoga, respiratórios e meditações guiados. Aulas novas são adicionadas na plataforma toda semana.
            
            Através da minha metodologia, tivemos mais de 500 vidas impactadas e transformadas. Vem fazer parte dessa comunidade também!
            </p>
        </div>
      </div>
    </section>

    <div className={styles.contact_container}>
      <h4 className="text-3xl">Ainda com dúvidas?</h4>
      <button className={`Button ${styles.button}`}>CONVERSE COMIGO</button>
    </div>
    </>
  );
}
