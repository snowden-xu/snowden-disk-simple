import React from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { AppRouter } from '@/router';
import './styles/globals.css';
import { theme } from './styles/theme';

const root = createRoot(document.body);
root.render(
  <ConfigProvider theme={theme}>
    <AppRouter />
  </ConfigProvider>
);
