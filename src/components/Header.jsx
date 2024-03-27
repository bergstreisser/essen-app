import React from 'react';

function Header(props, isPlanVisible = true, isContentVisible = false) {

    const [planVisible, setPlanVisible] = React.useState(isPlanVisible);
    const [contentVisible, setContentVisible] = React.useState(isContentVisible);

    const changeVisibility = () => {
        setPlanVisible(!planVisible);
        setContentVisible(!contentVisible);
        props.onClickPlan(planVisible);
        props.onClickContent(contentVisible);
    }

    return (
        <header>
            <div className="welcome">
                <img onClick={changeVisibility} className="logo" src="/img/logo.png" alt="Logo" />
                <h1>Menü-planer</h1>
            </div>
        </header>
    );
}

export default Header;