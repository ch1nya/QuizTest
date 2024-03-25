import React from "react";
import {Header} from "antd/es/layout/layout";
import {Button} from "antd";
import {PoweroffOutlined} from "@ant-design/icons";
import {logout} from "../api";
import {useNavigate} from "react-router-dom";
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: '10vh',
    width:'100%',
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#454c5a',
    display:'flex',
    justifyContent:'end',
    alignItems:"center"
};
export function MyHeader() {
    const navigate = useNavigate()
    const loggingOut = async () => {
        try {
            const response = await logout()
            navigate('/login')
            return response.data
        } catch (error) {
            console.error('Error:', error);
            // Ошибки не будет :)
        }
    };

    return (
        <>
            <Header style={headerStyle}>
                <Button
                    type="primary"
                    icon={<PoweroffOutlined />}
                    // style={}
                    // loading={loadings[1]}
                    // TODO доделать для логаута
                     onClick={loggingOut}
                >
                    Click me!
                </Button>
            </Header>
        </>
    )
}