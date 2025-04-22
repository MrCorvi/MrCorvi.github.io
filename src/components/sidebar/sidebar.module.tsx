import styles from "./sidebar.module.scss";

export default function Sidebar(){
    return (
        <nav className={styles.sidebar}>
            <ul role="menubar"
                aria-label='Sidebar del sito'>
                <li role="none">
                    <a role="menuitem" href="#home">
                    Photos
                    </a>
                </li>
                <li role="none">
                    <a role="menuitem" href="#home">
                    Amigurumi
                    </a>
                </li>
                <li role="none">
                    <a role="menuitem" href="#home">
                    About Me
                    </a>
                </li>
                <li role="none">
                    <a role="menuitem" href="#home">
                    Home
                    </a>
                </li>
            </ul>
        </nav>
    );
}