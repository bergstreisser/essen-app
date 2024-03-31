import React from 'react';
import Bestellung from './Bestellung';

function Plan({ bestellungen, setBestellungen }) {

    const renderItems = () => {
        return bestellungen.map((item, index) => (
            <Bestellung
                bezeichnung={item.bezeichnung}
                url={item.url}
                alt={item.alt}
                id={item.id}
                datum={item.datum}
                name={item.name}
                setBestellungen={setBestellungen}
            />
        ));
    }

    return (
        <div className="items">
            {bestellungen.length > 0 ? renderItems() : <h3>Keine Buchungen vorhanden...</h3>}
        </div>
    );
}

export default Plan;