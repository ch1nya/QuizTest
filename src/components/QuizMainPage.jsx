import React from 'react';
import {Layout, Flex, Button} from 'antd';
import {MyHeader} from "./MyHeader";
import MyContent from "./MyContent";
import {getQuizById, getQuizzes, getUser, getUsers} from "../api";
import async from "async";
const { Header, Footer, Sider, Content } = Layout;


const layoutStyle = {
    borderRadius: 0,
    overflow: 'hidden',
    width: '100vw',
    maxWidth: '100vw',
    // height: '100vh',
    minHeight: '100vh'
};
export function QuizMainPage() {



    return (
        <Flex gap="middle" wrap="wrap">
            <Layout style={layoutStyle}>
                <MyHeader/>
                <MyContent/>
            </Layout>
        </Flex>

            )
}