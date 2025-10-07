# Surgio Netlify 部署指南

本项目使用 Surgio 生成 Surge 和 Quantumult-X 配置文件，并部署到 Netlify。

## 🚀 快速开始

### 1. 准备工作

1. 注册 [Netlify](https://www.netlify.com/) 账号
2. 准备你的代理订阅链接

### 2. 配置项目

#### 2.1 更新 Provider 配置

编辑 `provider/example.js`，替换为你的订阅链接：

```javascript
module.exports = {
  type: 'clash', // 订阅类型
  url: 'YOUR_SUBSCRIPTION_URL', // 替换为你的订阅链接
  udpRelay: true,
  addFlag: true,
  tls13: true,
};
```

#### 2.2 更新访问令牌（可选但推荐）

在 Netlify 中设置环境变量：

- `ACCESS_TOKEN`: 管理员访问令牌（用于访问所有功能）
- `VIEWER_TOKEN`: 访客访问令牌（只读权限）

如果不设置环境变量，将使用 `surgio.conf.js` 中的默认值。

### 3. 部署到 Netlify

#### 方式一：通过 GitHub（推荐）

1. 将代码推送到 GitHub 仓库
2. 登录 Netlify，点击 "New site from Git"
3. 选择你的 GitHub 仓库
4. Netlify 会自动识别配置（已在 `netlify.toml` 中配置）
5. 点击 "Deploy site"

#### 方式二：通过 Netlify CLI

```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录 Netlify
netlify login

# 初始化并部署
netlify init
netlify deploy --prod
```

### 4. 获取部署后的域名

部署完成后，Netlify 会分配一个域名，例如：`https://your-app-name.netlify.app`

### 5. 更新配置文件中的 URL

编辑 `surgio.conf.js`，将 `urlBase` 更新为你的 Netlify 域名：

```javascript
urlBase: 'https://your-app-name.netlify.app/get-artifact/',
```

更新后需要重新部署。

## 📱 使用配置

部署完成后，你可以通过以下链接访问配置：

### Surge 配置
```
https://your-app-name.netlify.app/get-artifact/Surge5.conf
```

### Quantumult-X 完整配置
```
https://your-app-name.netlify.app/get-artifact/QX.conf
```

### Quantumult-X 订阅配置
```
https://your-app-name.netlify.app/get-artifact/QX_subscribe.conf
```

### Clash 配置
```
https://your-app-name.netlify.app/get-artifact/Clash.yaml
```

## 🔧 在 Surge 中使用

1. 打开 Surge 应用
2. 点击 "配置" → "从 URL 下载配置"
3. 输入 Surge 配置链接
4. 设置自动更新间隔（建议 12 小时）

## 🔧 在 Quantumult-X 中使用

1. 打开 Quantumult-X 应用
2. 长按右下角图标进入配置页面
3. 点击 "下载" 选项卡
4. 点击右上角 "+"，输入配置链接
5. 下载并应用配置

## 🎨 自定义配置

### 添加新的 Provider

在 `provider/` 目录下创建新的 `.js` 文件，例如 `provider/my-provider.js`：

```javascript
module.exports = {
  type: 'shadowsocks',
  url: 'YOUR_SS_SUBSCRIPTION_URL',
  udpRelay: true,
  addFlag: true,
};
```

然后在 `surgio.conf.js` 的 `artifacts` 中添加使用该 provider 的配置：

```javascript
{
  name: 'My-Surge.conf',
  template: 'surge_v5',
  provider: 'my-provider', // 对应文件名（不含 .js）
  categories: [categories.SURGE],
},
```

### 自定义规则

规则配置在模板文件中：

- Surge 规则：`template/surge_v5.tpl`
- Quantumult-X 规则：`template/quantumultx.tpl`

你可以根据需要修改这些模板文件。

### 自定义节点过滤

在 `surgio.conf.js` 中定义自定义过滤器：

```javascript
customFilters: {
  // 只包含名称中包含 "HK" 的节点
  hkOnly: (nodeConfig) => nodeConfig.nodeName.includes('HK'),
  
  // 排除特定关键词的节点
  excludeExpired: utils.discardKeywords(['过期', 'expired']),
},
```

## 🔐 安全建议

1. **启用认证**：在生产环境中建议启用 gateway 认证
2. **使用环境变量**：不要在代码中硬编码敏感信息
3. **定期更换令牌**：定期更新 ACCESS_TOKEN 和 VIEWER_TOKEN
4. **自定义域名**：可以在 Netlify 中绑定自定义域名

## 📚 更多信息

- [Surgio 官方文档](https://surgio.js.org/)
- [Surge 官方文档](https://manual.nssurge.com/)
- [Quantumult-X 配置教程](https://github.com/crossutility/Quantumult-X)

## ⚠️ 注意事项

1. 首次部署后记得更新 `surgio.conf.js` 中的 `urlBase`
2. Provider 订阅链接必须可访问
3. Netlify 免费版有带宽限制，不要过度频繁更新
4. 配置文件会缓存，可能需要等待几分钟才能看到更新

## 🆘 故障排除

### 配置无法访问

1. 检查 Netlify 部署状态
2. 确认 `urlBase` 设置正确
3. 查看 Netlify Functions 日志

### 节点列表为空

1. 检查 Provider 的订阅链接是否有效
2. 确认订阅类型（type）设置正确
3. 查看 Netlify Functions 错误日志

### 无法导入到客户端

1. 确认配置链接可以在浏览器中打开
2. 检查客户端是否支持该配置格式
3. 尝试手动下载配置文件后导入