import React from 'react'
import Layout from '../../components/Layout/Layout'
import Cards4 from '../../components/Cards/Cards4'
import Divider from '@material-ui/core/Divider';
import Searchbar from '../../components/Searchbar/Searchbar'
import Buttons from '../../components/Buttons/Buttons'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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

const Templates = () => {
    const classes = useStyles();

    return (
        <>

            <Layout title="Templates" subTitle="Dashboard > Templates">
                <div>
                    <h4>All Templates</h4>
                    <br />
                    <Divider />
                </div>
                <div className="status_bar">
                    <div className="utils">
                        <Searchbar />

                    </div>
                    <div>
                        <Buttons title1="Export" title2="Create New" />
                    </div>
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

export default Templates