// Provider 配置示例
// 请根据你的实际情况修改此文件
module.exports = {
  type: 'shadowsocks', // 订阅类型：支持 shadowsocks, v2ray, trojan, https, clash 等
  url: 'ss://YWVzLTI1Ni1nY206S0pGMjkxU1NtSnU5T2llYkhxWGNWdmlyMVBaNWFaRE56VFdqenN6WE0vcz0=@tw.kkchan.eu.org:10041#shadowsocks-10041',
  udpRelay: true, // 启用 UDP 转发
  addFlag: true,   // 添加国旗图标
  tls13: true,     // 启用 TLS 1.3
};
