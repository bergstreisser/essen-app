import React from 'react';

function Plan({ bestellungen }) {

    return (
        <div className='bestellung'>
            <ul>
                {bestellungen.map((bestellung) => (
                    <div>
                        <li>
                            {bestellung.bez + ": "}
                            {bestellung.datum}
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Plan;