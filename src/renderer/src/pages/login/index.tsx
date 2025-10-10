import React, { useState } from 'react';
import { Form, Input, Checkbox, Space, Card, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Logo from '../../components/Logo';
import loginBg from '../../../assets/images/login-bg.png';

export default function Login() {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    console.log('登录信息:', values);
    // 这里处理登录逻辑
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      <main className="flex flex-col items-center justify-center h-full">
        <div className="w-[552px] px-14 py-12">
          <div className="flex items-center flex-col">
            <Logo size={60} />
            <div className="text-2xl py-6 font-bold">欢迎使用 snowden Disk</div>
          </div>
          <Card>
            <Form
              name="login"
              onFinish={onFinish}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input placeholder="请输入用户名" />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password
                  placeholder="请输入密码"
                  iconRender={visible =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>

              <Form.Item>
                <Space>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>自动登录</Checkbox>
                  </Form.Item>
                  <a href="#">忘记密码？</a>
                </Space>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                  size="large"
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
        <div className="mt-4 text-zinc-400">&copy; Powered by snowden.xu</div>
      </main>
    </div>
  );
}
