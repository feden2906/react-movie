import {NavLink} from "react-router-dom";
import styles from './Menu.module.css';

export const Menu = () => {
    return (
        <div>
            <nav className={ styles.menu }>
                <div className={ styles.menu_item }>
                    <NavLink exact to={ `/` }>Home</NavLink>
                </div>
                <div className={ styles.menu_item }>
                    <NavLink to={ `/movies` }>Movies</NavLink>
                </div>
            </nav>
        </div>
    );
};


