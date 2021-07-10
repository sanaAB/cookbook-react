import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, Grid } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

export default function Orders() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <div>
      <h1>Personalise Your JLS Box</h1>

      <ul>
        <li>Eggs</li>
        <li>oil</li>
        <li>Flour</li>
        <li>Black Pepper</li>
        <li>Salt</li>
        <li>Butter</li>
        <li>Baked Beans</li>
      </ul>
      <h3>The final price is ...</h3>
      <h3 className="price">€19.99</h3>
      <React.Fragment>
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
          Place your order
        </Button>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          onClose={handleClose}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">
            Please log in in order to proceed
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Enter your log in data below.</DialogContentText>
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
    </div>
  );
}
