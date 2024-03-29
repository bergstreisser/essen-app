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
            {renderItems()}
        </div>
    );
}

export default Plan;