/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx}', './src/renderer/index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1890ff',
          hover: '#40a9ff',
          active: '#096dd9',
        },
        text: {
          primary: '#262626',
          secondary: '#8c8c8c',
          light: '#bfbfbf',
        },
        background: {
          light: 'rgba(255, 255, 255, 0.95)',
        },
        border: {
          DEFAULT: '#d9d9d9',
          hover: '#40a9ff',
          focus: '#1890ff',
        },
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '40px',
      },
      fontSize: {
        sm: '12px',
        base: '14px',
        lg: '16px',
        xl: '18px',
        xxl: '24px',
        title: '32px',
      },
      borderRadius: {
        small: '4px',
        medium: '8px',
        large: '12px',
      },
      boxShadow: {
        light: '0 2px 8px rgba(0, 0, 0, 0.1)',
        medium: '0 4px 12px rgba(0, 0, 0, 0.15)',
        heavy: '0 8px 32px rgba(0, 0, 0, 0.1)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        glass: '10px',
      },
      transitionProperty: {
        all: 'all',
      },
      transitionDuration: {
        base: '300ms',
        fast: '200ms',
        slow: '500ms',
      },
      transitionTimingFunction: {
        ease: 'ease',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  // 重要：与 Antd5 兼容的配置
  corePlugins: {
    preflight: false, // 禁用 Tailwind 的 reset，使用 Antd 的 reset
  },
};
