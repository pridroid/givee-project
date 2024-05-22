import React, { useContext, useEffect, useState } from 'react'
import { Input, Form, Layout, Modal, Pagination } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import { Typography, Col, Row, Button } from 'antd';
import { CaretRightOutlined, SaveFilled, DownloadOutlined, CloudUploadOutlined, PlusOutlined } from '@ant-design/icons';
import Search from 'antd/es/input/Search';
import Title from 'antd/es/typography/Title';
import axios from 'axios';
import { Context } from '../App';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function Guest() {
    const { userData } = useContext(Context)
    const { open, setOpen } = useContext(Context);
    const [searchData, setSearchData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        if (search !== '') {
            setSearchData(userData.filter(user => user.firstName.toLowerCase().includes(search.toLowerCase())))
            setCurrentPage(1)
        } else {
            setSearchData([...userData])
        }
    }, [userData, search])

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentData = searchData.slice(start, end);


    return (
        <>
            {/* <Layout > */}
                <Header style={{ backgroundColor: '#f9fafb', padding: '0', height: 'auto', marginBottom: '20px' }}>
                    <Layout style={{  backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Title level={5} style={{ color: '#ea580c', paddingRight: '20px', margin: '0px' }}>Digital Event 2024</Title>
                        <Title level={5} style={{ paddingRight: '20px', marginBottom: '20px' }}> <li style={{ color: 'red' }}> <span style={{ color: '#000' }}>Offline</span> </li></Title>
                        <Title level={5} style={{ margin: '0px', color: '#595e6a' }}>Due to go live on 12/06/2023</Title>
                    </Layout>
                    <Row>
                        <Col span={12}><Title level={2} style={{ margin: '0px' }}>Guest</Title></Col>
                        <Col span={12} style={{ display: 'flex', justifyContent: 'end', marginBottom: '10px' }}>
                            <Button shape="round" size='large' icon={<CaretRightOutlined style={{ fontSize: '20px' }} />} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', borderColor: '#ea580c', color: '#ea580c' }}>Preview</Button>
                            <Button type="primary" shape="round" size='large' icon={<SaveFilled style={{ fontSize: '16px' }} />} style={{ backgroundColor: '#ea580c' }}>
                                Save Changes
                            </Button>
                        </Col>
                        <Typography.Paragraph>
                            By default your guests must be invited, and validated based on the emails in this guestlist. However you can change this in Store admin.
                        </Typography.Paragraph>
                    </Row>
                </Header>

                <Content style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '30px',overflow:'hidden' ,backgroundColor: '#fff'}}>
                    <Title level={4}>Guest list</Title>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Title level={5}>Search</Title>
                        <Row gutter={50} style={{ display: 'flex', flexDirection: 'row' }}>
                            <Col span={8}>
                                <Search placeholder='Search by first name' style={{ width: 200 }} onChange={e => setSearch(e.target.value)} />
                            </Col>
                            <Col span={16} style={{ display: 'flex', justifyContent: 'end' }}>
                                <Title level={5} style={{ cursor: 'pointer', margin: '0px', color: '#ea580c', marginLeft: '40px' }}><DownloadOutlined style={{ cursor: 'pointer', color: '#ea580c', marginRight: '10px' }} />Download CSV template</Title>
                                <Title level={5} style={{ cursor: 'pointer', margin: '0px', color: '#ea580c', marginLeft: '40px' }}><CloudUploadOutlined style={{ cursor: 'pointer', color: '#ea580c', marginRight: '10px' }} />Upload as CSV</Title>
                                <Title level={5} onClick={() => setOpen(true)} style={{ cursor: 'pointer', margin: '0px', color: '#ea580c', marginLeft: '40px' }}><PlusOutlined style={{ cursor: 'pointer', color: '#ea580c', marginRight: '10px' }} />Add a guest</Title>
                            </Col>
                        </Row>

                        <div className='table-scroll' style={{ width: "100%", marginTop: '30px' }} >
                            <table style={{textAlign:'center', width: "100%", overflow: 'hidden' }}>
                                <thead>
                                    <tr>
                                        <td><strong>First Name</strong></td>
                                        <td><strong>Last Name</strong></td>
                                        <td><strong>Company</strong></td>
                                        <td><strong>Email</strong></td>
                                        <td><strong>Gift Claimed</strong></td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <hr style={{ width: '900%' }} />
                                <tbody>
                                    {currentData.map((items) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{items.firstName}</td>
                                                    <td>{items.lastName}</td>
                                                    <td>{items.company}</td>
                                                    <td>{items.email}</td>
                                                    <td>{items.giftClaimed}</td>
                                                    <td style={{ color: '#ea580c', cursor: 'pointer' }}>Details</td>
                                                </tr>
                                                <hr style={{ width: '900%' }} />
                                            </>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {currentData.length ? <Title level={5} style={{ color: '#595e6a' }}>Showing {start + 1} to {end} of {userData.length} results</Title> : <Title level={3} style={{ margin: '0' }}>No result found</Title>}
                            <Pagination current={currentPage} total={searchData.length} pageSize={itemsPerPage} onChange={onPageChange} />
                        </Row>
                    </div>
                </Content>
            {/* </Layout> */}

            <Popup open={open} setOpen={setOpen} setSearch={setSearch} />
        </>
    )
}

export function Popup({ open, setOpen, setSearch }) {
    const setGuestData = () => {
        axios.post("http://localhost:3000/Users", data.values)
            .then((responce) => {
                console.log(responce);
            })
    }

    const data = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            giftClaimed: "No"
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required("This is required field"),
            lastName: Yup.string()
                .required("This is required field"),
            company: Yup.string()
                .required("This is required field"),
            email: Yup.string()
                .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/, { message: 'Invalid email address' })
                .required("This is required field")
        }),
        onSubmit: (values, action) => {
            setGuestData();
            setSearch('');
            setOpen(false);
            action.resetForm();
        }
    });

    const handleCancel = () => {
        data.setValues({
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            giftClaimed: "No"
        })
        data.setTouched({})
        setOpen(false);
    };

    return (
        <Modal title="Add new guest" open={open} onOk={data.handleSubmit} onCancel={handleCancel} okText='Submit' width={700}>
            <Typography.Paragraph level={5}>Create a new guest entry here. You must provide an email address to validate their account.</Typography.Paragraph>
            <Form>
                <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                    <Col span={11}>
                        <Title level={5}>First Name</Title>
                        <Input type='text' id='firstName' value={data.values.firstName} onChange={data.handleChange} onBlur={data.handleBlur} />
                        {data.touched.firstName && data.errors.firstName && <p style={{ color: "red" }}>{data.errors.firstName}</p>}
                    </Col>
                    <Col span={11}>
                        <Title level={5}>Last Name</Title>
                        <Input type='text' id='lastName' value={data.values.lastName} onChange={data.handleChange} onBlur={data.handleBlur} />
                        {data.touched.lastName && data.errors.lastName && <p style={{ color: "red" }}>{data.errors.lastName}</p>}
                    </Col>
                </Row>
                <Col span={24} style={{ marginBottom: '15px' }}>
                    <Title level={5}>Company</Title>
                    <Input type='text' id='company' value={data.values.company} onChange={data.handleChange} onBlur={data.handleBlur} />
                    {data.touched.company && data.errors.company && <p style={{ color: "red" }}>{data.errors.company}</p>}
                </Col>
                <Col span={24} style={{ marginBottom: '25px' }}>
                    <Title level={5}>Email Address</Title>
                    <Input type='email' id='email' value={data.values.email} onChange={data.handleChange} onBlur={data.handleBlur} />
                    {data.touched.email && data.errors.email && <p style={{ color: "red" }}>{data.errors.email}</p>}
                </Col>
            </Form>
        </Modal>
    )
}