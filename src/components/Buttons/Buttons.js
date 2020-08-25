import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './styles.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        }
    },
    outlinedButton: {
        textTransform: "capitalize",
        borderRadius: 0,
        color: "#999999",
        borderColor: "#999999"
    },

    containedButton: {
        backgroundColor: "#8782d9",
        textTransform: "capitalize",
        borderRadius: 0,
        color: "#fff"
    }

}));

const Buttons = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button className={classes.outlinedButton} variant="outlined" size='small'>
                {props.title1}
            </Button>
            <Button className={classes.containedButton} variant="contained" size='small'>
                {props.title2}
            </Button>
        </div>
    );
}

export default Buttons