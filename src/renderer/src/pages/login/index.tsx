import React, { useState } from 'react';
import { Form, Input, Typography, Checkbox, Space, Card, Button } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from '@ant-design/icons';
import Logo from '../../components/Logo';

const { Text } = Typography;

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
    <div className="login-container">
      <div className="w-full max-w-[420px]">
        {/* 品牌标识 */}
        <div className="text-center mb-xxl">
          <div className="mb-lg flex justify-center">
            <div className="w-[60px] h-[60px] rounded-medium flex items-center justify-center mx-auto transition-all duration-base overflow-hidden">
              <Logo size={60} />
            </div>
          </div>
          <Typography.Title
            level={2}
            className="!m-0 text-2xl font-medium text-white"
          >
            欢迎使用 snowden Disk
          </Typography.Title>
        </div>

        {/* 登录表单 */}
        <Card className="glass-card p-xxl">
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
              <Space style={{ width: '100%', justifyContent: 'space-between' }}>
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
                className="primary-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>

        {/* 版权信息 */}
        <div className="text-center mt-xl">
          <Text type="secondary" className="text-sm text-gray-500">
            © Powered by snowden.xu
          </Text>
        </div>
      </div>
    </div>
  );
}
