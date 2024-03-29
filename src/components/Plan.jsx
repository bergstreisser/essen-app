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
                setBestellungen={setBestellungen}
            />
        ));
    }

    return (
        <div className="items">
            {/* <h1>Menüplan der Woche</h1> */}
            {renderItems()}
        </div>
    );
}

export default Plan;