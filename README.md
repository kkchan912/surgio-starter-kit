## Surgio新手包

### 前言

从我2019年底开始第一次发现并使用Surgio以来，除开第一次配置的时候花费了大量时间，给作者发邮件，在tg群里取经等，截止目前已经快稳定使用4个年头了

经常会在v2看到有各种提问，“**怎么组合多个机场订阅？**”，往机场提供的托管配置里添加个人定制的配置等等，每次我看到基本都会在下面说“**要不去试试Surgio**”（开始有水军嫌疑了，但是个人是觉得真的好用

目前我这个新手包里，准备了常见的Clash/QX/Surge三个软件的配置文件，相信能够覆盖大部分人的使用需求了，按照之前帮助过的一个老哥的话来说，“之前一直看不太懂Surgio的文档，有你发我的这份能够直接运行的新手包之后，回过头再去看文档，发现很多就恍然大悟了”

### 劝退？

看到过不少人因为觉得Surgio配置繁琐，文档难以理解，加上大部分人没有这个时间去慢慢研究，就被劝退了，确实Surgio的文档比较的“**程序员**”，对于一些才上手玩代理分流工具App的人来说确实比较晦涩；

几年来在tg上已经帮助了好几个不管是v2的还是tg群里的朋友实现了他们自己的Surgio托管，这也是我这次想来推行这个新手包的目的，让自己一劳永逸，也让别人更加方便

### 类似工具对比？优势？

你可能会说怎么不用订阅转换、Sub-store等等工具，在我看来，保护订阅的隐私性+配置模板的高度定制化才是我更想要的，加上19年的时候好像还不流行这些工具（狗头

### 使用步骤

只需要点击下面的Deploy按钮即可生成一份“初始化”的，托管在Netlify平台的配置

### Deploy to Netlify

点击即可直接部署到Netlify；

Surgio支持部署到Vercel/Railway/自建等平台，这里只以Netlify为例子

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kkchan912/surgio-starter-kit)

---

## 📖 详细使用教程

### 第一步：部署到 Netlify

1. 点击上面的 "Deploy to Netlify" 按钮
2. 授权 Netlify 访问你的 GitHub
3. 等待部署完成
4. 记录你的 Netlify 域名，例如：`https://your-app-name.netlify.app`

### 第二步：配置订阅源

1. 克隆仓库到本地或直接在 GitHub 上编辑
2. 打开 `provider/example.js`
3. 修改 `url` 为你的订阅链接：

```javascript
module.exports = {
  type: 'clash',  // 根据你的订阅类型修改（支持 clash, shadowsocks, v2ray 等）
  url: '你的订阅链接',  // 替换为你的实际订阅链接
  udpRelay: true,
  addFlag: true,
  tls13: true,
};
```

### 第三步：更新配置 URL

1. 打开 `surgio.conf.js`
2. 找到 `urlBase` 配置项
3. 替换为你的 Netlify 域名：

```javascript
urlBase: 'https://your-app-name.netlify.app/get-artifact/',
```

4. 提交更改，Netlify 会自动重新部署

### 第四步：获取配置文件

部署完成后，你可以通过以下链接获取配置：

- **Surge 5**: `https://your-app-name.netlify.app/get-artifact/Surge5.conf`
- **Quantumult-X 完整配置**: `https://your-app-name.netlify.app/get-artifact/QX.conf`
- **Quantumult-X 订阅**: `https://your-app-name.netlify.app/get-artifact/QX_subscribe.conf`
- **Clash**: `https://your-app-name.netlify.app/get-artifact/Clash.yaml`

### 在 Surge 中使用

1. 打开 Surge 应用
2. 进入 "配置" 标签
3. 点击 "从 URL 下载配置"
4. 粘贴 Surge 配置链接
5. 设置自动更新间隔（推荐 12 小时）

### 在 Quantumult-X 中使用

1. 打开 Quantumult-X
2. 长按底部图标进入配置页面
3. 点击 "下载" 选项卡
4. 点击右上角 "+" 添加配置链接
5. 下载并应用配置

## 🔐 安全设置（可选）

为了保护你的配置，建议在 Netlify 后台设置环境变量：

1. 登录 Netlify
2. 进入你的站点 → Site settings → Environment variables
3. 添加以下变量：
   - `ACCESS_TOKEN`: 设置一个强密码（管理员权限）
   - `VIEWER_TOKEN`: 设置一个强密码（只读权限）

## 🎨 自定义配置

### 添加多个订阅源

1. 在 `provider/` 目录下创建新文件，如 `provider/my-second.js`
2. 配置订阅信息
3. 在 `surgio.conf.js` 的 `artifacts` 中添加新的配置：

```javascript
{
  name: 'My-Second-Surge.conf',
  template: 'surge_v5',
  provider: 'my-second',
  categories: [categories.SURGE],
},
```

### 自定义规则

- Surge 规则在 `template/surge_v5.tpl`
- Quantumult-X 规则在 `template/quantumultx.tpl`
- Clash 规则在 `template/auto_clash.tpl`

根据需要修改这些模板文件。

## 📚 更多帮助

详细的部署和配置说明，请查看 [DEPLOY.md](./DEPLOY.md)

## 🆘 常见问题

**Q: 配置无法访问？**  
A: 检查 Netlify 部署状态，确认 `urlBase` 设置正确。

**Q: 节点列表为空？**  
A: 检查 Provider 订阅链接是否有效，确认订阅类型设置正确。

**Q: 无法导入到客户端？**  
A: 确认配置链接可以在浏览器中打开，检查客户端是否支持该格式。

---

## 参考资源

- [Surgio 官方文档](https://surgio.js.org/)
- [详细部署指南](./DEPLOY.md)
