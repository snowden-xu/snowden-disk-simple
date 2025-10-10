import React from 'react';
import { createRoot } from 'react-dom/client';
import { StyleProvider } from '@ant-design/cssinjs';
import { AppRouter } from '@/router';
import 'antd/dist/reset.css';
import './styles/globals.css';

const root = createRoot(document.body);
root.render(
  <StyleProvider layer>
    <AppRouter />
  </StyleProvider>
);
