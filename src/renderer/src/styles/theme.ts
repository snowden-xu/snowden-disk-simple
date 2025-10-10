// 基于 #4945f6 的完整主题配置
export const theme = {
  token: {
    // 主色调系统
    colorPrimary: '#4945f6',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#4945f6',

    // 主色衍生色板
    colorPrimaryBg: '#f0f0ff',
    colorPrimaryBgHover: '#e6e6ff',
    colorPrimaryBorder: '#b3b3ff',
    colorPrimaryBorderHover: '#9999ff',
    colorPrimaryHover: '#3d3ae6',
    colorPrimaryActive: '#2f2cc7',
    colorPrimaryTextHover: '#3d3ae6',
    colorPrimaryText: '#2f2cc7',
    colorPrimaryTextActive: '#1f1a8c',

    // 中性色系统
    colorTextBase: '#1f2937',
    colorText: '#374151',
    colorTextSecondary: '#6b7280',
    colorTextTertiary: '#9ca3af',
    colorTextQuaternary: '#d1d5db',

    // 背景色系统
    colorBgBase: '#ffffff',
    colorBgContainer: '#ffffff',
    colorBgElevated: '#ffffff',
    colorBgLayout: '#f9fafb',
    colorBgSpotlight: '#f3f4f6',
    colorBgMask: 'rgba(0, 0, 0, 0.45)',

    // 边框色系统
    colorBorder: '#e5e7eb',
    colorBorderSecondary: '#f3f4f6',

    // 字体系统
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: 14,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,
    fontSizeLG: 16,
    fontSizeSM: 12,
    fontSizeXL: 20,
    fontSizeXS: 10,
    fontSizeXXL: 24,

    // 行高系统
    lineHeight: 1.5714285714285714,
    lineHeightLG: 1.5,
    lineHeightSM: 1.66,

    // 间距系统
    padding: 16,
    paddingLG: 24,
    paddingSM: 12,
    paddingXL: 32,
    paddingXS: 8,
    paddingXXS: 4,
    paddingXXL: 40,

    margin: 16,
    marginLG: 24,
    marginSM: 12,
    marginXL: 32,
    marginXS: 8,
    marginXXS: 4,
    marginXXL: 40,

    // 圆角系统
    borderRadius: 6,
    borderRadiusLG: 8,
    borderRadiusSM: 4,
    borderRadiusXS: 2,

    // 阴影系统
    boxShadow:
      '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
    boxShadowSecondary: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
    boxShadowTertiary: '0 1px 2px 0 rgba(0, 0, 0, 0.02)',

    // 动画系统
    motionDurationFast: '0.1s',
    motionDurationMid: '0.2s',
    motionDurationSlow: '0.3s',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseIn: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',

    // 控制高度
    controlHeight: 32,
    controlHeightLG: 40,
    controlHeightSM: 24,
    controlHeightXS: 16,

    // 组件特定配置
    wireframe: false,
  },

  // 组件主题定制
  components: {
    Button: {
      borderRadius: 6,
      controlHeight: 32,
      fontWeight: 500,
    },
    Input: {
      borderRadius: 6,
      controlHeight: 32,
    },
    Card: {
      borderRadius: 8,
      boxShadow:
        '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
    },
    Form: {
      labelFontSize: 14,
      labelColor: '#374151',
    },
    Typography: {
      titleMarginBottom: '0.5em',
      titleMarginTop: '1.2em',
    },
  },
};
