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

import './styles.scss'
import Tables from '../../components/Tables/Tables';
import DatePicker from '../../components/DatePicker/DatePicker'


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
            <Layout title="My Campaign" subTitle="List of Campaign">
                <div className="header">
                    <p>lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                    <h4>List of Campaign</h4>
                    <br />
                    <Divider />
                </div>
                <div className="status_bar">
                    <div className="utils">
                        <Searchbar />
                        <DatePicker label="From Date" />
                        <DatePicker label="To Date" />
                    </div>
                    <div>
                        <Buttons title1="Export" title2="Create New" />
                    </div>
                </div>

                <Tables />

            </Layout>
        </>
    )

}

export default Campaign