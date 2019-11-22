import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong> {props.price.toFixed(2)}</strong>
      </p>
      {controls.map(item => (
        <BuildControl
          key={item.label}
          label={item.label}
          added={() => props.ingredientsAdded(item.type)}
          removed={() => props.ingredientsRemoved(item.type)}
          disabled={props.disabled[item.type]}
        />
      ))}
      <button
        onClick={props.ordered}
        className={classes.OrderButton}
        disabled={!props.purchasable}
      >
        {props.isAuth ? "ORDER NOW" : "Signup"}
      </button>
    </div>
  );
};

export default BuildControls;
