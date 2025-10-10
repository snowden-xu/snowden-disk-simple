# 静态资源目录

## 目录结构

```
assets/
├── images/          # 图片文件
│   ├── logo.png     # 应用 Logo
│   ├── logo.svg     # SVG Logo
│   ├── icons/       # 图标文件
│   └── backgrounds/ # 背景图片
├── fonts/           # 字体文件
└── data/            # 静态数据文件
```

## 使用方式

### 在组件中导入图片

```typescript
import logo from '@/assets/images/logo.png';
import background from '@/assets/images/backgrounds/login-bg.jpg';

// 使用
<img src={logo} alt="Logo" />
<div style={{ backgroundImage: `url(${background})` }} />
```

### 在 Less 中使用

```less
.logo {
  background-image: url('@/assets/images/logo.png');
}
```

### 在 HTML 中引用

```html
<link rel="icon" href="/assets/images/icons/favicon.ico" />
```
