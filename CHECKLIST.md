# ✅ Surgio Netlify 部署检查清单

使用这个清单确保你的配置正确完成。

## 📋 部署前检查

- [ ] 已经准备好代理订阅链接
- [ ] 已有 Netlify 账号（或准备注册）
- [ ] 已有 GitHub 账号

## 🚀 部署步骤

### 第一阶段：初始部署

- [ ] 点击 "Deploy to Netlify" 按钮
- [ ] 授权 Netlify 访问 GitHub
- [ ] 等待部署完成
- [ ] 记录 Netlify 分配的域名：`__________________.netlify.app`

### 第二阶段：配置订阅

- [ ] 在 GitHub 中打开 `provider/example.js`
- [ ] 修改 `type` 为你的订阅类型（clash/shadowsocks/v2ray 等）
- [ ] 修改 `url` 为你的订阅链接
- [ ] 提交更改

### 第三阶段：更新 URL

- [ ] 打开 `surgio.conf.js`
- [ ] 找到 `urlBase` 配置
- [ ] 替换为你的 Netlify 域名
- [ ] 提交更改并等待重新部署

### 第四阶段：验证

- [ ] 在浏览器中打开 `https://你的域名.netlify.app/get-artifact/Surge5.conf`
- [ ] 确认能看到配置文件内容
- [ ] 配置中有节点信息（非空）

## 📱 客户端配置

### Surge

- [ ] 打开 Surge 应用
- [ ] 进入 "配置" 标签
- [ ] 点击 "从 URL 下载配置"
- [ ] 粘贴配置链接：`https://你的域名.netlify.app/get-artifact/Surge5.conf`
- [ ] 设置自动更新间隔（推荐 43200 秒 = 12 小时）
- [ ] 测试连接

### Quantumult-X

- [ ] 打开 Quantumult-X
- [ ] 长按右下角图标进入配置
- [ ] 点击 "下载" 选项卡
- [ ] 点击右上角 "+"
- [ ] 粘贴配置链接：`https://你的域名.netlify.app/get-artifact/QX.conf`
- [ ] 下载配置
- [ ] 测试连接

### Clash

- [ ] 打开 Clash 客户端
- [ ] 添加配置订阅
- [ ] 粘贴链接：`https://你的域名.netlify.app/get-artifact/Clash.yaml`
- [ ] 更新配置
- [ ] 测试连接

## 🔐 安全加固（可选）

- [ ] 登录 Netlify 后台
- [ ] 进入 Site settings → Environment variables
- [ ] 添加 `ACCESS_TOKEN` 环境变量
- [ ] 添加 `VIEWER_TOKEN` 环境变量
- [ ] 重新部署站点
- [ ] 更新客户端配置链接为：`https://你的域名.netlify.app/get-artifact/Surge5.conf?token=你的token`

## 🎨 自定义选项（可选）

- [ ] 根据需要修改 `template/surge_v5.tpl` 中的规则
- [ ] 根据需要修改 `template/quantumultx.tpl` 中的规则
- [ ] 在 `provider/` 中添加更多订阅源
- [ ] 在 `surgio.conf.js` 中添加自定义过滤器
- [ ] 配置自定义域名（在 Netlify 中）

## 🧪 测试清单

- [ ] 配置文件可以正常访问
- [ ] 节点列表不为空
- [ ] 可以成功导入到客户端
- [ ] 代理连接正常工作
- [ ] 规则分流正常工作
- [ ] 自动更新功能正常

## 📝 记录信息

完成配置后，记录以下信息供日后参考：

```
Netlify 域名: ___________________________
ACCESS_TOKEN: ___________________________
VIEWER_TOKEN: ___________________________
部署时间: _______________________________
订阅源数量: _____________________________
```

## 🔄 定期维护

每月检查：

- [ ] 订阅链接是否仍然有效
- [ ] Netlify 使用量是否正常
- [ ] 规则列表是否需要更新
- [ ] 令牌是否需要轮换

---

## ✅ 完成！

如果所有项目都已勾选，恭喜你成功部署了 Surgio！

**遇到问题？**

1. 查看 [QUICKSTART.md](./QUICKSTART.md) 快速开始指南
2. 查看 [DEPLOY.md](./DEPLOY.md) 详细部署文档
3. 访问 [Surgio 官方文档](https://surgio.js.org/)
4. 检查 Netlify Functions 日志