import React from 'react'
import Cards from '../../components/Cards/Cards'
import Layout from '../../components/Layout/Layout'
import Grid from '@material-ui/core/Grid';
import Searchbar from '../../components/Searchbar/Searchbar'
import Buttons from '../../components/Buttons/Buttons'
import Divider from '@material-ui/core/Divider';
import DatePicker from '../../components/DatePicker/DatePicker'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

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
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(10),
            width: '50ch',
            height: '5ch'
        },
    },
    divider: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const Campaign = () => {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);

    return (
        <>
            <Layout title="My Campaign" subTitle="Campaign Category">
                <div>
                    <h4>List of Campaign Category</h4>
                    <br />
                    <Divider />
                </div>
                <div className="status_bar">
                    <div className="utils">
                        <Searchbar />
                        <DatePicker label="Start Date" />
                    </div>
                    <div>
                        <Buttons title1="Export" title2="Create New" />
                    </div>
                </div>

                <Grid container justify='center'>
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to="/campaign/list"><Cards
                            image="https://www.wrike.com/blog/content/uploads/2017/04/PREVIEW-marketing-campaign-managemnt-820x480.jpg"
                            title="UD"
                            subtitle="103 Images"
                        /></Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Cards
                            image="https://www.socialsamosa.com/wp-content/uploads/2019/11/weekly-campaign-roundups-7.jpg"
                            title="Generic"
                            subtitle="33 Images"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Cards
                            image="https://www.singlegrain.com/wp-content/uploads/2018/03/SG-The-31-Best-Marketing-Campaigns-You-Can-Swipe.jpg"
                            title="Combo"
                            subtitle="85 Images"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Cards image="https://www.gradianhealth.org/wp-content/uploads/2017/05/campaign.jpg"
                            title="Card"
                            subtitle="45 Images"
                        />
                    </Grid>
                </Grid>

            </Layout>
        </>
    )

}

export default Campaign