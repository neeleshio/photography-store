import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 250,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        paddingTop: 0,
        margin: 25,
        borderRadius: 4,

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
}));

const Cards2 = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title={props.title}
            />
            <CardMedia
                className={classes.media}
                image='https://www.dineout.co.in/blog/wp-content/uploads/2018/10/WhatsApp-Image-2018-10-18-at-8.06.23-PM.jpeg'
                title="Paella dish"
            />
            <CardContent>
                <Typography gutterBottom variant="h7" >
                    Template 001
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    FOOD
          </Typography>
            </CardContent>
        </Card>
    );
}

export default Cards2