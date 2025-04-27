import { ReactElement } from "react"
import styles from "./article.module.scss"

interface ArticleProps {
    children: ReactElement
}
export default function Article({children}:ArticleProps) {
    return (
        <article className={styles.box}>
            {children}
        </article>
    )
}