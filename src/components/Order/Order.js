import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, Grid } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "150px",
    marginTop: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 500,
    maxWidth: 700,
  },
  title: {
    fontFamily: "Cookie, cursive",
  },
  ingredients: {
    listStyle: "none",
  },
  back: {
    margin: "30px 0px",
    cursor: "pointer",
    borderRadius: "5px",
    background: "black",
    color: "white",
    padding: "5px 10px",
  },
  // form: {
  //   display: "flex",
  //   flexDirection: "column",
  //   margin: "auto",
  //   width: "fit-content",
  // },
  // formControl: {
  //   marginTop: theme.spacing(2),
  //   minWidth: 120,
  // },
  // formControlLabel: {
  //   marginTop: theme.spacing(1),
  // },
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

export default function Orders(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { slug } = useParams();

  let singleRecipe;
  props.recipesArray &&
    props.recipesArray.map((recipe) => {
      if (recipe.slug === slug) {
        return (singleRecipe = recipe);
      }
    });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <BackButton>Back</BackButton>
          <h1 className={classes.title}>Personalise Your JLS Box</h1>
          <InputLabel>Number of People</InputLabel>
          <Select>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
          </Select>
          <h2 className={classes.title}>
            Please select the needed ingredients
          </h2>
          {singleRecipe ? (
            <section>
              {singleRecipe.ingredients.map((ingredient) => (
                <div className={classes.ingredients}>
                  <li>
                    <input type="checkbox"></input>
                    {ingredient}
                  </li>
                </div>
              ))}
            </section>
          ) : (
            <h1> Unable to load recipe</h1>
          )}
          <h2 className={classes.title}>Total price</h2>
          <h3>€19.99</h3>
          <React.Fragment>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClickOpen}
            >
              Place your order
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="max-width-dialog-title"
            >
              <DialogTitle id="max-width-dialog-title">
                Please LOG IN to proceed
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Enter your log in data below.
                </DialogContentText>
                <form className={classes.form} noValidate>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            size="small"
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            size="small"
                            type="password"
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </form>
              </DialogContent>
              <DialogActions>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleClose}
                  color="secondary"
                >
                  LOG IN
                </Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>
        </CardContent>
      </Card>
    </div>
  );
}
