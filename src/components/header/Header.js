import {Menu} from "../menu";
import {Search} from "../search";
import styles from './Header.module.css';

export const Header = ({getAllData, currPage}) => {
    return (
        <div className={ styles.header }>
            <Menu/>
            <Search searchFilm={ getAllData } currPage={ currPage }/>
        </div>
    );
};
