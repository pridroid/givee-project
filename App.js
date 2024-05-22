import logo from './logo.svg';
import './App.css';
import Email from './components/Email';
import Orders from './components/Orders';
import Billing from './components/Billing';
// import Dashboard from './components/DashboardDemo';
import Dashboard from './components/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Guest from './components/Guest';
import { Footer } from 'antd/es/layout/layout';
import Footers from './components/Footers';
import StoreAdmin from './components/StoreAdmin';
import Shipping from './components/Shipping';
import StoreOverview from './components/StoreOverview';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Product from './components/Product';
import Design from './components/Design';
import { Drawer } from 'antd';
import Example from './components/Dashboard';
import ProductDetails from './components/ProductDetails';
// import Navi from './components/Navi';


export const Context = createContext()

function App() {
  const [open, setOpen] = useState(false)
  const [product, setProduct] = useState([])
  const [userData, setUserData] = useState([])
  // console.log(userData);


  const getUsersData = () => {
    let URL = "http://localhost:3000/Users"
    axios.get(URL)
      .then((responce) => {
        setUserData(responce.data)
        // console.log(responce.data);
      })
  }

  useEffect(() => {
    axios.get("http://localhost:3000/product")
      .then(res => setProduct(res.data))
  }, [])

  useEffect(() => {
    getUsersData()
  }, [open])


  // const getProduct = async () => {
  //   let URL = "http://localhost:3000/users"
  //   const data = await axios.get(URL)


  //   setProduct(data.data)


  // }

  // const setGuestData = () => {
  //   const setDataURL = "http://localhost:3000/Users";
  //   // axios.post(JSON.stringify(setDataURL),);
  // }
  // useEffect(() => {

  //   getProduct()
  // }, [])
  return (
    <Context.Provider value={{ userData, setUserData, open, setOpen, product, setProduct }}>
      <div className="App">
        {/* <Browserroute></Browserroute> */}
        {/* <Orders/> */}
        {/* <Billing/> */}
        {/* <Dashboard/> */}
        <div style={{ display: "flex" }}>
          {/* style={{ backgroundColor: "#f9fafb"}} */}
          <div className="dashboard" >
            <Dashboard />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '0 20px', width: '100%' }}>
            <Routes>
              <Route path="/storeoverview" element={<StoreOverview />} />
              {/* <Route path="/" element={<Example />} /> */}
              <Route path="/design" element={<Design />} />
              <Route path="/product" element={<Product />} />
              <Route path="/guest" element={<Guest />} />
              <Route path="/email" element={<Email />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/storeadmin" element={<StoreAdmin />} />
              <Route exact path="/product/:id" element={<ProductDetails />} />

            </Routes>

            <Footer style={{ marginBottom: 'auto', backgroundColor: "#f9fafb", padding: "20px", position: "relative", bottom: "0%", width: "100%" }}>
              <Footers />
            </Footer>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
