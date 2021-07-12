import React from "react";
import "./Navbar.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Image from "./food5.jpg";
import TranslateIcon from "@material-ui/icons/Translate";
import Select from "@material-ui/core/Select";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    top: 0,
    bottom: "auto",
    boxShadow: "0 4px 5px 0 grey, 0 6px 20px 10px lightgrey",
    marginBottom: "5px",
    backgroundImage: `url(${Image})`,
    backgroundSize: "130%",
    [theme.breakpoints.up(600)]: {
      backgroundImage: `url(${Image})`,
      backgroundSize: "110%",
    },
    [theme.breakpoints.up(800)]: {
      backgroundImage: `url(${Image})`,
      backgroundSize: "300%",
    },
  },
  title: {
    flexGrow: 30,
    fontFamily: "Cookie, cursive",
    fontSize: 23,
    color: "black",
    display: "none",
    margin: "7px 35px",
    paddingLeft: "90px",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  icons: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  icon: {
    color: "black",
    cursor: "pointer",
    height: 40,
    width: 40,
    padding: 5,
    "&:hover": {
      transform: "scale(1.2)",
    },
    [theme.breakpoints.down(350)]: {
      height: 30,
      width: 30,
      padding: 3,
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [language, setLanguage] = React.useState("");

  const handleChange = (event) => {
    setLanguage(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.navbar} position="static">
        <Toolbar>
          <Link to="/">
            <img
              className="logo"
              src="/jls-logo3.PNG"
              alt="logo"
              edge="start"
            />
          </Link>
          <span className={classes.title}>
            “I cook with wine, sometimes I even add it to the food.” ― W.C.
            Fields
          </span>
          <div className={classes.icons}>
            <Link to="/">
              <IconButton color="inherit" edge="end">
                <HomeIcon className={classes.icon} />
              </IconButton>
            </Link>
            <Link to="/contact-us">
              <IconButton color="inherit" edge="end">
                <ContactPhoneIcon className={classes.icon} />
              </IconButton>
            </Link>

            <IconButton onClick={handleClickOpen} color="inherit" edge="end">
              <TranslateIcon className={classes.icon} />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
              <DialogContent>
                <form className={classes.container}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="demo-dialog-native">
                      Language
                    </InputLabel>
                    <Select
                      native
                      value={language}
                      onChange={handleChange}
                      input={<Input id="demo-dialog-native" />}
                    >
                      <option value={1}>English</option>
                      <option value={2}>German</option>
                      <option value={3}>Arabic</option>
                    </Select>
                  </FormControl>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

/*const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  export default function ButtonAppBar() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          <Button color="inherit">Logo</Button>
            <Typography variant="h6" className={classes.title}>
              COOKBOOK
            </Typography>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"></IconButton>
            <MenuIcon />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  */
/*<IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>*/
