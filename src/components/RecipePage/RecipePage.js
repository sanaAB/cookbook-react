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
import GetAppIcon from "@material-ui/icons/GetApp";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Popper from "@material-ui/core/Popper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
    marginBottom: "100px",
  },
  card: {
    maxWidth: 700,
  },
  container: {
    padding: "20px",
  },

  back: {
    marginBottom: "40px",
    cursor: "pointer",
    borderRadius: "5px",
    background: "black",
    color: "white",
    padding: "5px 10px",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  title: {
    fontFamily: "Cookie, cursive",
    fontSize: "50px",
    marginTop: "20px",
    marginBottom: "27px",
    letterSpacing: "3px",
  },
  ingredients: {
    listStyle: "none",
  },
  button: {
    margin: "20px 5px",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  save: {
    fontSize: "50px",
  },
  paper: {
    border: "1px solid grey",
    fontSize: "15px",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

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
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={classes.item}
                >
                  <Button
                    aria-describedby={id}
                    type="button"
                    onClick={handleClick}
                  >
                    <FavoriteBorderIcon className={classes.save} />
                  </Button>
                  <Popper id={id} open={open} anchorEl={anchorEl}>
                    <div className={classes.paper}>Recipe saved!</div>
                  </Popper>
                </Grid>
              </Grid>
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
              <h2 className={classes.title}>instructions</h2>
              {
                <div>
                  <section
                    dangerouslySetInnerHTML={{ __html: postDescription }}
                  />
                </div>
              }
            </Grid>

            <Button
              variant="outlined"
              color="default"
              className={classes.button}
            >
              <GetAppIcon
                onClick={() => {
                  alert("✔️ Download in progress");
                }}
              />
            </Button>
            <Button
              variant="outlined"
              color="default"
              className={classes.button}
            >
              <ShareIcon />
            </Button>
          </CardContent>
        </Card>
      ) : (
        <h1> Unable to load recipe</h1>
      )}
    </div>
  );
}
