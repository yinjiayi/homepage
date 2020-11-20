/**
 * eslint 不认识 window， navigator 全局变量
 * 解决： 需要修改 package.json中eslintConfig配置
 * "env": {
 *    "browser": true
 * }
 *
 * sw 代码必须运行在服务器上
 * --> nodejs
 * --> npm i serve -g
 *     serve -s build  // 启动服务器，将build目录下所有资源作为静态资源暴露出去
 *
 * */
// 注册 serviceworker
// 处理兼容性问题
