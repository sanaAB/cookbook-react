import React from "react";
import "./About.css";
import { makeStyles } from "@material-ui/core/styles";
import Image from "./jls-logo.PNG";

export default function About() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      alignItems: "center",
      marginBottom: "100px",
      margin: "0px 30px",
    },
    team: {
      backgroundImage: `url(${Image})`,
      backgroundSize: "100%",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      padding: "0px 40px",
      backgroundColor: "#474e5d",
      color: "black",
      paddingBottom: "5px",
      [theme.breakpoints.down(350)]: {
        backgroundSize: "280%",
      },
    },
    p: {
      fontSize: "15px",
      paddingBottom: "25px",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <div className="title">About Us</div>
        <p className={classes.p}>
          Our passion for food at JLS has made us experts in the art of food
          blogging, food photography, videography, food styling with a mission
          of helpng others cook their favorite fresh meals by themselves from
          its raw state to its plating.
        </p>
      </div>

      <div className={classes.team}>
        <h2 className="title">Who are we?</h2>
        <p>
          <a href="https://github.com/sanaAB">Sana Abo Helal, Berlin</a>
        </p>

        <p>
          <a href="https://github.com/Jemiydaud?tab=repositories">
            Jemila Daud, Frankfurt
          </a>
        </p>
        <p>
          <a href="https://github.com/Lasoli">Larissa Lipke, Kassel</a>
        </p>
      </div>

      <div>
        <h2 className="title">Tech-Stack</h2>
        <ul>
          <li>React</li>
          <li>Material UI</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>Contentful</li>
          <li>Vercel</li>
        </ul>
      </div>
    </div>
  );
}
