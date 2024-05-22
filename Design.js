import React, { useState } from 'react';
import { Card } from 'antd';
import { Typography } from 'antd';
import Title from 'antd/es/typography/Title';
import { Layout } from 'antd'
import { Header } from 'antd/es/layout/layout';
import { Col, Row, Button } from 'antd';
import { CaretRightOutlined, SaveFilled } from '@ant-design/icons';
import { InboxOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
const { Dragger } = Upload;



const Design = () => {


    const [formData, setFormData] = useState({
        header: " ",
        message: " ",
        handleMassage: " ",
        thankyouMassage: " ",
        uploadFiles: " ",
        favicon: " ",
        themeclr: " ",
        link: " "


    });



    const HandleInputChange = (e) => {

        console.log(e)
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }


    const handleClick = (e) => {

        console.log("Design Data: ", formData)

    }


    const props = {
        listType: "picture"

    }



    const [isInputVisible, setInputVisible] = useState([true, true, true]);

    const [selectedFiles, setSelectedFiles] = useState([null, null, null]);

    const handleFileChange = (event, index) => {
        const newSelectedFiles = [...selectedFiles];
        newSelectedFiles[index] = event.target.files[0];
        setSelectedFiles(newSelectedFiles);

        isInputVisible[index] = false
        console.log(event)
        // setInputVisible([...isInputVisible, isInputVisible[index] = false])
    };



    return (

        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <div >

                <Header style={{ backgroundColor: '#f9fafb', padding: '0', height: 'auto' }}>
                    <Layout style={{ backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Title level={4} style={{ color: '#ea580c', paddingRight: '20px', margin: '0px' }}>Digital Event 2024</Title>
                        <Title level={5} style={{ paddingRight: '20px', marginBottom: '20px' }}> <li style={{ color: 'red' }}> <span style={{ color: '#000' }}>Offline</span> </li></Title>
                        <Title level={5} style={{ margin: '0px', color: '#595e6a' }}>Due to go live on 12/06/2023</Title>
                    </Layout>

                    <Row>
                    <Col span={18}><Title level={2} style={{ margin: '0px' }}>Design</Title></Col>
                        <Col span={6} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button shape="round" size='large' icon={<CaretRightOutlined style={{ fontSize: '20px' }} />} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', borderColor: '#ea580c', color: '#ea580c' }}>Preview</Button>
                            <Button type="primary" shape="round" size='large' icon={<SaveFilled style={{ fontSize: '16px' }} />} style={{ backgroundColor: '#ea580c' }}>
                                Save Changes
                            </Button>
                        </Col>

                    </Row>
                    <br></br>


                </Header>
                <div style={{ marginLeft: "20px" }}>
                    <Title level={3}> Store Interface</Title>
                    <Typography.Paragraph>
                        These settings control how your store appears on the web
                    </Typography.Paragraph>
                </div>


                <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', marginLeft: "20px" }}>
                    <Card
                        style={{
                            width: 440,
                            height: 380,
                            border: '1px solid #F0F0F0',

                        }}
                    >
                        <Title level={4}>Store Logo</Title>
                        <p>This logo will be displayed across your store</p>
                        <Title level={5}>Upload file</Title>
                        {/* <div style={{ border: '1px dashed black', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>                    <input type='file' style={{ marginLeft: '55px' }} name='uploadFiles' onChange={HandleInputChange}></input>
                        </div> */}


                        <Dragger {...props} style={{ width: "390px" }}>
                            <p className="ant-upload-drag-icon">
                                {/* <img src='https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg' alt='' height="80px" width="200px"></img> */}
                                <InboxOutlined name='uploadFiles' onChange={(e) => HandleInputChange(e)} />
                            </p>

                        </Dragger>

                        {/* <div>
                            <img src='https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg' alt='' height="200px" width="200px"></img>
                        </div> */}

                    </Card>
                    <Card
                        style={{
                            width: 440,
                            height: 380
                            , border: '1px solid #F0F0F0'

                        }}
                    >
                        <Title level={4}>Favicon</Title>
                        <p>A favicon is a small, square (usually 32*32px) version   </p>
                        <Title level={5}>Upload file</Title>
                        {/* <div style={{ border: '1px dashed black', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <input type='file' style={{ marginLeft: '55px' }}
                                name='favicon' onChange={HandleInputChange} ></input>
                        </div>     */}



                        <Dragger  {...props} style={{ width: "390px" }}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>

                        </Dragger>
                    </Card>
                </div>
            </div>
            <br></br>
            <div style={{

                width: 900, marginLeft: "20px"
            }}>
                <Card>
                    <h2>Theme Color</h2>
                    <Typography.Paragraph>
                        Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived no only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Typography.Paragraph>


                    <Title level={5}>Custom theme color</Title>
                    <input placeholder=' #000000                     HEX' name='themeclr' onChange={HandleInputChange} style={{ border: "1px solid #F0F0F0", borderRadius: "3px", padding: "5px" }}></input>
                    <button disabled type='dashed' style={{ marginLeft: "3px", marginLeft: "10px", padding: "5px" }} > Apply</button>
                    <br></br>
                    <Typography.Paragraph>
                        Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book. It survived no only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Typography.Paragraph>

                </Card>
                <br></br>

            </div>
            <div style={{ width: 900, marginLeft: "39px" }}>
                <Title level={3}>Store messages</Title>

                <Typography.Paragraph style={{ marginLeft: "9px", marginRight: "410px" }}>
                    Lorem Ipsum  simply dummy txt the printing and typesetting industry. Lorem Ipsum been the industry standard dummy text ever, when unknown printer took a galley of type and scrambled make a specimen book. It has survived not only five centuries also the leap   electric typesetting, remaining essential unchanged.
                </Typography.Paragraph>

            </div>
            <div style={{
                border: '1px solid #F0F0F0',

                width: 900, borderRadius: '5px', marginLeft: "20px"
            }}>
                <Title level={4} style={{ marginLeft: "20px" }}>Header message</Title>
                <Typography.Paragraph style={{ marginLeft: "29px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography.Paragraph>
                <Title level={4} style={{ marginLeft: "20px", }}>Welcome header</Title>
                <input type='text' placeholder='Welcome to Digital Event 2024!' style={{ width: 850, marginLeft: "20px", border: '1px solid #F0F0F0', padding: " 5zpx", borderRadius: "3px" }} name='header' onChange={HandleInputChange} value={formData.header}></input>
                <Typography.Paragraph style={{ marginLeft: "20px" }}>
                    Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took galley of type and   it to make a type specimen book. It has survived     five   also the leap into electronic typesetting, remaining essentially unchanged.
                </Typography.Paragraph>
                <Title level={4} style={{ marginLeft: "20px" }}>Welcome message</Title>
                <textarea rows={4}
                    cols={10} placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting industrtextareaem Ipsum is simply dummy text of the printing and typesetting industry.' style={{ width: 850, marginLeft: "20px", border: '1px solid #F0F0F0', borderRadius: "3px" }} onChange={HandleInputChange} name='message' value={formData.message}></textarea>

                <Typography.Paragraph style={{ marginLeft: "20px" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Typography.Paragraph>


            </div>
            <br></br>
            <div style={{
                border: '1px solid #F0F0F0',

                width: 900, borderRadius: '5px', marginLeft: "20px"
            }}>
                <Title level={3} style={{ marginLeft: "20px" }}>Thank You Page</Title>
                <Typography.Paragraph style={{ marginLeft: "20px" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Typography.Paragraph>
                <Title level={4} style={{ marginLeft: "20px" }}>Thank you message heading</Title>
                <input type='text' placeholder='Welcome to Digital Event 2024!' style={{
                    width: 850, marginLeft: "20px", border: '1px solid #F0F0F0', borderRadius: "3px", padding: "5px"
                }} name='handleMassage' onChange={HandleInputChange} value={formData.handleMassage}></input>

                <Typography.Paragraph style={{ marginLeft: "20px" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Typography.Paragraph>
                <Title level={4} style={{ marginLeft: "20px" }}>Thank you message</Title>

                <textarea rows={4}
                    cols={40} placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting industrtextareaem Ipsum is simply dummy text of the printing and typesetting industry.' style={{
                        width: 850, marginLeft: "20px", border: '1px solid #F0F0F0', padding: "5px", borderRadius: "3px"
                    }} name='thankyouMassage' onChange={HandleInputChange} value={formData.thankyouMassage}></textarea>

                <Typography.Paragraph style={{ marginLeft: "20px" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Typography.Paragraph>
                <Title level={4} style={{ marginLeft: "20px" }}>Link to find out more</Title>
                <input type='url' placeholder='https:// porter-tech.com' style={{
                    width: 850, marginLeft: "20px", padding: "5px", border: '1px solid #F0F0F0', borderRadius: "3px"
                }} name='link' onChange={HandleInputChange} ></input>
                <Typography.Paragraph style={{ marginLeft: "20px" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.    </Typography.Paragraph>



            </div>
            <div style={{ width: 900, justifyContent: 'space-between', marginLeft: "20px" }}>

                <Title level={3} style={{ marginLeft: "20px" }}>Print design</Title>
                <Typography.Paragraph style={{ marginLeft: "20px", marginRight: "410px" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<a href='hhuyyft'>Contact Us</a>
                </Typography.Paragraph>

                <div style={{
                    border: '1px solid #F0F0F0',

                    width: 900, marginLeft: "5px",
                    height: 460, borderRadius: '5px'
                }}>

                    <Title level={4} style={{ marginLeft: "10px" }}>Print logos</Title>
                    <Typography.Paragraph style={{ marginLeft: "17px" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  galley of type and scrambled it to make a type specimen book.<a href='hhuyyft'>Contact Us</a>
                    </Typography.Paragraph>


                    <div style={{
                        display: 'flex',
                        gap: "20px",
                        marginLeft: "20px",

                    }}>




                        <div style={{ display: 'flex', gap: "20px" }}>

                            {selectedFiles.map((file, index) => {
                                console.log(file)
                                return (
                                    <div>
                                        <Title Title level={5}>Upload File</Title>
                                        <div key={index} style={{
                                            width: '270px', height: '200px', border: '1px dashed #F0F0F0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: "5px",

                                        }} >

                                            <input
                                                id={'image' + index}
                                                type="file"
                                                accept="image/*"
                                                onChange={(event) => handleFileChange(event, index)}
                                                style={{ display: 'none' }}

                                            />
                                            {isInputVisible[index] ? (
                                                <div style={{ fontSize: '14px', border: "1px solid", borderRadius: "5px", backgroundColor: "#70756d", color: "white", padding: '10px' }}
                                                    onClick={() => {
                                                        document.querySelector('#image' + index).click();
                                                    }}><b>+ Add another variant</b> </div>
                                            ) : null}
                                            {file && (
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <img
                                                        src={URL.createObjectURL(file)}
                                                        alt={`Selected File ${index}`}
                                                        width={100}
                                                        height={100}
                                                    />
                                                </div>

                                            )}
                                        </div>
                                            <p  style={{fontSize:"17px",marginLeft:"40px"}}>{file && file.name}</p>

                                    </div>
                                )
                            })}

                        </div>

                    </div>


                </div>
                <br></br>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Card style={{
                        border: '1px solid #F0F0F0',

                        width: 400,
                        height: "470px"
                    }}>
                        <Title level={4}>Print Personalization Text Color</Title>

                        <Typography.Paragraph>
                            Lorem Ipsum is simply dummy text the printing and typesetting industry Lorem Ipsum simply dummy text the printing and typesetting industry.Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley type and scrambled it to make a type specimen book.
                        </Typography.Paragraph>
                        <br></br>
                        <Title level={5}>Print color</Title>
                        <select id="color" style={{ width: 300, border: "1px solid #F0F0F0", borderRadius: "3px", padding: "5px" }}>
                            <option value="c1">Color</option>
                            <option value="c2">color</option>
                            <option value="c3">color</option>
                            <option value="c4">color</option>
                            <option value="c5">color</option>
                        </select>
                        <Typography.Paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy
                        </Typography.Paragraph>

                    </Card>
                    <Card style={{
                        border: '1px solid #F0F0F0',

                        width: 400
                    }}>
                        <Title level={4}>Printed font</Title>
                        <Typography.Paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum simply dummy text the printing and typesetting industry.
                        </Typography.Paragraph>

                        <br></br>
                        <Title level={5}>Select a font</Title>
                        <select id="color" style={{ width: 300, border: "1px solid #F0F0F0", borderRadius: "3px", padding: "5px" }}>
                            <option value="c1">Intern</option>
                            <option value="c2">color</option>
                            <option value="c3">color</option>
                            <option value="c4">color</option>
                            <option value="c5">color</option>
                        </select>


                    </Card>
                </div>

            </div>

        </div>



    )
}
export default Design;