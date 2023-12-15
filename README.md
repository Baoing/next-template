# Next JS 14, Tailwind CSS 3 和 TypeScript构建

🚀 这是一个使用 Next.js、Tailwind CSS 和 TypeScript 编写的 Landing Page  
⚡ 注重开发者体验，采用了 Next.js、TypeScript、ESLint、Prettier、Husky、Lint-Staged、VSCode、Netlify、PostCSS 和 Tailwind CSS。

### 功能特性
- 🔥 [Next.js](https://nextjs.org) 用于静态站点生成器
- 🎨 集成 [Tailwind CSS](https://tailwindcss.com)
- 💅 使用 PostCSS 处理 Tailwind CSS 并集成到 `styled-jsx`
- 🎉 类型检查 [TypeScript](https://www.typescriptlang.org)
- ✅ TypeScript 和 React 18 的严格模式
- ✏️ 使用 [ESLint](https://eslint.org) 进行代码检查（默认使用 NextJS、NextJS Core Web Vitals 和 Airbnb 配置）
- 🛠 使用 [Prettier](https://prettier.io) 进行代码格式化
- 🦊 使用 Husky 进行 Git Hooks
- 🚫 使用 Lint-staged 在 Git 暂存文件上运行代码检查
- 🗂 VSCode 配置：包括 PostCSS、ESLint、Prettier、TypeScript 的调试、设置、任务和扩展
- 🤖 SEO 元数据、JSON-LD 和 Open Graph 标签使用 Next SEO
- ⚙️[Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ 通过 Vercel 或 Netlify 一键部署（或手动部署到任何托管服务）
- 🌈 包含一个免费主题
- 💯 最大化 Lighthouse 分数


### 开始
要求 [Node.js 18.17](https://nodejs.org/en) 及以上版本。

依赖安装
```
npm install
```

本地运行
```
npm run dev
```

浏览器中预览项目http://localhost:3000

```
.
├── README.md            # README 文件
├── next.config.js       # Next JS 配置
├── public               # 公共文件夹
│   └── assets           # 资源目录
├── src
│   ├── components       # 组件文件夹
│   ├── layout           # 布局组件
│   ├── pages            # Next JS 页面
│   ├── styles           # 样式目录
│   └── utils            # 实用工具文件夹
├── tailwind.config.js   # Tailwind CSS 配置
└── tsconfig.json        # TypeScript 配置
```


### 部署到生产环境

```
$ npm run build
$ npm run start
```

生成的HTML和CSS文件被缩小(Next js的内置功能)。它还将删除未使用的CSS从[Tailwind.css](https://tailwindcss.com)。

您可以使用以下命令创建优化的生产构建:

```
npm run build-prod
```

所有生成的文件都位于`out`文件夹中，您可以使用任何托管服务部署该文件夹。