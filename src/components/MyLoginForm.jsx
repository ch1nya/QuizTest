import {useEffect, useState} from "react";
import {Button, Checkbox, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {getQuizById, getQuizzes, login} from "../api";
import {useNavigate} from "react-router-dom";
export function MyLoginForm(){

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    const onFinish = async (values) => {

        setLoading(true);
        try {
            const response = await login(values.username, values.password);
            console.log('Login successful:', response);
            navigate('/main')

        } catch (error) {
            setError('Login failed. Please check your credentials.');
            console.error('Login failed:', error);
        }
        setLoading(false);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button style={{width:"100%"}} type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="/registration">register now!</a>
            </Form.Item>

        </Form>
    );
}
    export default MyLoginForm