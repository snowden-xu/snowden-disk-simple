// 主题配置
export const theme = {
  // 主题色彩
  colors: {
    primary: '#1890ff',
    primaryHover: '#40a9ff',
    primaryActive: '#096dd9',
    text: '#262626',
    textSecondary: '#8c8c8c',
    textLight: '#bfbfbf',
    background: '#ffffff',
    backgroundLight: 'rgba(255, 255, 255, 0.95)',
    border: '#d9d9d9',
    borderHover: '#40a9ff',
    borderFocus: '#1890ff',
  },

  // 渐变色
  gradients: {
    primary: 'linear-gradient(135deg, #1890ff 0%, #40a9ff 100%)',
    primaryHover: 'linear-gradient(135deg, #40a9ff 0%, #69c0ff 100%)',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },

  // 阴影
  shadows: {
    light: '0 2px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.15)',
    heavy: '0 8px 32px rgba(0, 0, 0, 0.1)',
  },

  // 圆角
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },

  // 间距
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '40px',
  },

  // 字体大小
  fontSize: {
    sm: '12px',
    base: '14px',
    lg: '16px',
    xl: '18px',
    xxl: '24px',
    title: '32px',
  },

  // 动画
  transitions: {
    base: 'all 0.3s ease',
    fast: 'all 0.2s ease',
    slow: 'all 0.5s ease',
  },

  // 断点
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
} as const;

export type Theme = typeof theme;
