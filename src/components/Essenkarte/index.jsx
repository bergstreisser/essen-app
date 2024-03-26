import React from "react";
import styles from './Essenkarte.module.scss';

function Essenkarte({ id, bezeichnung, beschreibung, url, alt }) {
    return (
        <div className={styles.essenkarte}>
            <img src={url} width={155} height={135} alt={alt} />
            <h4><u>{bezeichnung}</u></h4>
            <h5>{beschreibung}</h5>
            <p>Essen buchen</p>
            <h5>Buchungen anzeigen</h5>
        </div>
    );
}

export default Essenkarte;