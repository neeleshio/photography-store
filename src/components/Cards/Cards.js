import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        minwidth: 250,
        textAlign: 'center',
        margin: 20,
    },
    media: {
        height: 120,
    },
    divider: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    button: {
        textTransform: 'capitalize',
        marginRight: 10,
        marginLeft: 10,
        fontSize: 12,
        color: '#b0b0b0'
    },
    icon: {
        fontSize: 16,
        color: '#827cdf',
        marginRight: 5
    }
}));

function Cards(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h7" component="h4">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.subtitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider />
            <Button className={classes.button}>
                <GetAppRoundedIcon className={classes.icon} />Guidelines
            </Button>
            <Button className={classes.button}>
                <GetAppRoundedIcon className={classes.icon} />Sample File
            </Button>

        </Card>
    );
}



export default Cards