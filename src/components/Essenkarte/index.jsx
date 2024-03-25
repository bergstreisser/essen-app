import React from "react";
import styles from './Essenkarte.module.scss';

function Essenkarte() {
    return (
        <div className={styles.essenkarte}>
            <img width={155} height={135} alt="test" />
            <h5>Bezeichnung</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Preis: </span>
                    <b>Euro</b>
                </div>
                <div>
                    <img src="img/checked.svg" alt="Plus" />
                </div>
            </div>
        </div>
    );
}

export default Essenkarte;