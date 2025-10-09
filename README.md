# snowden-disk-simple

## 项目简介

`snowden-disk-simple` 是一个基于 Electron、React 和 TypeScript 的桌面应用，使用 electron-forge 进行构建和打包，webpack 负责主进程和渲染进程的打包。支持多平台打包，集成了代码规范工具。

## 目录结构

```
├── forge.config.ts           # Electron Forge 配置
├── package.json              # 项目依赖与脚本
├── tsconfig.json             # TypeScript 配置
├── webpack.main.config.ts    # 主进程 webpack 配置
├── webpack.plugins.ts        # webpack 插件配置
├── webpack.renderer.config.ts# 渲染进程 webpack 配置
├── webpack.rules.ts          # webpack 规则
├── src/
│   ├── main/
│   │   └── index.ts          # 主进程入口
│   ├── preload/
│   │   └── index.ts          # 预加载脚本入口
│   └── renderer/
│       ├── index.html        # 渲染进程 HTML
│       └── src/              # 渲染进程相关源码
│           └── constants/    # 常量
│           └── components/   # 通用组件
│           └── pages/        # 页面组件
│           └── hooks/        # hooks
│           └── services/     # 接口服务
│           └── store/        # 状态管理
│           └── utils/        # 工具函数
│           └── types/        # 通用类型
│           └── styles/       # 通用样式
```

## 安装依赖

```bash
npm install
```

## 启动开发环境

```bash
npm start
```

## 代码规范检查

```bash
npm run lint
```

## 打包应用

```bash
npm run package
```

## 生成安装包

```bash
npm run make
```

## 主要依赖

- electron
- react
- typescript
- electron-forge
- webpack
- eslint & prettier

## 环境区分

## 贡献者

- snowden.xu <snowden.xu@gmail.com>

## License

MIT
