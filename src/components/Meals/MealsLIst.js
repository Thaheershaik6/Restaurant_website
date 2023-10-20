import React from "react";

import classes from './MealsList.module.css'

const MealsList = (props) => {

    return(
        <section className={classes.list}>
                {props.children}
        </section>
    )
}

export default MealsList;