import React from "react";
import classes from "./Order.module.css";
const Order = props => {
  const ingredients = [];
  for (let key in props.ingredients) {
    ingredients.push({ name: key, amount: props.ingredients[key] });
  }
  const ingredientOutput = ingredients.map(ig => {
    if (+ig.amount === 0) {
      return null;
    }
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>${parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
