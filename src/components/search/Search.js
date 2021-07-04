import {useState} from "react";
import styles from './Search.module.css';

export const Search = ({searchFilm}) => {
    const [value, setValue] = useState('');

    return (
        <div>
            <input className={ styles.mkSearchForm__input } type="text" value={ value } placeholder={ `Find movie...` }
                   onChange={ ({target: {value}}) => setValue(value) }/>
            <button className={ styles.mkSearchForm__button } onClick={ () => {
                searchFilm('', value);
                setValue('');
            } }>Search
            </button>
        </div>
    );
};

