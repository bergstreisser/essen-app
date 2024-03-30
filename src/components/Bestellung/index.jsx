import React from "react";
import styles from './Bestellung.module.scss';
import axios from 'axios';
import sweetalert from 'sweetalert';

function Bestellung({ id, bezeichnung, url, alt, setBestellungen, datum, name }) {

    const essenLoeschen = () => {
        try {
            sweetalert({
                text: "Menü »" + bezeichnung + "« wirklich löschen?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    loeschen();
                }
            });
        } catch (error) {
            sweetalert({
                title: "Löschen nicht geklappt...",
                icon: "error",
            });
            console.error(error);
        }
    }

    const loeschen = async () => {
        await axios.delete(`https://6605dd29d92166b2e3c2ec69.mockapi.io/menue/${id}`);
        setBestellungen(prev => prev.filter(item => Number(item.id) !== Number(id)));
    }

    return (
        <div className={styles.essenkarte}>
            <div className={styles.bezeichnung}>
                <img className={styles.image} src={url} width={155} height={135} alt={alt} />
                <p>{"» " + datum + " «"}</p>
                <h5>{"Für " + name}</h5>
                <h4><u>{bezeichnung}</u></h4>
            </div>
            <div className={styles.buchen}>
                <p>Essen löschen:</p>
                <img onClick={essenLoeschen} className={styles.add} src="img/add.png" alt="add" />
            </div>
        </div>


    );
}

export default Bestellung;