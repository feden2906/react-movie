import Menu from "../menu/Menu";
import Search from "../search/Search";
import styles from './Header.module.css';

const Header = ({getAllData}) => {
    return (
        <div className={ styles.header }>
            <Menu/>
            <Search searchFilm={ getAllData }/>
        </div>
    );
}

export default Header;
