import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

const NavigationItem = props => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink to={props.link} exact={props.exact} activeClassName={classes.active}>
        {props.children}
      </NavLink>
      {/* <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}
      </a> */}
    </li>
  );
};

export default NavigationItem;
