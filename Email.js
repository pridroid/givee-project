import React from 'react';
import { Card } from 'antd';
// import { Input } from 'antd';
import { Typography, Col, Row, Button } from 'antd';
import { CaretRightOutlined, SaveFilled } from '@ant-design/icons';
import "./Email.css"
import Dashboard from './DashboardDemo';
import { Footer } from 'antd/es/layout/layout';
import Footers from "./Footers";
import Title from 'antd/es/typography/Title';
import { Input, Form, Layout, Modal, Table, Pagination } from 'antd'



const { TextArea } = Input;
const Email = () => {



    return (


        <>
            {/* <div style={{ display: "flex", flexDirection: "row" }}> */}

            <div style={{ display: "flex", flexDirection: "column " }}>

                <div style={{}}>
                    <Layout style={{  backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Title level={5} style={{ color: '#ea580c', paddingRight: '20px', margin: '0px' }}>Digital Event 2024</Title>
                        <Title level={5} style={{ paddingRight: '20px', marginBottom: '20px' }}> <li style={{ color: 'red' }}> <span style={{ color: '#000' }}>Offline</span> </li></Title>
                        <Title level={5} style={{ margin: '0px', color: '#595e6a' }}>Due to go live on 12/06/2023</Title>
                    </Layout>
                    <div className="container1" style={{ display: "flex", flexDirection:'column',alignItems: "baseline", gap: "50px" }}>

                        <div style={{display:'flex' ,justifyContent:'space-between' ,width:'100%'}}>
                            <h1>Email</h1>
                            <div className="btn" style={{}}>
                                <Col span={6} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button shape="round" size='large' icon={<CaretRightOutlined style={{ fontSize: '20px' }} />} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', borderColor: '#ea580c', color: '#ea580c' }}>Preview</Button>
                                    <Button type="primary" shape="round" size='large' icon={<SaveFilled style={{ fontSize: '16px' }} />} style={{ backgroundColor: '#ea580c' }}>
                                        Save Changes
                                    </Button>
                                </Col>
                            </div>
                        </div>
                        <p>A certain points in their checkout journey guests will recicve emails. Here you can edit and send those emails.</p>
                        <div className="email-conatainer" style={{width:'100%'}}>
                            <Card >
                                <h3 style={{ margin: "0px" }}>Order Conformation email</h3>

                                <div >
                                    <h4 style={{ marginTop: "10px", marginBottom: "10px" }}>Subject</h4>
                                    <Input placeholder="Order confirmed" />
                                </div>
                                <div >
                                    <h4 style={{ marginTop: "20px", marginBottom: "10px" }}>Message</h4>
                                    <TextArea


                                        style={{ height: 120, resize: 'none' }}

                                        placeholder=" Hi {{firstName}},

                            Thank you for attending {{eventName}}.
                            
                            Your order {{orderNum}} has been accepted and will be dispatched soon"
                                    />
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Email







