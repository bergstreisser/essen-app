import React from "react";
import styles from './Essenkarte.module.scss';
import Calendar from "react-calendar";

function Essenkarte({ id, bezeichnung, beschreibung, url, alt, setDate }) {

    const onClickDate = date => {
        //setDate(date);
    }

    const onClickBeschreibung = () => {
        alert(beschreibung);
    }

    return (
        <div className={styles.essenkarte}>
            <img onClick={onClickBeschreibung} className={styles.image} src={url} width={155} height={135} alt={alt} />
            <h4><u>{bezeichnung}</u></h4>
            <div className={styles.buchen}>
                <p>Essen buchen:</p>
                <img onClick={onClickDate} className={styles.add} src="/img/add.png" alt="add" />
                {/* <Calendar onChange={setDate} /> */}
            </div>
        </div>


    );
}

export default Essenkarte;