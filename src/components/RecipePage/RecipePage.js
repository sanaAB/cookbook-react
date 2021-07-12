import React from "react";
import marked from "marked";
import "./RecipePage.css";
import { makeStyles, Grid } from "@material-ui/core";
import { useParams } from "react-router";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "7px",
    marginBottom: "100px",
  },
  card: {
    maxWidth: 700,
  },
  container: {
    padding: "10px",
  },
  item: {
    padding: "10px",
  },
  back: {
    marginBottom: "40px",
    cursor: "pointer",
    borderRadius: "5px",
    background: "black",
    color: "white",
    padding: "5px 10px",
  },
  title: {
    fontFamily: "Cookie, cursive",
    fontSize: "40px",
  },
  ingredients: {
    listStyle: "none",
  },
}));

function BackButton({ children }) {
  const classes = useStyles();
  let history = useHistory();
  return (
    <button
      className={classes.back}
      type="button"
      onClick={() => history.goBack()}
    >
      {children}
    </button>
  );
}

export default function RecipePage(props) {
  const classes = useStyles();
  console.log(props);
  const { slug, category } = useParams();

  let singleRecipe;
  props.recipesArray &&
    props.recipesArray.map((recipe) => {
      if (recipe.slug === slug) {
        return (singleRecipe = recipe);
      }
    });
  console.log(props.isLoading);
  let postDescription = "";
  if (singleRecipe) {
    postDescription = marked(singleRecipe.description);
  }
  return (
    <div className={classes.root}>
      {singleRecipe ? (
        <Card className={classes.card}>
          <CardContent>
            <Grid container className={classes.container}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.item}
              >
                <BackButton>Back</BackButton>
                <div className={classes.title}>{singleRecipe.name}</div>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.item}
              >
                {singleRecipe.image && (
                  <img
                    className="recipe_image"
                    src={singleRecipe.image}
                    alt={singleRecipe.name}
                  />
                )}
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.item}
              >
                <Link to={`/${category}/${singleRecipe.slug}/order`}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                  >
                    Order this recipe now!
                  </Button>
                </Link>
              </Grid>
            </Grid>

            <Grid container spacing={1} className={classes.container}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.item}
              >
                <h2 className={classes.title}>ingredients</h2>
                <section>
                  {singleRecipe.ingredients.map((ingredient) => (
                    <div className={classes.ingredients}>
                      <li>{ingredient}</li>
                    </div>
                  ))}
                </section>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.item}
              >
                <h2 className={classes.title}>description</h2>
                {
                  <div>
                    <section
                      dangerouslySetInnerHTML={{ __html: postDescription }}
                    />
                  </div>
                }
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ) : (
        <h1> Unable to load recipe</h1>
      )}
    </div>
  );
}
