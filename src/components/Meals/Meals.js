import React, { Fragment } from "react";
import Summary from "../UI/Summary";
import AvaliableMeals from "./AvaliableMeals";

const Meals = () => {

    return(
        <Fragment>
            <Summary></Summary>
            <AvaliableMeals></AvaliableMeals>
        </Fragment>
    )
}

export default Meals;