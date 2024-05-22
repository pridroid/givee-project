import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Divider, Input, Layout, Row, Switch, Typography } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import Title from 'antd/es/typography/Title'
import { ArrowLeftOutlined } from '@ant-design/icons';
import Footers from './Footers';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../App';
// import Image from '../assets/image.png';

export default function ProductDetails() {
    const [productDetail, setProductDetail] = useState('');
    const { id } = useParams();
    const { product } = useContext(Context);
    const navTo = useNavigate()
    useEffect(() => {
        setProductDetail(product.find((ele) => ele.id === Number(id)))
        window.scrollTo(0, 0);
    })
    console.log(productDetail)
    return (
        <Layout>

            <Content style={{ width: '100%', padding: '30px', backgroundColor: '#f9fafb' }}>
                <Row gutter={100}>
                    <Col span={12} xs={24} sm={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '20px' }}>
                        <img
                            width={300}
                            height={300}
                            src={productDetail && productDetail.image} alt='product'
                        />
                    </Col>
                    <Col span={12} xs={24} sm={12}>
                        <Layout style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            flexDirection: 'row', marginBottom: '10px',
                        }}>
                            <Title level={5} style={{ color: '#ea580c', margin: '0px', cursor: 'pointer' }} onClick={() => navTo(`/product`)}><ArrowLeftOutlined style={{ marginRight: '5px' }} />Back to all products</Title>
                            <Button type="primary" shape="round" size='large' style={{ backgroundColor: '#ea580c' }}>Save Changes</Button>
                        </Layout>
                        <Title level={3}>{productDetail && productDetail.name}</Title>
                        <Typography.Paragraph>{productDetail && productDetail.description}</Typography.Paragraph>

                        <Title level={4} style={{ marginTop: '50px' }}>Preview customization</Title>
                        <Title level={5} style={{ margin: '0px' }}>Personalization label</Title>
                        <Row style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                            <div style={{ width: '85%' }}>
                                <Input placeholder='Example Name' />
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1px', margin: '5px 0' }}>
                                    <Title level={5} style={{ fontSize: '12px', color: '#595e6a' }}>This will be printed on your gift</Title>
                                    <Title level={5} style={{ margin: '0px', fontSize: '12px', color: '#595e6a' }}>6/25</Title>
                                </div>
                            </div>
                            <Button disabled>Apply</Button>
                        </Row>
                        <Row style={{ display: 'flex', flexDirection: 'column' }}>
                            <Title level={5}>Preview color</Title>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <button style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'black', cursor: 'pointer', border: 'none', boxShadow: '0px 0px 1px 2px white,0px 0px 1px 3px black' }} />
                                <button style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'white', cursor: 'pointer', border: '1px solid grey' }} />
                                <button style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'darkblue', cursor: 'pointer', border: 'none' }} />
                                <button style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'brown', cursor: 'pointer', border: 'none' }} />
                                <button style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'lightgreen', cursor: 'pointer', border: 'none' }} />
                                <button style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'orange', cursor: 'pointer', border: 'none' }} />
                                <button style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'grey', cursor: 'pointer', border: 'none' }} />
                            </div>
                        </Row>
                        <Row style={{ marginTop: '50px' }}>
                            <Title level={5}>Pricing</Title>
                            <Typography.Paragraph>
                                You products will have our default margin applied, but you can change the margin here. Adjustments will only apply to this product, on this store. This pricing will not be shown to your attendees, and the margin and net price will not be shown to any EMs you invite to manage this store.
                            </Typography.Paragraph>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div>Code price (PCNA recommendation)</div>
                                <Title level={5} style={{ margin: '0px' }}>{productDetail && productDetail.code_price}</Title>
                            </div>
                            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div>Net price</div>
                                <Title level={5} style={{ margin: '0px' }}>{productDetail && productDetail.Net_price}</Title>
                            </div>
                            <Divider style={{ border: '1px solid #ccc', margin: '10px 0' }} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <Title level={5} style={{ margin: '0px' }}>Profit</Title>
                                <Title level={5} style={{ margin: '0px' }}>$</Title>
                            </div>
                            <Divider style={{ border: '1px solid #ccc', margin: '10px 0' }} />
                            <Row style={{ marginTop: '20px' }}>
                                <Title level={5}>Additional details</Title>
                            </Row>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <p style={{ color: '#595e6a' }}>Minimum order quantity</p>
                                <Title level={5} style={{ margin: '0px' }}>1</Title>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <p style={{ color: '#595e6a' }}>Inventory</p>
                                <Title level={5} style={{ margin: '0px' }}>985</Title>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <p style={{ color: '#595e6a' }}>Personalisation</p>
                                <Title level={5} style={{ margin: '0px' }}>Yes</Title>
                            </div>
                            <Divider style={{ border: '1px solid #ccc', margin: '10px 0' }} />

                        </Row>
                        <Row style={{ marginTop: '50px' }}>
                            <Title level={4}>Design customization</Title>
                            <Typography.Paragraph>Use the controls below match logo variants and text colors to the available product colors. You can also enables or disable specific color variants.</Typography.Paragraph>
                            <Row style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                                <Title level={5} style={{ margin: '0' }}>Black</Title>
                                <div>
                                    <Switch style={{ marginRight: '10px' }} />
                                    <span>Enable</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                                    <div style={{ minWidth: '48%', padding: '10px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '10px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '80px', backgroundColor: 'black', borderRadius: '10px' }}>
                                            <img src={Image} alt="" style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    </div>
                                    <div style={{ width: '48%', padding: '10px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '10px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', width: '100%', height: '80px', backgroundColor: 'black', borderRadius: '10px' }}>
                                            <div style={{ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%' }}></div>
                                            <Title level={5} style={{ color: 'white', margin: '0' }}>Text color</Title>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            <Row style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                                <Title level={5} style={{ margin: '0' }}>White</Title>
                                <div>
                                    <Switch style={{ marginRight: '10px' }} />
                                    <span>Enable</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                                    <div style={{ minWidth: '48%', padding: '10px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '10px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '80px', backgroundColor: 'black', borderRadius: '10px' }}>
                                            <img src={Image} alt="" style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    </div>
                                    <div style={{ width: '48%', padding: '10px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '10px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', width: '100%', height: '80px', backgroundColor: 'white', borderRadius: '10px' }}>
                                            <div style={{ width: '20px', height: '20px', backgroundColor: 'black', borderRadius: '50%' }}></div>
                                            <Title level={5} style={{ color: 'black', margin: '0' }}>Text color</Title>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            <Row style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                                <Title level={5} style={{ margin: '0' }}>Red</Title>
                                <div>
                                    <Switch style={{ marginRight: '10px' }} />
                                    <span>Enable</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                                    <div style={{ minWidth: '48%', padding: '10px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '10px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '80px', backgroundColor: 'red', borderRadius: '10px' }}>
                                            <img src={Image} alt="" style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    </div>
                                    <div style={{ width: '48%', padding: '10px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '10px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', width: '100%', height: '80px', backgroundColor: 'red', borderRadius: '10px' }}>
                                            <div style={{ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%' }}></div>
                                            <Title level={5} style={{ color: 'white', margin: '0' }}>Text color</Title>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            <Row style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                                <Title level={5} style={{ margin: '0' }}>Green</Title>
                                <div>
                                    <Switch style={{ marginRight: '10px' }} />
                                    <span>Enable</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                                    <div style={{ minWidth: '48%', padding: '10px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '10px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '80px', backgroundColor: 'green', borderRadius: '10px' }}>
                                            <img src={Image} alt="" style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    </div>
                                    <div style={{ width: '48%', padding: '10px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '10px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', width: '100%', height: '80px', backgroundColor: 'green', borderRadius: '10px' }}>
                                            <div style={{ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%' }}></div>
                                            <Title level={5} style={{ color: 'white', margin: '0' }}>Text color</Title>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            <Row style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                                <Title level={5} style={{ margin: '0' }}>Orange</Title>
                                <div>
                                    <Switch style={{ marginRight: '10px' }} />
                                    <span>Enable</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                                    <div style={{ minWidth: '48%', padding: '10px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '10px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '80px', backgroundColor: 'orange', borderRadius: '10px' }}>
                                            <img src={Image} alt="" style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    </div>
                                    <div style={{ width: '48%', padding: '10px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '10px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', width: '100%', height: '80px', backgroundColor: 'orange', borderRadius: '10px' }}>
                                            <div style={{ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%' }}></div>
                                            <Title level={5} style={{ color: 'white', margin: '0' }}>Text color</Title>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            <Row style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                                <Title level={5} style={{ margin: '0' }}>Grey</Title>
                                <div>
                                    <Switch style={{ marginRight: '10px' }} />
                                    <span>Enable</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                                    <div style={{ width: '48%', padding: '10px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '10px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '80px', backgroundColor: 'grey', borderRadius: '10px' }}>
                                            <img src={Image} alt="" style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    </div>
                                    <div style={{ width: '48%', padding: '10px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '10px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', width: '100%', height: '80px', backgroundColor: 'grey', borderRadius: '10px' }}>
                                            <div style={{ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%' }}></div>
                                            <Title level={5} style={{ color: 'white', margin: '0' }}>Text color</Title>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}
