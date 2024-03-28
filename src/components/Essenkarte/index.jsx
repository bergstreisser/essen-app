import React from "react";
import styles from './Essenkarte.module.scss';
import Calendar from "react-calendar";
//import 'react-calendar/dist/Calendar.css';

function Essenkarte({ id, bezeichnung, beschreibung, url, alt, setDate }) {

    const [cardVisible, setCardVisible] = React.useState(true);
    const [calendarVisible, setCalendarVisible] = React.useState(false);

    const onClickBeschreibung = () => {
        alert(beschreibung);
    }

    const changeVisibility = () => {
        setCardVisible(!cardVisible);
        setCalendarVisible(!calendarVisible);
    }

    return (
        <div className={styles.essenkarte}>
            <div>
                {cardVisible && <img onClick={onClickBeschreibung} className={styles.image} src={url} width={155} height={135} alt={alt} />}
                {cardVisible && <h4><u>{bezeichnung}</u></h4>}
                {calendarVisible && <Calendar onChange={setDate} className={styles.calendar} />}
            </div>
            <div className={styles.buchen}>
                <p>Essen buchen:</p>
                <img onClick={changeVisibility} className={styles.add} src="/img/add.png" alt="add" />
            </div>
        </div>


    );
}

export default Essenkarte;