import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import InfiniteCarousel from 'react-leaf-carousel';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './styles.scss'


const Cards3 = (props) => {

    return (

        <div className="card-wrapper">

            <div className="container">
                <div className="item">
                    <h1>120</h1>
                    <h5>Cover</h5>
                </div>
                <div className="image">
                    <img src="https://img.icons8.com/plasticine/2x/image.png" />
                </div>
            </div>

            <div className="container">
                <div className="item">
                    <h1>44</h1>
                    <h5>Mail</h5>
                </div>
                <div className="image">
                    <img src="https://img.icons8.com/bubbles/2x/gmail.png" />
                </div>
            </div>

            <div className="container">
                <div className="item">
                    <h1>30</h1>
                    <h5>Video</h5>
                </div>
                <div className="image">
                    <img src="https://img.icons8.com/plasticine/2x/play.png" />
                </div>
            </div>

            <div className="container">
                <div className="item">
                    <h1>75</h1>
                    <h5>GIF</h5>
                </div>
                <div className="image">
                    <img src="https://img.icons8.com/cotton/2x/filled-star.png" />
                </div>
            </div>

            <div className="container">
                <div className="item">
                    <h1>33</h1>
                    <h5>Others</h5>
                </div>
                <div className="image">
                    <img src="https://img.icons8.com/plasticine/2x/icons8-new-logo.png" />
                </div>
            </div>


            <div className="container">
                <div className="item">
                    <h1>56</h1>
                    <h5>Others</h5>
                </div>
                <div className="image">
                    <img src="https://img.icons8.com/cotton/2x/filled-star.png" />
                </div>
            </div>

            <div className="container">
                <div className="item">
                    <h1>61</h1>
                    <h5>Others</h5>
                </div>
                <div className="image">
                    <img src="https://img.icons8.com/plasticine/2x/image.png" />
                </div>
            </div>

            <div className="container">
                <div className="item">
                    <h1>23</h1>
                    <h5>Others</h5>
                </div>
                <div className="image">
                    <img src="https://img.icons8.com/plasticine/2x/icons8-new-logo.png" />
                </div>
            </div>

            <div className="container">
                <div className="item">
                    <h1>36</h1>
                    <h5>Others</h5>
                </div>
                <div className="image">
                    <img src="https://img.icons8.com/plasticine/2x/folder-invoices.png" />
                </div>
            </div>

        </div >

    );
}

export default Cards3