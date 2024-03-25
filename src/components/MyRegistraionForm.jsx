import React, { useState } from 'react';
import {
    Alert,
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select, Space,
} from 'antd';
import {register} from "../api";
import {useNavigate} from "react-router-dom";
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export function MyRegistrationForm(){
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const [alertVisible, setAlertVisible] = useState(false);
    const onFinish = async (values) => {
        try{
            const response = await register(values.username,values.password)
            console.log('Registration successful:', response);
            setAlertVisible(true)
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        }catch (e){
            console.error('Registration failed:', e);
        }
    };

    return (
        <>
            {alertVisible && (
                <Alert
                    message="Registration is successful"
                    description="Now you are going to be redirected to login page"
                    type="success"
                    showIcon
                    style={{margin:'1rem auto'}}
                />
            )}
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                }}
                style={{
                    maxWidth: 600,
                }}
                scrollToFirstError
            >

                <Form.Item
                    name="username"
                    label="Username"
                    tooltip="What do you want others to call you?"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The new password that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </>)


}
export default MyRegistrationForm