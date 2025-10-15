import BotaoPrincipal from "componentes/BotaoPrincipal";
import styles from "./NaoEncontrada.module.css";
import erro404 from "assets/erro_404.png";

export default function NaoEncontrada() {
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando? Aguarde uns
          instantes e recarregue a página, ou volte para a página inicial.
        </p>
        <p className={styles.paragrafo}>
          instantes e recarregue a página, ou volte para a página inicial.
        </p>

        <div className={styles.botao}>
          <BotaoPrincipal>Voltar</BotaoPrincipal>
        </div>

        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt="Dog de oculos"
        />
      </div>
      <div className={styles.espacoEmBranco}>

      </div>
    </>
  );
}
