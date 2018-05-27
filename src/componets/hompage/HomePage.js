import React, { Component } from 'react';
import { Carousel } from 'antd';
import './estilo.css'
import woman from './woman.jpg'
import asturias from './rural.jpg'
import plase from './plase.jpg'
import wall from './wall.jpg'

class HomePage extends Component {


    render() {
        return (
            <div>
                <Carousel autoplay breakpoint>
                    <div><h3><img src={asturias} breakpoint/></h3></div>
                    <div><img src={woman}/></div>
                    <div><img src={plase}/></div>
                    <div><img src={wall}/></div>
                </Carousel>

            </div>
        );
    }
}

export default HomePage;