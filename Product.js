import React, { useContext, useEffect, useState } from "react";
import axios from 'axios'
import Title from "antd/es/typography/Title";
import { Button, Col, Layout, Row, Select } from "antd";
import { CaretRightOutlined, BarsOutlined, SaveFilled } from '@ant-design/icons';
import Search from "antd/es/input/Search";
import { Header } from "antd/es/layout/layout";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";


// import "./ProductStyles.css";
// import CopperBottel from "../asset/CopperBottle.png";
// import Shirt from "../asset/Shirt.png";
// import Earbuds from "../asset/Earbuds.png";
// import PowerBank from "../asset/PowerBank.jpg";
const Product = () => {
    const { product, setProduct } = useContext(Context)
    const navTo = useNavigate()
    // const [product, setProduct] = useState([]);

    // console.log(product);

    return (
        <>
            <div style={{ width: '100%', }}>
                <Header style={{ backgroundColor: '#f9fafb', padding: '0', height: 'auto', marginBottom: '20px' }}>
                    <Layout style={{ backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Title level={5} style={{ color: '#ea580c', paddingRight: '20px', margin: '0px' }}>Digital Event 2024</Title>
                        <Title level={5} style={{ paddingRight: '20px', marginBottom: '20px' }}> <li style={{ color: 'red' }}> <span style={{ color: '#000' }}>Offline</span> </li></Title>
                        <Title level={5} style={{ margin: '0px', color: '#595e6a' }}>Due to go live on 12/06/2023</Title>
                    </Layout>
                    <Row>
                        <Col span={12}><Title level={2} style={{ margin: '0px' }}>Products</Title></Col>
                        <Col span={12} style={{ display: 'flex', justifyContent: 'end' }}>
                            <Button shape="round" size='large' icon={<CaretRightOutlined style={{ fontSize: '20px' }} />} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', borderColor: '#ea580c', color: '#ea580c' }}>Preview</Button>
                            <Button type="primary" shape="round" size='large' icon={<SaveFilled style={{ fontSize: '16px' }} />} style={{ backgroundColor: '#ea580c' }}>
                                Save Changes
                            </Button>
                        </Col>

                    </Row>
                </Header>
                <Col span={18}>
                    <p style={{ textAlign: "left", fontSize: "15px" }} id="txt">
                        Here you van choose the product selection for your store.We have
                        automatically chosen a selection for you based on the information you
                        give us,but you may add or remove items from this list.Just make sure
                        that the expected number of visitors will be plenty higher than the
                        minimun order quantities for all products on your site.
                    </p>
                </Col>
                <div style={{ margin: "0px", marginLeft: "935px" }}>
                    <Title level={5} >Search</Title>
                </div>

                <div id="slt2" style={{ textAlign: "start", margin: "0px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div >
                            <button
                                id="slt"
                                style={{
                                    backgroundColor: "#ea580c",
                                    border: "none",
                                    borderRadius: "20px",
                                    fontSize: "large",
                                    padding: "10px",
                                    color: 'white'
                                }}
                            >
                                My selection(18)
                            </button>
                            <button
                                style={{
                                    marginLeft: "10px",
                                    marginRight: "100px",
                                    border: "none",
                                    backgroundColor: "white",
                                    fontSize: "large"
                                }}
                                id="pro"
                            >
                                All Product(387)
                            </button>
                        </div>

                        <div
                            style={{
                                marginLeft: "10px",
                                paddingLeft: "200px",
                                display: "flex",
                                flexDirection: "row",
                                gap: "10px",
                            }}
                            id="srch"
                        >
                            <Search

                                style={{
                                    // width: 300,
                                }} />
                            <button id="srch2" style={{ textAlign: "end" }}>
                                Search
                            </button>
                        </div>

                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Title level={5}>Category</Title>
                                <Select
                                    placeholder="All" mode="multiple"
                                    style={{
                                        width: '270px', borderRadius: "5px",
                                        border: "#d9d9d9 solid 1px"
                                    }}

                                />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
                                <Title level={5} >Price min</Title>
                                <input
                                    placeholder="$ Min" mode="numbers"
                                    style={{
                                        width: '100px', borderRadius: "5px",
                                        border: "#d9d9d9 solid 1px", textAlign: "center", height: "30px"
                                    }}

                                />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
                                <Title level={5}>Price max</Title>
                                <input
                                    placeholder="$ Max" mode="numbers"
                                    style={{
                                        width: '100px', borderRadius: "5px",
                                        border: "#d9d9d9 solid 1px", textAlign: "center", height: "30px"
                                    }}

                                />
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "end", justifyContent: "end" }}>
                            <Button type='primary' shape='round' icon={<BarsOutlined />} style={{ alignContent: "right", backgroundColor: "#f5f5f5", borderColor: "#fa541c", color: "#fa541c" }}><b>Sort products</b></Button>
                        </div>
                    </div>

                </div>
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "35px" }}>
                    {
                        product.map((ele) => {
                            console.log(ele);
                            return (

                                <div
                                    id="card1"
                                    className="pricing"
                                    style={{

                                        width: "calc((100% / 3 ) - 76px)",
                                        padding: "30px",
                                        background: "white",
                                        borderRadius: "10px",
                                        border: "#d9d9d9 solid 1px",
                                        position: "relative",
                                        overflow: "none"

                                    }}
                                >
                                    <div
                                        className="card-container"
                                        style={{

                                            margin: "auto",

                                            gridTemplateColumns: "repeat(3, 1fr)",
                                            gridGap: "40px",
                                        }}
                                    >
                                        <div className="card">
                                            <img
                                                style={{ width: "100%", height: "270px", }}
                                                id="Bag"
                                                src={ele.image}
                                                alt="bgImg"
                                            ></img>
                                            <button
                                                style={{
                                                    backgroundColor: "#f2d5bb",
                                                    border: "none",
                                                    textColor: "#fc3903",
                                                    position: "absolute", top: "290px", left: "155px"

                                                }}
                                            >
                                                Make it your own
                                            </button>
                                            <button
                                                style={{
                                                    backgroundColor: "#fadf87",
                                                    borderColor: "#fadd87",
                                                    marginTop: "30px",
                                                    width: "100%",
                                                    textAlign: "start",
                                                }}
                                            >
                                                <i
                                                    style={{ color: "#f5b042" }}
                                                    class="fa-solid fa-triangle-exclamation"
                                                ></i>
                                                set customization
                                            </button>
                                            <h3 style={{ fontWeight: "bold" }}>{ele.name}</h3>
                                            <span style={{ display: "flex" }} id="Year">
                                                {ele.model_number}
                                            </span>
                                            <br></br>
                                            <div style={{ paddingRight: "130px" }}>
                                                <span style={{ color: "green" }}>•</span> In Stock
                                            </div>
                                            <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
                                                <button
                                                    style={{
                                                        width: "20px",
                                                        height: "20px",
                                                        borderRadius: "50%",
                                                        backgroundColor: "black",
                                                        border: "none",
                                                        boxShadow: "0px 0px 1px 2px white,0px 0px 1px 3px black",
                                                    }}
                                                />
                                                <button
                                                    style={{
                                                        width: "20px",
                                                        height: "20px",
                                                        borderRadius: "50%",
                                                        backgroundColor: "white",
                                                        border: "1px solid grey",
                                                    }}
                                                />
                                                <button
                                                    style={{
                                                        width: "20px",
                                                        height: "20px",
                                                        borderRadius: "50%",
                                                        backgroundColor: "darkblue",
                                                        border: "none",
                                                    }}
                                                />
                                                <button
                                                    style={{
                                                        width: "20px",
                                                        height: "20px",
                                                        borderRadius: "50%",
                                                        backgroundColor: "brown",
                                                        border: "none",
                                                    }}
                                                />
                                                <button
                                                    style={{
                                                        width: "20px",
                                                        height: "20px",
                                                        borderRadius: "50%",
                                                        backgroundColor: "lightgreen",
                                                        border: "none",
                                                    }}
                                                />
                                                <button
                                                    style={{
                                                        width: "20px",
                                                        height: "20px",
                                                        borderRadius: "50%",
                                                        backgroundColor: "orange",
                                                        border: "none",
                                                    }}
                                                />
                                                <button
                                                    style={{
                                                        width: "20px",
                                                        height: "20px",
                                                        borderRadius: "50%",
                                                        backgroundColor: "grey",
                                                        border: "none",
                                                    }}
                                                />
                                            </div>

                                            <p style={{ textAlign: "left", width: "200px" }}>
                                                {ele.description}

                                            </p>
                                            <table
                                                id="Bg1"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "flex-start",
                                                    textAlign: "start",
                                                }}
                                            >
                                                <tbody>
                                                    <td>
                                                        <tr>
                                                            <td>Coded Price</td>
                                                            <td>
                                                                <b>{ele.code_price}</b>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Net Price</td>
                                                            <td>
                                                                <b>{ele.Net_price}</b>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>shipping</td>
                                                            <td>
                                                                <b>{ele.Shipping}</b>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Minimum order qty</td>
                                                            <td>
                                                                <b>{ele.Minimum_order_quantity}</b>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Inventory</td>
                                                            <td>
                                                                <b>{ele.Inventory}</b>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Personalization</td>
                                                            <td>
                                                                <b>{ele.Personalization}</b>
                                                            </td>
                                                        </tr>
                                                    </td>
                                                </tbody>
                                            </table>
                                            <button
                                                style={{
                                                    color: "#fc3903",
                                                    border: "none",
                                                    display: "flex",
                                                    justifyContent: "flex-start",
                                                }}
                                                onClick={() => navTo(`/product/${ele.id}`)}
                                            >
                                                View details
                                            </button>
                                        </div>


                                    </div>
                                </div>

                            )
                        })
                    }
                </div>



            </div>
        </>
    );
};


export default Product;


{/* <div className="card">
                            <img className="img" id="Bottle" src={"CopperBottel"} alt="" />
                            <button
                                style={{
                                    backgroundColor: "#fadf87",
                                    borderColor: "#fadd87",
                                    marginTop: "30px",
                                    width: "190px",
                                    textAlign: "start",
                                }}
                            >
                                <i
                                    style={{ color: "#f5b042" }}
                                    class="fa-solid fa-triangle-exclamation"
                                ></i>
                                set customization
                            </button>
                            <h3 style={{ fontWeight: "bold" }}>Hydro Flask All Around Tumbler..</h3>
                            <span style={{ display: "flex" }}>1601-95ST</span>
                            <br></br>
                            <span style={{ paddingRight: "130px" }}>
                                <span style={{ color: "green" }}>•</span>In Stock
                            </span>
                            <div style={{ display: "flex", gap: "5px" }}>
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "black",
                                        border: "none",
                                        boxShadow: "0px 0px 1px 2px white,0px 0px 1px 3px black",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "white",
                                        border: "1px solid grey",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "darkblue",
                                        border: "none",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "brown",
                                        border: "none",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "lightgreen",
                                        border: "none",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "#fc3903",
                                        border: "none",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "grey",
                                        border: "none",
                                    }}
                                />
                            </div>

                            <p style={{ textAlign: "left", width: "200px" }}>
                                {" "}
                                Refresh and refreshing .Ready for power smoothies or your favourite
                                tea,our 20 QZ All Around
                                <i
                                    style={{ fontSize: "8px" }}
                                    class="fa-sharp fa-solid fa-trademark"
                                ></i>
                                Tumbler keeps beverages...
                            </p>
                            <table>
                                <tbody
                                    id="Bg2"
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        textAlign: "start",
                                    }}
                                >
                                    <td>
                                        <tr>
                                            <td>Coded Price</td>
                                            <td>
                                                <b>$26.67</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Net Price</td>
                                            <td>
                                                <b>$14.98</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>shipping</td>
                                            <td>
                                                <b>$10 flat rate US domestic</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Minimum order qty</td>
                                            <td>
                                                <b>1</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Inventory</td>
                                            <td>
                                                <b>1</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Personalization</td>
                                            <td>
                                                <b>No</b>
                                            </td>
                                        </tr>
                                    </td>
                                </tbody>
                            </table>
                            <button
                                style={{
                                    color: "#fc3903",
                                    border: "none",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                }}
                            >
                                {" "}
                                View details
                            </button>
                        </div>
                        <div className="card">
                            <img
                                style={{ height: "270px", width: "200px" }}
                                id="Shirt"
                                // src={}
                                alt=""
                            />
                            <button
                                style={{
                                    backgroundColor: "#fadf87",
                                    borderColor: "#fadd87",
                                    marginTop: "30px",
                                    width: "190px",
                                    textAlign: "start",
                                }}
                            >
                                <i
                                    style={{ color: "#f5b042" }}
                                    class="fa-solid fa-triangle-exclamation"
                                ></i>
                                set customization
                            </button>
                            <h3 style={{ fontWeight: "bold" }}>
                                UNTUCKit Bella Long Sleeve Shirt..
                            </h3>
                            <span style={{ display: "flex" }}>TM40190_FBS</span>
                            <br></br>

                            <span style={{ paddingRight: "130px" }}>
                                {" "}
                                <span style={{ color: "green" }}>•</span>In Stock
                            </span>

                            <div style={{ display: "flex", gap: "5px" }}>
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "black",
                                        border: "none",
                                        boxShadow: "0px 0px 1px 2px white,0px 0px 1px 3px black",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "white",
                                        border: "1px solid grey",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "darkblue",
                                        border: "none",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "brown",
                                        border: "none",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "lightgreen",
                                        border: "none",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "orange",
                                        border: "none",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "grey",
                                        border: "none",
                                    }}
                                />
                            </div>

                            <p style={{ textAlign: "left", width: "200px" }}>
                                {" "}
                                A signature style made sustaianable ,the Eco Retreat backpack is
                                designed for daily joureys through the city. This class
                            </p>
                            <table>
                                <tbody
                                    id="Bg3"
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        textAlign: "start",
                                    }}
                                >
                                    <td>
                                        <tr>
                                            <td>Coded Price</td>
                                            <td>
                                                <b>$26.67</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Net Price</td>
                                            <td>
                                                <b>$14.98</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>shipping</td>
                                            <td>
                                                <b>$10 flat rate US domestic</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Minimum order qty</td>
                                            <td>
                                                <b>1</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Inventory</td>
                                            <td>
                                                <b>1</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Personalization</td>
                                            <td>
                                                <b>No</b>
                                            </td>
                                        </tr>
                                    </td>
                                </tbody>
                            </table>
                            <button
                                style={{
                                    color: "#fc3903",
                                    border: "none",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                }}
                            >
                                {" "}
                                View details
                            </button>
                        </div>

                        <div className="card">
                            <img
                                style={{ height: "270px", width: "200px" }}
                                id="Earbuds"
                                src={Earbuds}
                                alt=""
                            />
                            <button
                                style={{
                                    backgroundColor: "#fadf87",
                                    borderColor: "#fadd87",
                                    marginTop: "30px",
                                    width: "190px",
                                    textAlign: "start",
                                }}
                            >
                                <i
                                    style={{ color: "#f5b042" }}
                                    class="fa-solid fa-triangle-exclamation"
                                ></i>
                                set customization
                            </button>
                            <h3 style={{ fontWeight: "bold" }}>Skullcandy Jib 2 True Wireless..</h3>
                            <span style={{ display: "flex" }}>1601-95ST</span>

                            <span style={{ paddingRight: "130px" }}>
                                <span style={{ color: "green" }}>•</span> In Stock
                            </span>
                            <div style={{ display: "flex", gap: "5px" }}>
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "black",
                                        border: "none",
                                        boxShadow: "0px 0px 1px 2px white,0px 0px 1px 3px black",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "white",
                                        border: "1px solid grey",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "darkblue",
                                        border: "none",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "brown",
                                        border: "none",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "lightgreen",
                                        border: "none",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "#fc3903",
                                        border: "none",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "grey",
                                        border: "none",
                                    }}
                                />
                            </div>

                            <p style={{ textAlign: "left", width: "200px" }}>
                                {" "}
                                A signature style made sustaianable ,the Eco Retreat backpack is
                                designed for daily joureys through the city. This class
                            </p>
                            <table>
                                <tbody
                                    id="Bg4"
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        textAlign: "start",
                                    }}
                                >
                                    <td>
                                        <tr>
                                            <td>Coded Price</td>
                                            <td>
                                                <b>$26.67</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Net Price</td>
                                            <td>
                                                <b>$14.98</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>shipping</td>
                                            <td>
                                                <b>$10 flat rate US domestic</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Minimum order qty</td>
                                            <td>
                                                <b>1</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Inventory</td>
                                            <td>
                                                <b>1</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Personalization</td>
                                            <td>
                                                <b>No</b>
                                            </td>
                                        </tr>
                                    </td>
                                </tbody>
                            </table>
                            <button
                                style={{
                                    color: "#fc3903",
                                    border: "none",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                }}
                            >
                                {" "}
                                View details
                            </button>
                        </div>
                        <div
                            style={{
                                border: "1px solid #eee",
                                textAlign: "center",
                                padding: "1rem",
                                border: "2px solid black",
                                width: "202px",
                            }}
                            className="card"
                        >
                            <img
                                style={{ height: "270px", width: "200px" }}
                                id="PowerBank"
                                src={PowerBank}
                                alt=" "
                            />
                            <button
                                style={{
                                    backgroundColor: "#fadf87",
                                    borderColor: "#fadd87",
                                    marginTop: "30px",
                                    width: "190px",
                                    textAlign: "start",
                                }}
                            >
                                <i
                                    style={{ color: "#f5b042" }}
                                    class="fa-solid fa-triangle-exclamation"
                                ></i>
                                set customization
                            </button>
                            <h3 style={{ fontWeight: "bold" }}>Mophie PowerStation Wireless...</h3>
                            <span style={{ display: "flex" }}>1601-95ST</span>
                            <span style={{ paddingRight: "130px" }}>
                                <span style={{ color: "green" }}>•</span>In Stock
                            </span>
                            <div style={{ display: "flex", gap: "5px" }}>
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "black",
                                        border: "none",
                                        boxShadow: "0px 0px 1px 2px white,0px 0px 1px 3px black",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "white",
                                        border: "1px solid grey",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "darkblue",
                                        border: "none",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "brown",
                                        border: "none",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "lightgreen",
                                        border: "none",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "orange",
                                        border: "none",
                                    }}
                                />
                                <button
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: "grey",
                                        border: "none",
                                    }}
                                />
                            </div>

                            <p style={{ textAlign: "left", width: "200px" }}>
                                {" "}
                                A signature style made sustaianable ,the Eco Retreat backpack is
                                designed for daily joureys through the city. This class
                            </p>
                            <table>
                                <tbody
                                    id="Bg5"
                                    style={{
                                        display: "flex",
                                        justifycontent: "flex-start",
                                        textAlign: "start",
                                    }}
                                >
                                    <td>
                                        <tr>
                                            <td>Coded Price</td>
                                            <td>
                                                <b>$26.67</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Net Price</td>
                                            <td>
                                                <b>$14.98</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>shipping</td>
                                            <td>
                                                <b>$10 flat rate US domestic</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Minimum order qty</td>
                                            <td>
                                                <b>1</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Inventory</td>
                                            <td>
                                                <b>1</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Personalization</td>
                                            <td>
                                                <b>No</b>
                                            </td>
                                        </tr>
                                    </td>
                                </tbody>
                            </table>
                            <button
                                style={{
                                    color: "orange",
                                    border: "none",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                }}
                            >
                                {" "}
                                View details
                            </button>
                        </div>

                        <p style={{ textAlign: "left", width: "200px" }}>
                            {" "}
                            A signature style made sustaianable ,the Eco Retreat backpack is
                            designed for daily joureys through the city. This class
                        </p>
                        <table id="Bg1">
                            <tbody>
                                <td>
                                    <tr>
                                        <td>Coded Price</td>
                                        <td>
                                            <b>$26.67</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Net Price</td>
                                        <td>
                                            <b>$14.98</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>shipping</td>
                                        <td>
                                            <b>$10 flat rate US domestic</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Minimum order qty</td>
                                        <td>
                                            <b>1</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Inventory</td>
                                        <td>
                                            <b>1</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Personalization</td>
                                        <td>
                                            <b>No</b>
                                        </td>
                                    </tr>
                                </td>
                            </tbody>
                        </table>
                        <button
                            style={{
                                color: "orange",
                                border: "none",
                                display: "flex",
                                justifyContent: "flex-start",
                            }}
                        >
                            {" "}
                            View details
                        </button> */}