import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from 'antd';

const root = createRoot(document.body);
root.render(<Button type="primary">黄老哥牛逼</Button>);
