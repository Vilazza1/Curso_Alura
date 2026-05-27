import styles from './BotaoPrincipal.module.css'


export default function BotaoPrincipal ({children}) {
    return(
        <button className={styles.botaoLer}>
            {children}
        </button>
    )
}