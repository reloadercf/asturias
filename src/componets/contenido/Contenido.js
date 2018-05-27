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

const { Header, Footer, Sider, Content } = Layout;


class Contenido extends Component {


    render() {
        return (
            <div>

                <div>

                    <Layout>
                        <Header style={{backgroundColor:'#004cac'}}><center><MdAdb size={30} color="aliceblue"/> <MdTabletMac size={27} color="aliceblue" /><MdCloudDone size={27} color="aliceblue" /><MdDesktopMac size={27} color="aliceblue" /></center></Header>
                        <Content>

                            <div style={{ background: '#FFF', padding: '30px' }}>
                                <center><h1>APP MX ASTURIAS</h1></center>
                                <Row gutter={16}>
                                    <Col span={8}>
                                        <Card title="¿Nos conoces?" bordered={false}><MdLightbulbOutline size={20} />Somos Somo MXAsturias</Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card title="Unete" bordered={false}><MdLocalHospital size={20} />¿Te interesa mejorar la calidad de vida de las personas?</Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card title="La mejor Opción" bordered={false}><MdLocalOffer size={20} />¿Quieres tranquilidad, salud y seguridad?</Card>
                                    </Col>
                                </Row>
                                <br/>
                                <h2 style={{ marginBottom: 20 }}>¿Te gusta nuestra App?</h2>
                                <Tag color="blue">¡Estamos construyendo un mundo mejor!</Tag>
                                <br/>
                                <br/>
                                <Tag color="#108ee9">¡Llámanos!
                                    <MdLocalPhone size={20} /> 617363540 </Tag>
                            </div>


                        </Content>
                        <Footer>
                            <a href="https://www.negociacionplanb.com" target="_blank"> <center><MdCopyright size={25} />2018 Todos los derechos reservados / <MdWeb size={25} />Web diseñada por <strong>PLAN B</strong></center></a>

                        </Footer>
                    </Layout>
                </div>

            </div>
        );
    }
}

export default Contenido;