import React from 'react';
import Essenkarte from './Essenkarte';

function Content({ items, selectDate, selectBezeichnung }) {

    const renderItems = () => {
        return items.map((item, index) => (
            <Essenkarte
                bezeichnung={item.bezeichnung}
                beschreibung={item.beschreibung}
                url={item.url}
                alt={item.alt}
                setDate={(obj) => selectDate(obj)}
                setBezeichnung={(bez) => selectBezeichnung(bez)}
            />
        ));
    }

    return (
        <div className="items">
            {renderItems()}
        </div>
    );
}

export default Content;