import React from 'react'
import Cards from '../../components/Cards/Cards'
import Layout from '../../components/Layout/Layout'
import Charts from '../../components/Charts/Charts'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Searchbar from '../../components/Searchbar/Searchbar'
import Dropdown from '../../components/Dropdown/Dropdown'
import Buttons from '../../components/Buttons/Buttons'
import Divider from '@material-ui/core/Divider';
import Cards2 from '../../components/Cards/Cards2'
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import RedditIcon from '@material-ui/icons/Reddit';
import YouTubeIcon from '@material-ui/icons/YouTube';

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

const Library = () => {
    const classes = useStyles();

    return (
        <>
            <Layout title="Library" subTitle="Library">
                <div>
                    <h4>List of Folders</h4>
                    <p>You can add Logo, Food Image, Beverage Image, Icons or guidelines or any other things</p>
                    <br />
                    <Divider />
                </div>
                <div className="status_bar">
                    <div className="utils">
                        <Searchbar />
                    </div>
                    <div>
                        <Buttons title1="Connect external drive" title2="+ Create Folder" />
                    </div>
                </div>

                <Grid container justify='center'>
                    <Grid item xs={12} sm={6} md={3}>
                        <Cards2
                            image="https://i0.wp.com/chennaifoodblog.in/wp-content/uploads/2018/08/order-food-online.jpg?fit=1024%2C682"
                            title="Beverage Image"
                            subtitle="103 Images"
                            icon={<BrokenImageIcon color='primary' />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Cards2
                            image=""
                            title="Guideline"
                            subtitle="1 document"
                            icon={<AccountTreeIcon color='primary' />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Cards2
                            image="https://lh3.googleusercontent.com/3KS8-58x3HGzDx5puQW2CWgNuXXiG1EIAz2t2PjG_sT8Y5BkSbIbMOowgHGrvSA2EFo=w412-h220-rw"
                            title="Logo"
                            subtitle="85 Images"
                            icon={<RedditIcon color='primary' />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Cards2 image="https://timesofindia.indiatimes.com/thumb/msid-65771570,imgsize-209655,width-400,resizemode-4/65771570.jpg"
                            title="Video"
                            subtitle="45 Images"
                            icon={<YouTubeIcon color='primary' />}
                        />
                    </Grid>
                </Grid>

            </Layout>
        </>
    )

}

export default Library