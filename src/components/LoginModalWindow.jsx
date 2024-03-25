import {useState} from "react";
import {Button, Modal} from "antd";
import {MyLoginForm} from "./MyLoginForm";
import {TrophyFilled} from "@ant-design/icons";

export function LoginModalWindow() {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    return (
        <>  <TrophyFilled   style={{margin:'1rem',fontSize:'6rem',color:'#fff'}}/>
            <Button type="primary" onClick={showModal}>
                Login to the quizZz
            </Button>
            <Modal
                title="Login"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={null}
            >
                <MyLoginForm/>
            </Modal>
        </>
    );
}