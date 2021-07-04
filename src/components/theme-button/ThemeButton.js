import styles from './ThemeButton.module.css';

const ThemeButton = ({theme, toggleTheme}) => {
    return (
        <div className={ styles.button }>
            <div className={ theme === "light" ? styles.button__dark : styles.button__light }
                 onClick={ () => {
                     toggleTheme();
                 } }>
                <i className="fas fa-cloud-moon"></i>
            </div>

        </div>
    );
}

export default ThemeButton;
