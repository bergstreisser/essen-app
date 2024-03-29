import React from 'react';
import Essenkarte from './Essenkarte';

function Content({ items, essenBuchen }) {

    const renderItems = () => {
        return items.map((item, index) => (
            <Essenkarte
                bezeichnung={item.bezeichnung}
                beschreibung={item.beschreibung}
                url={item.url}
                alt={item.alt}
                buchen={(dateObj, item) => essenBuchen(dateObj, item)}
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