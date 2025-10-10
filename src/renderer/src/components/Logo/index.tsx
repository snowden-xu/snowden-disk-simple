import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 60, className }) => {
  // 使用 require 来导入 SVG 文件
  const logoSrc = require('../../../assets/images/logo.svg');

  return (
    <img
      src={logoSrc}
      alt="snowden Disk Logo"
      width={size}
      height={size}
      className={className}
      style={{
        objectFit: 'contain',
        display: 'block',
      }}
    />
  );
};

export default Logo;
