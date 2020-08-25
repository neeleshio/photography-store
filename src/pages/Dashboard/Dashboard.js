import React from 'react'
import Layout from '../../components/Layout/Layout'
import Charts from '../../components/Charts/Charts'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Cards3 from '../../components/Cards/Cards3'
import Cards4 from '../../components/Cards/Cards4'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import './styles.scss'



import './styles.scss'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    control: {
        padding: theme.spacing(2),
    },
    divider: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }

}));

const Dashboard = () => {
    const classes = useStyles();

    return (
        <>

            <Layout title="Dashboard" subTitle="Dashboard">
                <div>
                    <h4>Your All Activity</h4>
                    <p>How many banner/images/logo you can make for a day</p>
                    <br />
                    <Divider />
                </div>
                <br />

                <Cards3 />

                <br />

                <Paper className={classes.paper}><Charts /></Paper>

                <div className="trending">
                    <h4>Trending Templates</h4>
                </div>

                <Grid container justify='center'>
                    <Grid item xs={12} sm={6} md={3}>
                        <Cards4 />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Cards4 />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Cards4 />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Cards4 />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Cards4 />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Cards4 />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Cards4 />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Cards4 />
                    </Grid>
                </Grid>
            </Layout >

        </>
    )

}

export default Dashboard