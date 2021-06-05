import React from "react";
import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useParams } from "react-router";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxHeight: 250,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  media: {
    height: 150,
  },
});

// onClick={()=>{ 
//   props.recipesArray.map((recipe) => {
//   if(recipe.fields.categoryMeal === categoryMeal){
//     console.log(recipe)
//     return  recipe;
// }
// })}}

export default function Home(props) {
  const classes = useStyles();

  //const {categoryMeal} = useParams();
  return (
    <div>
      <div className="showcard">
      <Link to="/breakfast">
        <Card className={classes.root} >
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes.media}
              alt="Breakfast"
              image="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
              title="Breakfast"
            />
            <CardContent>
              <div className="text">
                <Typography gutterBottom variant="h5" component="h2">
                  Breakfast
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Start your day right!
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
      </div>
      <div className="showcard">
      <Link to="/lunch">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes.media}
              alt="Lunch"
              image="https://libbyshootsfood.com/wp-content/uploads/2018/12/002_Food_Palm_Beach_Food_Photographer_Luxury_restaurant_Sant_Ambroseus-1.jpg"
              title="Lunch"
            />
            <CardContent>
              <Typography
                className="text"
                gutterBottom
                variant="h5"
                component="h2"
              >
                Lunch
              </Typography>
              <Typography
                className="text2"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Lunch blabla
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
      </div>
      <div className="showcard">
      <Link to="/dinner">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes.media}
              alt="Dinner"
              image="https://dl.splento.com/cdn/2019/10/11/o_1d1nuei2m120v2p0198et02uf1j.jpg"
              title="Dinner"
            />
            <CardContent>
              <Typography
                className="text"
                gutterBottom
                variant="h5"
                component="h2"
              >
                Dinner
              </Typography>
              <Typography
                className="text2"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Dinner blabla
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
      </div>
    </div>
  );
}
