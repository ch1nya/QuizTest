import {useState} from "react";
import {Modal} from "antd";
import {TrophyFilled} from "@ant-design/icons";
import MyRegistrationForm from "./MyRegistrationForm";
import {useNavigate} from "react-router-dom";

export function RegistrationModalWindow() {
    const [open, setOpen] = useState(true);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const navigate = useNavigate()
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        setOpen(false);
        navigate('/')

    };
    return (
        <>  <TrophyFilled   style={{margin:'1rem',fontSize:'6rem',color:'#fff'}}/>
            <Modal
                title="Registration"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                okText = 'Register'
                footer={null}
            >
                <MyRegistrationForm />
            </Modal>
        </>
    );
}