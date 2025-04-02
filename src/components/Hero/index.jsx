import styles from "./styles.module.css";

export default function Hero({ imgLink }) {
  return (
    <div className={styles.Container}>
      <div className={styles.content}>
        <h1>Apoio para quem mais precisa!</h1>
        <p>Solicite benefícios sociais de forma simples e rápida.</p>
        <button>Solicitar Beneficio</button>
      </div>
    </div>
  );
}
