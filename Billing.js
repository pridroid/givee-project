import React, { useState } from 'react'
import { CaretRightOutlined, SaveFilled, DownloadOutlined } from '@ant-design/icons';
import { Typography, Col, Row, Button, Card, Input, Modal } from 'antd';
import Title from 'antd/es/typography/Title';
// import { Button, Modal } from 'antd';
import { Checkbox } from 'antd';
import Dashboard from './DashboardDemo';
// import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Form, Layout, Pagination } from 'antd';
import { useFormik } from "formik";
import { billingSchema } from '../schemas/billings';
import { string } from 'yup';

const initialValues = {
    name:  "",
    cardEnd: "",
    exp: "",
    cvv: ""
}

const Billing = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [display, setDisplay] = useState(false);

    const [cardDetals, setCardDetals] = useState({ name: "", cardEnd: "", exp: "" })
    const addCard = (e) => {
        setCardDetals({ ...cardDetals, [e.target.name]: e.target.value })

    }
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {

        setDisplay(true)
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setTouched({})
        
    };
    // const onChange = (e: CheckboxChangeEvent) => {
    //     console.log(`checked = ${e.target.checked}`);
    // };
    const { values, errors, handleBlur, handleChange, handleSubmit, touched,setTouched } = useFormik({
        initialValues: { name: "", cardEnd: "", exp: "" },
        validationSchema: billingSchema,
        onSubmit: (values) => {
            setDisplay(true)
            setIsModalOpen(false);
            console.log(values)
        }
    }
    )
    console.log(errors);
    return (
        <>
{/* style={{  }} */}
            <div style={{ height: 'auto' }}>
                <div className="header" style={{ paddingBottom: "50px", }}>
                    <Layout style={{ backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Title level={5} style={{ color: '#ea580c', paddingRight: '20px', margin: '0px' }}>Digital Event 2024</Title>
                        <Title level={5} style={{ paddingRight: '20px', marginBottom: '20px' }}> <li style={{ color: 'red' }}> <span style={{ color: '#000' }}>Offline</span> </li></Title>
                        <Title level={5} style={{ margin: '0px', color: '#595e6a' }}>Due to go live on 12/06/2023</Title>
                    </Layout>
                    <Row>
                        <Col span={18}><Title level={2} style={{ margin: '0px' }}>Billing</Title></Col>
                        <Col span={6} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button shape="round" size='large' icon={<CaretRightOutlined style={{ fontSize: '20px' }} />} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', borderColor: '#ea580c', color: '#ea580c' }}>Preview</Button>
                            <Button type="primary" shape="round" size='large' icon={<SaveFilled style={{ fontSize: '16px' }} />} style={{ backgroundColor: '#ea580c' }}>
                                Save Changes
                            </Button>
                        </Col>
                        {/* <Typography.Paragraph>
                                        Order palce through this store will appear here
                                    </Typography.Paragraph> */}
                    </Row>
                </div>
                {/* <div className="card-item" style={{ display: "flex", justifyContent: "space-between ", gap: "20px" }}> */}
                <Row style={{ gap: "20px" }} >
                    <Col sm={12} md={10} lg={10} xl={10}>
                        <Card >
                            <h2>Invoice preference</h2>
                            <span>Update invoice setting for the store. You will be invoiced weekly.</span>
                            <h4>Billing email</h4>
                            <Input placeholder='jeff.owens@xyz.com' />

                            <span>
                                This email will be used for billing purposes. Invoices and receipts will be sent to this email address.
                            </span>
                            <h4>
                                Company billing profile
                            </h4>
                            <Input placeholder='     ...' />
                            <span>
                                Additional company information to be shown on invoices e.g. address, PO number,etc.
                            </span>

                        </Card>
                    </Col>
                    <Col sm={12} md={10} lg={10} xl={10}>
                        <Card >
                            <h2>Payment details</h2>
                            <span>Payment will be taken monthly using the details below.</span>
                            <Card style={{ height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>

                                {
                                    !display ? <div > <Button type="primary" onClick={showModal} style={{ backgroundColor: '#ea580c' }}>Add payment details +</Button>
                                        <Modal title="Basic Modal" open={isModalOpen} okText='Submit' onOk={handleSubmit} onCancel={handleCancel} width={700}>
                                            <h2>Billing details</h2>
                                            <span>Please input your billing details below. Payment will be taken monthly.</span>
                                            <p >Cardholder's name</p>
                                            <Input type='text' name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} autoComplete='off' />

                                            {touched.name && errors.name && <p className='form-error' style={{ color: "red" }}>{errors.name}</p>}
                                            <p>Card number</p>
                                            <Input type='text' placeholder='eg. 0000 0000 0000 0000' name="cardEnd" value={values.cardEnd} onChange={handleChange} onBlur={handleBlur} />
                                            {touched.cardEnd && errors.cardEnd && <p className='form-error' style={{ color: "red" }}>{errors.cardEnd}</p>}
                                            <div style={{ display: "flex" }}>
                                                <div>
                                                    <p>Expiry date</p>
                                                    <Input type='text' name="exp" value={values.exp} onChange={handleChange} onBlur={handleBlur} />
                                                    {touched.exp && errors.exp && <p className='form-error' style={{ color: "red" }}>{errors.exp}</p>}

                                                </div>
                                                <div>
                                                    <p>CVV code</p>
                                                    <Input name='cvv' type='text' value={values.cvv} onChange={handleChange} onBlur={handleBlur} />
                                                    {touched.cvv && errors.cvv && <p className='form-error' style={{ color: "red" }}>{errors.cvv}</p>}

                                                </div>
                                            </div>
                                            <Checkbox onChange="">Save card for future use</Checkbox>
                                            <Checkbox onChange=""> I agree to the <span >Terms & conditions.</span></Checkbox>

                                        </Modal></div>
                                        :
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <div>
                                                <h3>Credit card</h3>
                                                <h5> {values.name}</h5>
                                                <h5> {values.cardEnd}</h5>
                                                <h5> {values.exp}</h5>
                                            </div>
                                        </div>
                                }
                            </Card>
                        </Card>
                    </Col>
                </Row>
                {/* </div> */}

            </div>


        </>
    )
}

export default Billing