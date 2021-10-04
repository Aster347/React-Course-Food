import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvalibleMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvalibleMeals />
    </Fragment>
  );
};

export default Meals;
