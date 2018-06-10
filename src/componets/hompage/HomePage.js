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
                    <div><img src={woman}/></div>
                    <div><img src={plase}/></div>
                    <div><img src={wall}/></div>
                    <div><img src={asturias}/></div>
                </Carousel>

            </div>
        );
    }
}

export default HomePage;