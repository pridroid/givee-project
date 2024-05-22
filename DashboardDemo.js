
import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <Menu>
                    

                </Menu>
                {/* <div className="dashboard-container" style={{ display: "flex", flexDirection: "column", gap: "20px", borderRight: "1px solid black", height: "100vh", width: "200px", }}>

                    <div style={{ borderBottom: "1px solid black", padding: "20px" }}>
                        <img src='' alt='Logo' />
                        <h4>All stores</h4>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px", }}>
                        <Link to="/storeoverview">
                            <div>
                                <i className="fa-solid fa-store" style={{ width: "30px" }}></i>
                                <span style={{ fontSize: "18px", fontWeight: "0px" }}>Store overview</span>
                            </div>
                        </Link>
                        <Link to="/design">
                            <div>
                                <i className="fa-solid fa-swatchbook" style={{ width: '30px' }}></i>
                                <span style={{ fontSize: "18px", fontWeight: "0px" }}>Design</span>
                            </div>
                        </Link>
                        <Link to="product">
                            <div>
                                <i className="fa-solid fa-gift" style={{ width: '30px' }}></i>
                                <span style={{ fontSize: "18px", fontWeight: "0px" }}>Product</span>
                            </div>
                        </Link>
                        <Link to="/guest">
                            <div>
                                <i className="fa-solid fa-users" style={{ width: '30px' }}></i>
                                <span style={{ fontSize: "18px", fontWeight: "0px" }}>Guests</span>
                            </div>
                        </Link>
                        <Link to="/email">
                            <div>
                                <i className="fa-solid fa-envelope" style={{ width: "30px" }}></i>
                                <span style={{ fontSize: "18px", fontWeight: "0px" }}>Email</span>
                            </div>
                        </Link>
                        <Link to="/orders">
                            <div>
                                <i className="fa-solid fa-envelope" style={{ width: "30px" }}></i>
                                <span style={{ fontSize: "18px", fontWeight: "0px" }}>Orders</span>
                            </div>
                        </Link>
                        <Link to="/shipping">
                            <div>
                                <i className="fa-solid fa-truck-fast" style={{ width: "30px" }}></i>
                                <span style={{ fontSize: "18px", fontWeight: "0px" }}>Shipping</span>
                            </div>
                        </Link>
                        <Link to="/billing">
                            <div>
                                <i className="fa-solid fa-credit-card" style={{ width: "30px" }}></i>
                                <span style={{ fontSize: "18px", fontWeight: "0px" }}>Billing</span>
                            </div>
                        </Link>
                        <Link to="/storeadmin">
                            <div>
                                <i className="fa-solid fa-wrench" style={{ width: "30px" }}></i>
                                <span style={{ fontSize: "18px", fontWeight: "0px" }}>Store admin</span>
                            </div>
                        </Link>
                    </div>
                </div> */}
            </Sider>
        </Layout>
    )
}

export default Dashboard