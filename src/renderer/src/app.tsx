import React from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { AppRouter } from '@/router';
import './styles/globals.css';

const root = createRoot(document.body);
root.render(
  <ConfigProvider>
    <AppRouter />
  </ConfigProvider>
);
