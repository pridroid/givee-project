import React, { useState } from 'react'
import { CaretRightOutlined, ArrowRightOutlined, CloudUploadOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography, Modal, Space, Alert, Divider } from 'antd';
import Card from 'antd/es/card/Card';
// import Logo from '../images/Logo.png'
import Title from 'antd/es/typography/Title';

const StoreOverviewFront = () => {

    return (
        <div>
            <header >
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Title level={4} style={{ color: "red", margin: "0px" }}>Digital Event 2024</Title>
                    <Title level={4} style={{ margin: "0px", paddingLeft: "20px" }}><span style={{ color: "green", marginRight: "3px" }}>•</span>Published</Title>
                    <Title level={4} style={{ color: "#595e6a", margin: "0px", paddingLeft: "20px" }}>Due to go live on 12/06/2023</Title>
                </div>

                <div style={{ marginTop: "10px" }}>
                    <Row>
                        <Col span={18}>
                            <Title level={2} style={{ margin: "0px" }}>Store overview</Title>
                        </Col>
                        <Col span={6} style={{ display: 'flex', justifyContent: 'space-between' }} >
                            <Button type='primary' shape='round' icon={<CaretRightOutlined />} style={{ margin: "0px", alignContent: "right", backgroundColor: "#f5f5f5", borderColor: "#fa541c", color: "#fa541c" }}><b>Preview</b></Button>

                            <Button type='primary' shape='round' icon={<CloudUploadOutlined />} style={{ marginLeft: "0px", backgroundColor: "#fa541c" }}><b>Publish</b></Button>

                        </Col>
                    </Row>
                </div>

                <div>
                    <Space direction="vertical" style={{ width: "100%", marginTop: "10px" }}>
                        <Alert style={{ color: "#389e0d", backgroundColor: "#f6ffed" }} message="Welcome to your new store! While we validate your account,you may look around the platform" type='success' showIcon />
                    </Space>
                </div>

            </header>

            <Card style={{ marginTop: "50px" }}>
                <Title level={3} style={{ margin: "0px" }}>Tasks required before publishing</Title>

                <Space direction="vertical" style={{ width: "100%", marginTop: "10px" }}>
                    <Alert style={{ color: "brown", fontWeight: "bold", backgroundColor: "#ffe7ba", borderColor: "#fa8c16" }} message="Tasks required to complete" type='warning' showIcon />
                </Space>

                <Title level={5} style={{ margin: "0px", marginTop: "10px" }}>Before you can publish this site you need to complete the admin tasks below</Title>
                <Title style={{ fontSize: 14 }}>8 tasks outstanding</Title>
                <Divider orientation="left" plain style={{ borderColor: "#f5f5f5", border: "1px solid " }}></Divider>

                <div>
                    <div style={{ fontSize: 14, color: "#595959" }}><b>Reqiured tasks</b></div>


                    <div style={{ display: 'flex ', gap: '10px', marginTop: "15px" }}> <i className="fa-solid fa-gift" style={{ fontSize: "16px", borderRadius: "50%", backgroundColor: "#f5f5f5", width: "30px", display: 'flex', justifyContent: 'center', alignItems: "center" }}></i>
                        <div>
                            <Title style={{ fontSize: 14, margin: "0px" }}>Confirm your product selection</Title>
                            <Title style={{ fontSize: 12, margin: "0px" }}>Products</Title>
                        </div>
                    </div>
                    <div style={{ display: 'flex ', gap: '10px', marginTop: "15px" }}>
                        <i className="fa-solid fa-users" style={{ fontSize: "16px", borderRadius: "50%", backgroundColor: "#f5f5f5", width: "30px", display: 'flex', justifyContent: 'center', alignItems: "center" }}></i>
                        <div>
                            <Title style={{ fontSize: 14, margin: "0px" }}>Add your guests</Title>
                            <Title style={{ fontSize: 12, margin: "0px" }}>Guests</Title>
                        </div>
                    </div>
                    <div style={{ display: 'flex ', gap: '10px', marginTop: "15px" }}>
                        <i className="fa-solid fa-wallet" style={{ fontSize: "16px", borderRadius: "50%", backgroundColor: "#f5f5f5", width: "30px", display: 'flex', justifyContent: 'center', alignItems: "center" }}></i>
                        <div>
                            <Title style={{ fontSize: 14, margin: "0px" }}>Set up billing</Title>
                            <Title style={{ fontSize: 12, margin: "0px" }}>Billing</Title>
                        </div>
                    </div>


                    <div >
                        <Title style={{ fontSize: 14, color: "#595959", marginTop: "15px" }}><b>Additional tasks</b></Title>
                    </div>

                    <div style={{ display: 'flex ', gap: '10px', marginTop: "15px" }}>
                        <i className="fa-solid fa-swatchbook" style={{ fontSize: "16px", borderRadius: "50%", backgroundColor: "#f5f5f5", width: "30px", display: 'flex', justifyContent: 'center', alignItems: "center" }}></i>
                        <div>
                            <Title style={{ fontSize: 14, margin: "0px" }}>Set your store and product design</Title>
                            <Title style={{ fontSize: 12, margin: "0px" }}>Design</Title>
                        </div>
                    </div>

                    <div style={{ display: 'flex ', gap: '10px', marginTop: "15px" }}>
                        <i className="fa-solid fa-gift" style={{ fontSize: "16px", borderRadius: "50%", backgroundColor: "#f5f5f5", width: "30px", display: 'flex', justifyContent: 'center', alignItems: "center" }}></i>
                        <div>
                            <Title style={{ fontSize: 14, margin: "0px" }}>Set your product customization</Title>
                            <Title style={{ fontSize: 12, margin: "0px" }}>Products</Title>
                        </div>
                    </div>

                    <div style={{ display: 'flex ', gap: '10px', marginTop: "15px" }}>
                        <i className="fa-regular fa-envelope" style={{ fontSize: "16px", borderRadius: "50%", backgroundColor: "#f5f5f5", width: "30px", display: 'flex', justifyContent: 'center', alignItems: "center" }}></i>
                        <div>
                            <Title style={{ fontSize: 14, margin: "0px" }}>Set your messaging (emails)</Title>
                            <Title style={{ fontSize: 12, margin: "0px" }}>Products</Title>
                        </div>
                    </div>

                    <div style={{ display: 'flex ', gap: '10px', marginTop: "15px" }}>
                        <i className="fa-solid fa-wrench" style={{ fontSize: "16px", borderRadius: "50%", backgroundColor: "#f5f5f5", width: "30px", display: 'flex', justifyContent: 'center', alignItems: "center" }}></i>
                        <div>
                            <Title style={{ fontSize: 14, margin: "0px" }}>Set your store dates</Title>
                            <Title style={{ fontSize: 12, margin: "0px" }}>Store admin</Title>
                        </div>
                    </div>

                </div>
                <Divider orientation="left" plain style={{ borderColor: "#f5f5f5", border: "1px solid " }}></Divider>
            </Card>

            <Row gutter={16}  style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "20px" }}>

                <Col span={6} sm={6} xs={12} >
                    <Card style={{ height: "210px" }}>

                        <div style={{ height: "100px" }}>
                            <Title level={5} style={{ margin: "0px", marginTop: "8px" }}>Store dates</Title>
                            <Title level={2} style={{ marginTop: "3px", margin: "0px" }}>Not set</Title>
                        </div>
                        <Title level={5} style={{ color: "#8c8c8c" }} >Go to store admin {<ArrowRightOutlined />}</Title>
                    </Card>
                </Col>

                <Col span={6} sm={6} xs={12}>
                    <Card style={{ height: "210px" }}>
                        <div style={{ height: "100px" }}>
                            <Title level={5} style={{ margin: "0px", marginTop: "10px" }}>Total sales + shipping</Title>
                            <Title level={2} style={{ margin: "0px" }}>$0</Title>
                            <Title level={5} style={{ fontSize: "12px", margin: "0px" }}>Net sales at retail price, plus sgipping</Title>
                        </div>
                        <Title level={5} style={{ color: "#8c8c8c" }}>Go to orders {<ArrowRightOutlined />} </Title>
                    </Card>
                </Col>

                <Col span={6} sm={6} xs={12}>
                    <Card style={{ height: "210px" }}>
                        <div style={{ height: "100px" }}>
                            <Title level={5} style={{ margin: "0px", marginTop: "10px" }}>Total cost</Title>
                            <Title level={2} style={{ margin: "0px" }}>$0</Title>
                            <Title level={5} style={{ fontSize: "12px", margin: "0px" }}>including shipping, to date</Title>
                        </div>
                        <Title level={5} style={{ color: "#8c8c8c" }}>Go to billing {<ArrowRightOutlined />}</Title>
                    </Card>
                </Col>

                <Col span={6} sm={6} xs={12}>
                    <Card style={{ height: "210px" }}>
                        <div style={{ height: "100px" }}>
                            <Title level={5} style={{ margin: "0px", marginTop: "10px" }}>Guest invited</Title>
                            <Title level={2} style={{ margin: "0px" }}>58</Title>
                            <Title level={5} style={{ fontSize: "12px", margin: "0px" }}>43 have ordered</Title>
                        </div>
                        <Title level={5} style={{ color: "#8c8c8c" }}>Go to guests {<ArrowRightOutlined />}</Title>
                    </Card>
                </Col>

            </Row>

        </div>
    )
}

export default StoreOverviewFront
