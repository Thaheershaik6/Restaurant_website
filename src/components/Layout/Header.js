import React from 'react';

import mealsImage from '../assets/Header-image.jpg';

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCratButton';
import Summary from '../UI/Summary';

const Header = (props) => {

    return(
        <div>
            <header className={classes.header}>
                <h2>React Meals</h2>
                <HeaderCartButton></HeaderCartButton>
                </header>
            <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table of full delicious food!'/>
            </div>
            <Summary></Summary>
            
        </div>
    );
}

export default Header;