import styles from "./Footer.module.css";
import FooterLogo from "./FooterLogo";
import FotterInfo from "./FotterInfo";

const Footer = () => {
  return (
    <footer className={styles.rodape}>
        <div className={styles.rodape_informacoes}>
            <FooterLogo />
            <FotterInfo />
        </div>
    </footer>
  );
};

export default Footer;
