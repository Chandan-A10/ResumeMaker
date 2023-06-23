import React,{ useState, useCallback } from "react";
import { Form, Input, Modal, Button } from "antd";
import { ExpandAltOutlined, CloseCircleOutlined, CheckCircleOutlined, UndoOutlined } from '@ant-design/icons';
import { loginStyles } from "../assests/styles/loginStyle"
import { useNavigate, useSearchParams, createSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCv } from "../reducer/user";
import useAuthenticationCheck from "../utils/auth";

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
};

export const CV=React.memo(()=>{
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const users = useSelector(state => state.users);
    const navigator = useNavigate();
    const [search] = useSearchParams();
    const mobile = search.get('mobile');
    const [values, setValues] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useAuthenticationCheck(mobile,users)

    const changeValue=useCallback((_, allValues) => {
        setValues(allValues);
    },[]);

    const handleCancel = useCallback(() => {
        navigator({ pathname: '/dashboard', search: createSearchParams({ mobile }).toString() });
    },[navigator, mobile]);
    
    const handleReset = useCallback(() => {
        form.resetFields();
        setValues('');
    },[form]);

    const onFinish =(values) => {
        values.user.id = Date.now();
        dispatch(setCv({ mobile, user: values.user }));
        console.log(users);
    };

    return(
        <>
      <div style={loginStyles.container}>
        <Form name="form" form={form} onValuesChange={changeValue} onFinish={onFinish} style={{ maxWidth: 600 }} validateMessages={validateMessages}>
          <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
            <Input />
          </Form.Item>

          <Form.Item name={['user', 'summary']} label="Summary">
            <Input.TextArea />
          </Form.Item>

          <Form.Item name={['user', 'experience']} label="Experience">
            <Input.TextArea />
          </Form.Item>

          <Form.Item name={['user', 'skills']} label="Skills">
            <Input.TextArea />
          </Form.Item>

          <Form.Item name={['user', 'address']} label="Address">
            <Input.TextArea />
          </Form.Item>

          <Form.Item name={['user', 'phone']} label="Phone Number" rules={[{ required: true, message: 'Please input your phone number!' }]}>
            <Input addonBefore="+91" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item>
            <Button size="large" icon={<ExpandAltOutlined />} onClick={() => setIsModalOpen(true)} />
            <Button size="large" style={{ marginLeft: '17%' }} icon={<CloseCircleOutlined />} onClick={handleCancel} />
            <Button size="large" htmlType='submit' style={{ marginLeft: '17%' }} icon={<CheckCircleOutlined />} />
            <Button size="large" style={{ marginLeft: '17%' }} icon={<UndoOutlined />} onClick={handleReset} />
          </Form.Item>
        </Form>

        {isModalOpen && (
          <Modal
            title={values?.user?.name || 'Name Here'}
            open={isModalOpen}
            onOk={() => setIsModalOpen(false)}
            onCancel={() => setIsModalOpen(false)}
            cancelButtonProps={{ disabled: true }}
          >
            <p><b>Email: </b><span>{values?.user?.email || 'example@gmail.com'}</span></p>
            <p><b>Summary: </b><span>{values?.user?.summary || 'Write a short summary for the job you are applying for'}</span></p>
            <p><b>Experience: </b><span>{values?.user?.experience || 'Write about previous jobs or any other experience'}</span></p>
            <p><b>Skills: </b><span>{values?.user?.skills || 'Mention your technical and interpersonal skills'}</span></p>
            <p><b>Address: </b><span>{values?.user?.address || '#351, G.F, Barotiwala, Baddi, Himachal'}</span></p>
            <p><b>Contact number: </b><span>{values?.user?.phone || '+91 000-000-0000'}</span></p>
          </Modal>
        )}
      </div>
    </>
  );
});

export default CV;