import React from "react";
import styles from './Essenkarte.module.scss';

function Essenkarte({ id, bezeichnung, beschreibung, url, alt, setDate }) {

    const onClickDate = () => {
        //Datum übergeben
        const newDate = new Date();
        setDate(newDate);
    }

    return (
        <div className={styles.essenkarte}>
            <img className={styles.image} src={url} width={155} height={135} alt={alt} />
            <h4><u>{bezeichnung}</u></h4>
            <div className={styles.buchen}>
                <p>Essen buchen:</p>
                <img onClick={onClickDate} className={styles.add} src="/img/add.png" alt="add" />
            </div>
        </div>

        
    );
}

export default Essenkarte;