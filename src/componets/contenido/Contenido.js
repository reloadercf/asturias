import React, { Component } from 'react';
import { Layout } from 'antd';
import { Card, Col, Row } from 'antd';
import { Tag } from 'antd';
import MdAdb from 'react-icons/lib/md/adb';
import MdTabletMac from 'react-icons/lib/md/tablet-mac';
import MdLocalPhone from 'react-icons/lib/md/local-phone';
import MdLocalOffer from 'react-icons/lib/md/local-offer';
import MdLocalHospital from 'react-icons/lib/md/local-hospital';
import MdLightbulbOutline from 'react-icons/lib/md/lightbulb-outline';
import MdCopyright from 'react-icons/lib/md/copyright';
import MdWeb from 'react-icons/lib/md/web';
import MdDesktopMac from 'react-icons/lib/md/desktop-mac';
import MdCloudDone from 'react-icons/lib/md/cloud-done';
import { Alert } from 'antd';
import { Button, notification } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const style={
    header:{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor:'#004cac',
        alignItems: "center"
    }
}

class Contenido extends Component {


    render() {
        return (
            <div>

                <div>

                    <Layout>
                        <Header style={style.header}>                              
                            <MdAdb size={30} color="aliceblue"/> 
                            <MdTabletMac size={27} color="aliceblue" />
                            <MdCloudDone size={27} color="aliceblue" />
                            <MdDesktopMac size={27} color="aliceblue" />                      
                        </Header>
                        <Content style={{height: ""}}>

                            <div style={{ background: '#FFF', padding: '30px' }}>
                                <center><h1>APP MX ASTURIAS</h1></center>
                                <Row gutter={16}>
                                    <Col xs = {{span: 24}} md={{span: 8}} lg={{span: 8}}>
                                        <Card title="¿Nos conoces?" bordered={false}><MdLightbulbOutline size={20} />Somos MXAsturias</Card>
                                    </Col>
                                    <Col xs = {{span: 24}} md={{span: 8}} lg={{span: 8}}>
                                        <Card title="Únete" bordered={false }><MdLocalHospital size={20} />¿Te interesa mejorar la calidad de vida de las personas?</Card>
                                    </Col>
                                    <Col xs = {{span: 24}} md={{span: 8}} lg= {{span: 8}}>
                                        <Card title="La mejor Opción" bordered={false}><MdLocalOffer size={20} />¿Quieres tranquilidad, salud y seguridad?</Card>
                                    </Col>
                                </Row>

                                <Row type="flex" justify="center">
                                    <Col xs={24} md={6} lg={6}>
                                        <h2 style={{ marginBottom: 20 }}>¿Te gusta nuestra App?</h2>
                                    </Col  >
                                    <Col xs={24} md={6} lg={6}> 
                                        <Row type="flex" justify="center">
                                            <Tag color="blue">¡Estamos construyendo un mundo mejor!</Tag> 
                                        </Row>
                                        <Row type="flex" justify="center">
                                            <Tag color="#108ee9">¡Llámanos!
                                            <MdLocalPhone size={20} /> 617363540 </Tag>
                                        </Row>
                                                                                                          
                                    </Col>
                                    
                                </Row>

                                <br/>
                                
                                
                            </div>
                            <Alert message="Usamos cookies para proveerte del servicio y funciones propuestas en nuestra página web y para mejorar la experiencia de nuestros usuarios
Debes prestar tu consentimiento para seguir navegando" type="info" closeText="Cerrar " /> <p align="right"><a href="https://www.aboutcookies.org/how-to-delete-cookies/" target="_blank">Leer más cómo eliminar cookies</a></p>
                        </Content>
                        <Footer>
                            <a href="https://www.negociacionplanb.com" > <center><MdCopyright size={25} />2018 Todos los derechos reservados / <MdWeb size={25} />Web diseñada por <strong>PLAN B</strong></center></a>
                        </Footer>
                    </Layout>
                </div>

            </div>
        );
    }
}

export default Contenido;