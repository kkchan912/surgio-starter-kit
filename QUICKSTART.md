# 🚀 快速开始指南

## 5分钟部署 Surgio 到 Netlify

### 步骤 1: 一键部署

点击 README 中的 "Deploy to Netlify" 按钮，然后：

1. 登录或注册 Netlify
2. 授权访问 GitHub
3. 等待部署完成（约1-2分钟）
4. 记下你的域名：`https://your-app-name.netlify.app`

### 步骤 2: 配置订阅源

在 GitHub 仓库中编辑 `provider/example.js`：

```javascript
module.exports = {
  type: 'clash',        // 订阅类型
  url: '你的订阅链接',   // ← 改这里
  udpRelay: true,
  addFlag: true,
  tls13: true,
};
```

**支持的订阅类型：**
- `clash` - Clash 订阅
- `shadowsocks` - SS 订阅
- `v2ray` - V2Ray 订阅
- `trojan` - Trojan 订阅
- `ssd` - SSD 订阅

### 步骤 3: 更新 URL 配置

编辑 `surgio.conf.js`，找到这一行：

```javascript
urlBase: 'https://your-app-name.netlify.app/get-artifact/',
//        ↑ 改成你的 Netlify 域名
```

提交后 Netlify 会自动重新部署。

### 步骤 4: 使用配置

#### 📱 Surge 用户

配置链接：
```
https://your-app-name.netlify.app/get-artifact/Surge5.conf
```

**导入方法：**
1. 打开 Surge
2. 配置 → 从 URL 下载配置
3. 粘贴链接 → 下载
4. 设置更新间隔：12小时

#### 📱 Quantumult-X 用户

**完整配置链接：**
```
https://your-app-name.netlify.app/get-artifact/QX.conf
```

**订阅节点链接：**
```
https://your-app-name.netlify.app/get-artifact/QX_subscribe.conf
```

**导入方法：**
1. 长按 QX 右下角图标
2. 下载 → 右上角 + 
3. 粘贴链接 → 下载

#### 📱 Clash 用户

配置链接：
```
https://your-app-name.netlify.app/get-artifact/Clash.yaml
```

## 🔧 常见配置示例

### 示例 1: 使用 Clash 订阅

```javascript
// provider/example.js
module.exports = {
  type: 'clash',
  url: 'https://example.com/api/v1/client/subscribe?token=xxx',
  udpRelay: true,
  addFlag: true,
};
```

### 示例 2: 使用 Shadowsocks 订阅

```javascript
// provider/example.js
module.exports = {
  type: 'shadowsocks',
  url: 'https://example.com/link/xxx?sub=1',
  udpRelay: true,
  addFlag: true,
};
```

### 示例 3: 添加多个订阅源

1. 创建 `provider/second.js`：
```javascript
module.exports = {
  type: 'clash',
  url: 'https://second-provider.com/subscribe?token=xxx',
  udpRelay: true,
  addFlag: true,
};
```

2. 在 `surgio.conf.js` 的 `artifacts` 数组中添加：
```javascript
{
  name: 'Surge5-Second.conf',
  template: 'surge_v5',
  provider: 'second',  // 对应 provider/second.js
  categories: [categories.SURGE],
},
```

## ⚡ 快速测试

部署完成后，在浏览器中访问：
```
https://your-app-name.netlify.app/get-artifact/Surge5.conf
```

如果看到配置文件内容，说明部署成功！

## 🔐 安全建议

在 Netlify 设置环境变量（可选）：

```
Site Settings → Environment variables → Add variable
```

添加：
- `ACCESS_TOKEN` = 你的密码1（用于管理）
- `VIEWER_TOKEN` = 你的密码2（用于只读）

然后在配置链接后加上：`?token=你的密码`

## ❓ 遇到问题？

### 配置文件是空的？

1. 检查订阅链接是否正确
2. 确认订阅类型 `type` 设置正确
3. 查看 Netlify 的 Functions 日志

### 无法导入到客户端？

1. 先在浏览器打开配置链接，确认有内容
2. 检查客户端版本是否支持
3. 尝试重新下载配置

### 需要更详细的说明？

查看完整文档：
- [DEPLOY.md](./DEPLOY.md) - 详细部署指南
- [README.md](./README.md) - 项目说明

---

## 🎉 完成！

现在你已经成功部署了自己的 Surgio 配置服务！

**下一步：**
- ⭐ Star 这个项目
- 📖 阅读 [Surgio 官方文档](https://surgio.js.org/) 了解更多高级功能
- 🎨 自定义规则和节点分组