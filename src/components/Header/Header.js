import React from "react";
import "./Header.css";
import { makeStyles } from "@material-ui/core";
import Image from "./food6_blurred.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    backgroundImage: `url(${Image})`,
    backgroundSize: "130%",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <section className="section2">
        <div className="intro-image bg-image"></div>
        <div className="bg-text">
          <h1 id="slogan">Empty fridge?</h1>
          <h4 id="slogan">Choose your category & order with us!</h4>
        </div>
      </section>
    </div>
  );
}
