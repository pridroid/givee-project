import React, { useState } from 'react'
import Card from 'antd/es/card/Card'
import { Button, Col, Divider, Radio, Row, Select, Typography } from 'antd';
import { CaretRightOutlined, SaveFilled } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { Input, Form, Layout, Modal, Table, Pagination } from 'antd'
import { Header } from 'antd/es/layout/layout';



const { Title } = Typography;
const Storeadmin = () => {
    const [inputs, setInputs] = useState({storeName:"",parentCompanyName:"",URL:"",description:"",website:"",companyName:"",emailAddress:"",quantity:"",companyCode:""});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({...inputs,[name]:value})
    }

    const handleSubmit = (event) => {
        console.log(inputs);
        event.preventDefault();
        setInputs({storeName:"",parentCompanyName:"",URL:"",description:"",website:"",companyName:"",emailAddress:"",quantity:"",companyCode:""})
    }

    return (
        <div style={{}}>

<Header style={{ backgroundColor: '#f9fafb', padding: '0', height: 'auto', marginBottom: '20px' }}>
                        <Layout style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Title level={5} style={{ color: '#ea580c', paddingRight: '20px', margin: '0px' }}>Digital Event 2024</Title>
                            <Title level={5} style={{ paddingRight: '20px', marginBottom: '20px' }}> <li style={{ color: 'red' }}> <span style={{ color: '#000' }}>Offline</span> </li></Title>
                            <Title level={5} style={{ margin: '0px', color: '#595e6a' }}>Due to go live on 12/06/2023</Title>
                        </Layout>
                        <Row>
                            <Col span={12}><Title level={2} style={{ margin: '0px' }}>Store admin</Title></Col>
                            {console.log("prathamesh")}
                            <Col span={12} style={{ display: 'flex', justifyContent: 'end' }}>
                                <Button shape="round" size='large' icon={<CaretRightOutlined style={{ fontSize: '20px' }} />} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', borderColor: '#ea580c', color: '#ea580c' }}>Preview</Button>
                                <Button disabled type="primary" shape="round" size='large' icon={<SaveFilled style={{ fontSize: '16px' }} />} >
                                    Save Changes
                                </Button>
                            </Col>

                        </Row>
                    </Header>

            <Card bordered={true} style={{ width: "100%", marginTop: "50px", borderColor: "#d9d9d9" }}>
                <Title level={3}>Store details</Title>
                <Title level={5}>Store name</Title>
                <input type='text' placeholder="Digital Event 2024" name='storeName' value={inputs.storeName} onChange={(e) => handleChange(e)} style={{ width: "98%",height:"30px",borderRadius:"5px",border:"2px solid #d9d9d9", padding:"0 10px" }} />
                <div className='Storename-text' style={{ margin: "6px", marginLeft: "0px" }}>This is the name of your event or store. You typically do not need to include your company name here.</div>
                <Title style={{ marginTop: "15px", marginLeft: "0px" }} level={5}>Parent company name</Title>
                <input type='text' placeholder='Porter Tech' name='parentCompanyName' value={inputs.parentCompanyName} onChange={(e) => handleChange(e)} style={{ width: "98%",height:"30px",borderRadius:"5px",border:"2px solid #d9d9d9", padding:"0 10px" }} />
                <div className='Companyname-text' style={{ margin: "6px", marginLeft: "0px" }}>This is the name of your company</div>

                <div>
                    <Title level={5} style={{ marginTop: "15px", marginLeft: "0px" }}>Store URL</Title>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input type='url' placeholder='digital-event-2024' name='URL' value={inputs.URL} onChange={(e) => handleChange(e)} style={{ width: "98%", marginRight: "10px" ,height:"30px",borderRadius:"5px",border:"2px solid #d9d9d9", padding:"0 10px"}} />
                        <Button type='primary' style={{ backgroundColor: "#fa8c16" }}>Edit</Button>
                    </div>
                    <div className='url' style={{ margin: "6px", marginLeft: "0px" }}>We have auto generated your store link based on its name, but you can edit this if you like</div>
                </div>

                <Title level={5} style={{ marginTop: "15px", marginLeft: "0px" }}>Store description</Title>
                <TextArea name='description' value={inputs.description} onChange={(e) => handleChange(e)} placeholder="This is gifting store run on the Givee platform"  style={{height:"100px"}}/>
                <div className='url' style={{ margin: "6px", marginLeft: "0px" }}>Please write a short description of your store. If you have opened the store to search indexing below, this text will be shown in search results</div>
            </Card>

            <Card style={{ marginTop: "20px", borderColor: "#d9d9d9" }}>
                <Title level={3}>Store date range</Title>
                <div>If you set a date range for your store, it will be published and</div>

                <div style={{ display: "flex", flexDirection: "row", marginRight: "10px" }}>
                    <Col span={12}>
                        <Title level={5} style={{ marginTop: "10px" }}>Store open date</Title>
                        <Select mode="multiple" allowClear style={{ width: '100%' }} placeholder="📅 As soon as I publish" />
                    </Col>
                    <Col span={12}>
                        <Title level={5} style={{ marginLeft: "10px", marginTop: "10px" }}>Store close date</Title>
                        <Select mode="multiple" allowClear style={{ width: '100%', marginLeft: "10px" }} placeholder="📅 No close date" />
                    </Col>

                </div>
            </Card>

            <Card style={{ marginTop: "20px", borderColor: "#d9d9d9" }}>
                <div>
                    <Title level={3}>Contact details</Title>
                    <Title level={5}>Your website </Title>
                    <input type='text' placeholder="  💻 www.us.com" name='website' value={inputs.website} onChange={(e) => handleChange(e)}style={{  width: "98%",height:"30px",borderRadius:"5px",border:"2px solid #d9d9d9", padding:"0 10px" }} />
                    <div className='website' style={{ margin: "6px", marginLeft: "0px" }}>Used to link guests to your main website</div>
                    <Title style={{ marginTop: "15px", marginLeft: "0px" }} level={5}>Company name</Title>
                    <input type='text' placeholder='  Us' name='companyName' value={inputs.companyName} onChange={(e) => handleChange(e)}  style={{ width: "98%",height:"30px",borderRadius:"5px",border:"2px solid #d9d9d9", padding:"0 10px"}} />
                    <div className='Company-text' style={{ margin: "6px", marginLeft: "0px" }}>This tells us your name as a company/client</div>

                    <Title style={{ marginTop: "15px", marginLeft: "0px" }} level={5}>Support email address</Title>
                    <input type='email' placeholder='  👤 hello@getgivee.com' name='emailAddress' value={inputs.emailAddress} onChange={(e) => handleChange(e)} style={{  width: "98%",height:"30px",borderRadius:"5px",border:"2px solid #d9d9d9", padding:"0 10px" }} />
                    <div className='Company-text' style={{ margin: "6px", marginLeft: "0px" }}>Your guests support emails will come to this address</div>
                </div>
            </Card>


            <Card style={{ marginTop: "20px", borderColor: "#d9d9d9" }}>
                <Title level={3}>Gifting limits</Title>
                <Title level={5}>Gift limit</Title>
                <div>Choose how to restrict the amount of gifts can be claimed by each guest. Restricting to a quantity of gifts (for example one-per-person) is good for a pure gifting site and makes it easier to hide the gifts monetary value. Restricting to a monetary value will allow your guests to claim multiple items, up to the limit, but we will need to display the values on each gift.</div>
                <Radio style={{ marginTop: "5px" }}>Restricted to quantity of gifts</Radio><br></br>
                <Radio>Restrict to a monetary value of gifts and show gift value</Radio>

                <Title level={5} style={{ marginTop: "10px" }}>Maximum gift quantity permitted per user</Title>
                <input type='number' placeholder='  1' name='quantity' value={inputs.quantity} onChange={(e) => handleChange(e)} style={{  width: "98%",height:"30px",borderRadius:"5px",border:"2px solid #d9d9d9", padding:"0 10px"}} />
                <div className='quantity-number' style={{ margin: "6px", marginLeft: "0px" }}>Currently we only allow one gift per guest. We will notify you when this changes</div>
            </Card>

            <Card style={{ marginTop: "20px", borderColor: "#d9d9d9" }}>
                <Title level={3}>Authentication preferences</Title>
                <div>Choose what level of authentication you would like for your guests to enter the store. Restricting access to a list of confirmed email addresses is the most secure, but if you do not have all your guests email addresses available you may choose from other options.</div>

                <Radio style={{ marginTop: "5px" }}>Guest must confirm their email address when they go log in. Requires guest invite list. (Most secure)</Radio><br></br>
                <Radio>Guest must have company email address. Requires list of approved domain endings (e,g. "@company.com)</Radio><br></br>
                <Radio>Guest must enter a company code to enter the store. Anyone with the code will be able to enter.</Radio><br></br>
                <Radio>No authentication (not recommended)</Radio>

                <Title level={5} style={{ marginTop: "15px" }}>Company code</Title>
                <input type='text' placeholder='  bird-forest-golfer' name='companyCode' value={inputs.companyCode} onChange={(e) => handleChange(e)} style={{  width: "98%",height:"30px",borderRadius:"5px",border:"2px solid #d9d9d9", padding:"0 10px"}} />
                <div className='company-code' style={{ margin: "6px", marginLeft: "0px" }}>This code can be shared with your guests to claim their gifts. No other authentication is used, so be careful when you share it.</div>

                <div style={{ marginTop: "20px", justifyContent: "space-between" }}>
                    <Button onClick={(e) => handleSubmit(e)} style={{ color: "white", backgroundColor: "#f5222d" }}><b>Update</b></Button>
                    <Button style={{ marginLeft: "5px", color: "#f5222d", borderColor: "#f5222d", backgroundColor: "white" }}><b>Cancel</b></Button>
                </div>

            </Card>



        </div>
    )
}

export default Storeadmin
