import React from "react";
import styles from './Bestellung.module.scss';
import axios from 'axios';

function Bestellung({ id, bezeichnung, url, alt, setBestellungen }) {

    const essenLoeschen = () => {
        axios.delete(`https://6605dd29d92166b2e3c2ec69.mockapi.io/menue/${id}`);
        setBestellungen(prev => prev.filter(item => Number(item.id) !== Number(id)));
    }

    return (
        <div className={styles.essenkarte}>
            <div>
                <img className={styles.image} src={url} width={155} height={135} alt={alt} />
                <h4><u>{bezeichnung}</u></h4>
            </div>
            <div className={styles.buchen}>
                <p>Essen löschen:</p>
                <img onClick={essenLoeschen} className={styles.add} src="/img/add.png" alt="add" />
            </div>
        </div>


    );
}

export default Bestellung;