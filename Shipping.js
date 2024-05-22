import React from 'react'

import { Layout } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { Typography, Col, Row, Button } from 'antd';
import { CaretRightOutlined, SaveFilled } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';

const Shipping = () => {
    return (
        <div>
            {/* <br></br> */}
            <Header style={{ backgroundColor: '#f9fafb', padding: '0', height: 'auto', }}>
                <Layout style={{  backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Title level={5} style={{ color: '#ea580c', paddingRight: '20px', margin: '0px' }}>Digital Event 2024</Title>
                    <Title level={5} style={{ paddingRight: '20px', marginBottom: '20px' }}> <li style={{ color: 'red' }}> <span style={{ color: '#000' }}>Offline</span> </li></Title>
                    <Title level={5} style={{ margin: '0px', color: '#595e6a' }}>Due to go live on 12/06/2023</Title>
                </Layout>

                <Row>
                    <Col span={18}><Title level={2} style={{ margin: '0px' }}>Shipping</Title></Col>
                    <Col span={6} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button shape="round" size='large' icon={<CaretRightOutlined style={{ fontSize: '20px' }} />} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', borderColor: '#ea580c', color: '#ea580c' }}>Preview</Button>
                        <Button type="primary" shape="round" size='large' icon={<SaveFilled style={{ fontSize: '16px' }} />} disabled>
                            Save Changes
                        </Button>
                    </Col>

                </Row>
                <br></br>
                <Title level={3} style={{ margin: '0px' }}>Delivery Options</Title>
                <Typography.Paragraph>
                    We will eventually offer multiple shipping Options including batch shipping.However for now, we will ship directly to your recipients preferred individual shipping addresses.
                </Typography.Paragraph>

            </Header>
            <label>Shipping frequency</label>
            <Typography.Paragraph>
                Choose how soon you want your orders to be processed
            </Typography.Paragraph>
            <p style={{ fontSize: '15px' }}> <input name='r1' type='radio' value="r1"></input>  Orders will be processed and shipped as they come in</p>
            <p style={{ fontSize: '15px' }}> <input name='r1' type='radio' value="r2"></input> Orders will be processed and shipped weekly</p>
        </div>



    )
}

export default Shipping