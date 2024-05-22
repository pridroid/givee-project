import React from 'react'
import Logo from '../assets/Logo.png'
import Title from 'antd/es/typography/Title'
import { Divider } from 'antd'

export default function Footers() {
    return (
        <>
            <Divider style={{ border: '1px solid #ccc', margin: '10px 0' }} />

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={Logo} alt="" style={{ width: '100px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Title level={5} style={{ margin: '0px', color: '#595e6a', fontSize: "12px" }}>@ 2023 PCNA Inc. All rights reserved.</Title>
                <Title level={5} style={{ margin: '0px', color: 'darkblue', marginLeft: '70px', fontSize: "12px" }}>Built on the givee platform</Title>
                <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                    , gap: '20px'
                }}>
                    <Title level={5} style={{ margin: '0px', color: '#595e6a',fontSize:"12px" }}>Privacy Policy</Title>
                    <Title level={5} style={{ margin: '0px', color: '#595e6a',fontSize:"12px" }}>Terms & Condations</Title>
                    <Title level={5} style={{ margin: '0px', color: '#595e6a',fontSize:"12px" }}>Contact</Title>

                </div>
            </div>
        </>
    )
}