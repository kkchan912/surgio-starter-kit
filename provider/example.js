// Provider 配置示例
// 请根据你的实际情况修改此文件
module.exports = {
  type: 'clash', // 订阅类型：支持 shadowsocks, v2ray, trojan, https, clash 等
  url: 'https://raw.githubusercontent.com/aiboboxx/clashfree/main/clash.yml', // 你的订阅链接
  udpRelay: true, // 启用 UDP 转发
  addFlag: true,   // 添加国旗图标
  tls13: true,     // 启用 TLS 1.3
};
